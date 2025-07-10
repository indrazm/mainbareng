"use client";

export default function EventList({ events }) {
  return (
    <div className="space-y-4">
      {events.map((event) => {
        return (
          <div key={event.id} className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p className="text-gray-600">
              {event.location_name}, {event.city} —{" "}
              {new Date(event.date_time).toLocaleDateString()}
            </p>
            <p className="mt-2">{event.description}</p>
          </div>
        );
      })}
    </div>
  );
}
