import React from "react";
import { MapPin, Phone, Users, Calendar } from "lucide-react";

// Card Components
const Card = ({ className, children }) => (
  <div className={`border rounded-lg shadow-lg ${className}`}>{children}</div>
);

const CardHeader = ({ children }) => (
  <div className="border-b p-4">{children}</div>
);

const CardContent = ({ className, children }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const CardFooter = ({ className, children }) => (
  <div className={`border-t p-4 ${className}`}>{children}</div>
);

// Badge Component
const Badge = ({ variant, className, children }) => (
  <span
    className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
      variant === "secondary"
        ? "bg-gray-200 text-gray-800"
        : "bg-blue-200 text-blue-800"
    } ${className}`}
  >
    {children}
  </span>
);

export default function EventDetailCard({ event }) {
  const {
    eventName,
    communityId,
    location,
    contacts,
    volunteers,
    description,
    dateFrom,
    dateTo,
  } = event;

  console.log("Event: ", event);

  const eventDuration = Math.ceil(
    (new Date(dateTo) - new Date(dateFrom)) / (1000 * 60 * 60 * 24)
  );

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <h2 className="text-2xl font-bold">{eventName}</h2>
        <p className="text-sm text-muted-foreground">
          Organized by {communityId}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2 text-sm">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {contacts.length !== 0 &&
            contacts.map((number, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="flex items-center space-x-1"
              >
                <Phone className="w-3 h-3" />
                <span>{number}</span>
              </Badge>
            ))}
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <Users className="w-4 h-4" />
          <span>{volunteers.length} volunteers</span>
        </div>
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Event Details</h3>
          <p className="text-sm">{description}</p>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <Calendar className="w-4 h-4" />
          <span>
            From {new Date(dateFrom).toLocaleDateString()} to{" "}
            {new Date(dateTo).toLocaleDateString()}
          </span>
        </div>
      </CardContent>
      <CardFooter className="bg-muted">
        <p className="text-sm text-muted-foreground">
          Event duration: {eventDuration} {eventDuration === 1 ? "day" : "days"}
        </p>
      </CardFooter>
    </Card>
  );
}
