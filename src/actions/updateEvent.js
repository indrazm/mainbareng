"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateEvent(formData) {
  const eventId = formData.get("eventId");
  const title = formData.get("title");
  const description = formData.get("description") || "";
  const date = formData.get("date");
  const time = formData.get("time");
  const location_name = formData.get("location_name") || "";
  const city = formData.get("city");
  const max_participant = parseInt(formData.get("max_participant")) || null;
  const price = parseInt(formData.get("price")) || null;
  const sport_type = formData.get("sport_type");
  const is_private = formData.get("is_private");

  const date_time = new Date(`${date} ${time}`);
  if (isNaN(date_time.getTime())) {
    throw new Error("Invalid date or time format");
  }

  await prisma.events.update({
    where: { id: parseInt(eventId) },
    data: {
      title,
      description,
      date_time,
      location_name,
      city,
      max_participant,
      price,
      sport_type,
      is_private,
    },
  });

  revalidatePath(`/event/${eventId}`);
}
