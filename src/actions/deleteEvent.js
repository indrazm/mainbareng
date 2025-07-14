// actions/deleteEvent.js
"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function deleteEvent(formData) {
  const eventId = formData.get("eventId");
  await prisma.events.delete({ where: { id: parseInt(eventId) } });

  redirect("/event");
}
