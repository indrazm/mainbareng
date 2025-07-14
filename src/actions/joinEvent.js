"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function joinEvent(formData) {
  const userId = formData.get("userId");
  const eventId = formData.get("eventId");

  const user_id = parseInt(userId);
  const event_id = parseInt(eventId);

  const existingParticipant = await prisma.participants.findFirst({
    where: {
      event_id,
      user_id,
    },
  });

  if (existingParticipant) {
    await prisma.participants.update({
      where: { id: existingParticipant.id },
      data: { status: "joined" },
    });
  } else {
    await prisma.participants.create({
      data: {
        event_id,
        user_id,
      },
    });
  }

  revalidatePath(`/event/${event_id}`);
}
