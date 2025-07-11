"use server";

import { prisma } from "@/lib/prisma";

export async function getEvents() {
  const events = await prisma.events.findMany({});
  return events;
}
