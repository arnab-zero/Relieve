import { useOutletContext } from "react-router-dom";
import EventDetailCard from "../EventDetailCard";

const Events = () => {
  const { events } = useOutletContext();
  console.log("Events: ", events);

  return (
    <div>
      {events?.map((event) => (
        <EventDetailCard key={event.eventId} event={event} />
      ))}
    </div>
  );
};

export default Events;
