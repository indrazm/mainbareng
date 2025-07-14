"use client";

import { Button } from "@heroui/react";
import { deleteEvent } from "@/actions/deleteEvent";

export default function DeleteEventButton({ eventId }) {
  async function handleDelete(formData) {
    const confirmed = window.confirm(
      "This action will permanently delete the event. Are you sure you want to continue? "
    );
    if (!confirmed) return;

    return await deleteEvent(formData);
  }

  return (
    <form action={handleDelete}>
      <input type="hidden" name="eventId" value={eventId} />
      <Button size="sm" variant="light" color="danger" type="submit">
        Delete
      </Button>
    </form>
  );
}
