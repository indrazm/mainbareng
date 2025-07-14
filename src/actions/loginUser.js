"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function loginUser(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const user = await prisma.users.findUnique({ where: { email } });

  if (!user) {
    throw new Error("User not found");
  }

  if (!(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid password");
  }

  const payload = {
    userId: user.id,
    email: user.email,
    first_name: user.first_name,
  };

  const jwtToken = jwt.sign(payload, process.env.JWT_SECRET);

  const cookieStore = await cookies();

  cookieStore.set("token", jwtToken, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24,
  });
}
