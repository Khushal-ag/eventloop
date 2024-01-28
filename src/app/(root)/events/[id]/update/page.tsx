import { auth } from "@clerk/nextjs";

import { getEventById } from "@/lib/actions/event.actions";
import { IEvent } from "@/lib/database/models/event.model";
import EventForm from "@/components/shared/EventForm";

type UpdateEventProps = {
  params: {
    id: string;
  };
};

const UpdateEvent = async ({ params: { id } }: UpdateEventProps) => {
  const event = (await getEventById(id)) as IEvent;
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Update Event
        </h3>
      </section>
      <div className="wrapper my-8">
        <EventForm
          event={event}
          eventId={event._id}
          type="Update"
          userId={userId}
        />
      </div>
    </>
  );
};

export default UpdateEvent;
