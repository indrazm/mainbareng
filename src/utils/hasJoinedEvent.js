import { prisma } from "@/lib/prisma";

export async function hasJoinedEvent(eventId, userId) {
  const participant = await prisma.participants.findFirst({
    where: {
      event_id: eventId,
      user_id: userId,
      status: "joined",
    },
  });

  return !!participant;
}
