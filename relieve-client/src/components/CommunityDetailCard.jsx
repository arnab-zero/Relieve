import React from "react";
import { MapPin, Phone, Users, Calendar } from "lucide-react";

// Card Components
const Card = ({ className, children }) => (
  <div className={`border rounded-lg shadow-lg ${className}`}>{children}</div>
);

const CardHeader = ({ className, children }) => (
  <div className={`border-b p-4 ${className}`}>{children}</div>
);

const CardContent = ({ className, children }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const CardFooter = ({ className, children }) => (
  <div className={`border-t p-4 flex ${className}`}>{children}</div>
);

// Avatar Components
const Avatar = ({ className, children }) => (
  <div className={`rounded-full overflow-hidden ${className}`}>{children}</div>
);

const AvatarImage = ({ src, alt }) => (
  <img src={src} alt={alt} className="object-cover w-full h-full" />
);

const AvatarFallback = ({ children }) => (
  <div className="flex items-center justify-center w-full h-full bg-gray-300 text-gray-600">
    {children}
  </div>
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

export default function Component({ community }) {
  const {
    orgName,
    orgImage,
    location,
    contactNumbers,
    volunteers,
    description,
    ongoingEvents,
    pastEvents,
    upcomingEvents,
  } = community;

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="w-16 h-16">
          <AvatarImage src={orgImage} alt={orgName} />
          <AvatarFallback>{orgName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-2xl font-bold">{orgName}</h2>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {location}
          </p>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {contactNumbers.map((number, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              {number}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold">{volunteers.length}</p>
            <p className="text-xs text-muted-foreground">Volunteers</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{ongoingEvents.length}</p>
            <p className="text-xs text-muted-foreground">Ongoing Events</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{pastEvents.length}</p>
            <p className="text-xs text-muted-foreground">Past Events</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{upcomingEvents.length}</p>
            <p className="text-xs text-muted-foreground">Upcoming Events</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Users className="w-4 h-4" />
          <span>{volunteers.length} volunteers</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>{ongoingEvents.length + upcomingEvents.length} active events</span>
        </div>
      </CardFooter>
    </Card>
  );
}
