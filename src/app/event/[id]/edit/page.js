import { prisma } from "@/lib/prisma";
import { getActiveUser } from "@/utils/getActiveUser";
import UpdateEventForm from "@/components/UpdateEventForm";
import { redirect } from "next/navigation";

export default async function EditEventPage({ params }) {
  const { id } = await params;
  const eventId = parseInt(id);

  const user = await getActiveUser();
  if (!user) redirect("/event");

  const event = await prisma.events.findUnique({
    where: { id: eventId },
    include: { user: true },
  });

  if (!event || event.user_id !== user.id) {
    redirect(`/event/${eventId}`);
  }

  return (
    <main className="max-w-3xl mx-auto py-10 px-4 mt-10">
      <h1 className="text-xl font-bold mb-4">Edit Event</h1>
      <UpdateEventForm event={event} />
    </main>
  );
}
