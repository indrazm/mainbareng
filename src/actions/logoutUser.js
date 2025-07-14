"use server";

import { cookies } from "next/headers";

export async function logoutUser() {
  const cookieStore = await cookies();

  cookieStore.set("token", "", {
    httpOnly: true,
    path: "/",
    expires: new Date(0),
  });
}
