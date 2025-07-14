"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function EventCard({ event }) {
  const banner = event.eventbanner[0];
  const [imageError, setImageError] = useState(false);

  const date = new Date(event.date_time).toLocaleString("id-ID", {
    timeZone: "Asia/Jakarta",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <Link
      href={`/event/${event.id}`}
      className="block bg-white rounded-lg shadow-md hover:shadow-xl transition"
    >
      {banner && !imageError ? (
        <Image
          src={banner.path}
          alt={event.title}
          width={800}
          height={400}
          className="rounded-t-lg object-cover h-48 w-full"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="h-48 bg-gray-100 rounded-t-lg flex items-center justify-center text-gray-400 text-xl font-semibold">
          MainBareng
        </div>
      )}

      <div className="p-4 space-y-1">
        <h2 className="text-lg font-semibold">{event.title}</h2>
        <p className="text-sm text-gray-500">{date}</p>
        <p className="text-sm text-gray-600">
          {event.location_name ?? "Lokasi TBA"}
        </p>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>{event.sport_type ?? "Other"}</span>
          <span>{event.city}</span>
        </div>
      </div>
    </Link>
  );
}
