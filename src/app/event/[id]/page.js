import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, CardHeader, Button } from "@heroui/react";
import { getActiveUser } from "@/utils/getActiveUser";
import { hasJoinedEvent } from "@/utils/hasJoinedEvent";
import { joinEvent } from "@/actions/joinEvent";
import { cancelJoinEvent } from "@/actions/cancelJoinEvent";
import { deleteEvent } from "@/actions/deleteEvent";
import DeleteEventButton from "@/components/DeleteEventButton";

export default async function EventDetailPage({ params }) {
  const { id } = await params;

  const event = await prisma.events.findUnique({
    where: { id: parseInt(id) },
    include: {
      user: true,
      eventbanner: true,
      participants: true,
    },
  });

  if (!event)
    return (
      <main className="max-w-3xl mx-auto py-10 px-4 mt-10">
        <Card
          shadow="lg"
          className="h-[200px] flex items-center justify-center space-y-3"
        >
          <div className="w-full flex items-center justify-center text-gray-500 text-xl font-semibold">
            MainBareng
          </div>
          <div className="w-full flex items-center justify-center text-gray-500 text-large font-semibold">
            Event Tidak Ditemukan
          </div>
        </Card>
      </main>
    );

  const creator = `${event.user.first_name} ${event.user.last_name}`;

  const banner = event.eventbanner[0];
  console.log(banner);
  const formattedDate = new Date(event.date_time).toLocaleString("id-ID", {
    timeZone: "Asia/Jakarta",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const user = await getActiveUser();
  let hasJoined = false;

  if (user) {
    hasJoined = await hasJoinedEvent(event.id, user.id);
  }

  return (
    <main className="max-w-3xl mx-auto py-10 px-4 mt-10">
      <Card shadow="lg" className="overflow-hidden">
        {banner ? (
          <Image
            src={banner.path}
            alt={event.title}
            width={1200}
            height={600}
            className="w-full h-64 object-cover"
          />
        ) : (
          <div className="w-full h-64 bg-gray-100 flex items-center justify-center text-gray-500 text-xl font-semibold">
            MainBareng
          </div>
        )}

        <CardHeader className="px-6 pt-4 pb-2 space-y-1">
          <div>
            <h1 className="text-2xl font-bold">{event.title}</h1>
            <p className="text-sm text-gray-500">Dibuat oleh {creator}</p>
            {user?.id === event.user_id && (
              <div className="flex space-x-1.5">
                <Link href={`/event/${event.id}/edit`}>
                  <Button size="sm" variant="light" color="warning">
                    Edit
                  </Button>
                </Link>
                <DeleteEventButton eventId={event.id} />
              </div>
            )}
          </div>
        </CardHeader>

        <CardBody className="px-6 pb-6 space-y-4">
          {event.description && (
            <div>
              <p className="text-sm text-gray-700">{event.description}</p>
            </div>
          )}

          <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm text-gray-700">
            <div>
              <span className="font-semibold">Tanggal:</span>
              <br /> {formattedDate}
            </div>
            <div>
              <span className="font-semibold">Lokasi:</span>
              <br />
              {event.location_name ?? "TBA"}, {event.city}
            </div>
            <div>
              <span className="font-semibold">Olahraga:</span>
              <br />
              {event.sport_type ?? "Other"}
            </div>
            <div>
              <span className="font-semibold">Status:</span>
              <br />
              {event.is_private ? "Private" : "Public"}
            </div>
            {event.max_participant && (
              <div>
                <span className="font-semibold">Jumlah Peserta:</span>
                <br />
                {event.max_participant} peserta
              </div>
            )}
            {event.price && (
              <div>
                <span className="font-semibold">Total Biaya:</span>
                <br />
                Rp {event.price.toLocaleString()}
              </div>
            )}
          </div>
          <div className="flex justify-between">
            <Link href="/event">
              <Button color="primary" variant="light">
                ← Back
              </Button>
            </Link>
            {hasJoined ? (
              <div className="flex">
                <form action={cancelJoinEvent}>
                  <input type="hidden" name="userId" value={user.id} />
                  <input type="hidden" name="eventId" value={event.id} />
                  <Button color="warning" variant="light" type="submit">
                    Cancel
                  </Button>
                </form>

                <Button color="success" variant="light" isDisabled>
                  Already Joined
                </Button>
              </div>
            ) : (
              <form action={joinEvent}>
                <input type="hidden" name="userId" value={user.id} />
                <input type="hidden" name="eventId" value={event.id} />
                <Button color="primary" type="submit">
                  Join
                </Button>
              </form>
            )}
          </div>
        </CardBody>
      </Card>
    </main>
  );
}
