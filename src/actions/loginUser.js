"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function loginUser(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const user = await prisma.users.findUnique({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid credentials");
  }

  return user;
}
