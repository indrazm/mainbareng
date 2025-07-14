import { prisma } from "@/lib/prisma";
import EventCard from "@/components/EventCard";
import CreateEventButton from "@/components/CreateEventButton";

export default async function EventPage() {
  const events = await prisma.events.findMany({
    include: {
      user: true,
      eventbanner: true,
      participants: true,
    },
    orderBy: { date_time: "asc" },
  });

  return (
    <section className="max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Events</h1>
      {events.length === 0 ? (
        <p className="text-gray-500">Belum ada event. Yuk bikin!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
      <CreateEventButton />
    </section>
  );
}
