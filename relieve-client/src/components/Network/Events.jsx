import { useOutletContext } from "react-router-dom";

const Events = () => {
  const { events } = useOutletContext();
  console.log("Events: ", events);

  return (
    <div>
      {events?.map((event) => (
        <div key={event.eventId}>
          <h1>{event.eventName}</h1>
        </div>
      ))}
    </div>
  );
};

export default Events;
