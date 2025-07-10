import { getEvents } from "@/actions/getEvents";
import EventList from "@/components/EventList";

export default async function EventPage() {
  const events = await getEvents();

  return (
    <main className="max-w-4xl mx-auto mt-24 px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Cari Event</h1>
      <EventList events={events} />
    </main>
  );
}
