import React from "react";
import { MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";

const Card = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-md rounded-lg p-4 ${className} mb-5`}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className }) => {
  return <div className={`border-b pb-4 mb-4 ${className}`}>{children}</div>;
};

const Avatar = ({ children, className }) => {
  return (
    <div className={`rounded-full overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

const AvatarImage = ({ src, alt }) => {
  return <img src={src} alt={alt} className="w-full h-full object-cover" />;
};

const AvatarFallback = ({ children }) => {
  return (
    <div className="flex items-center justify-center bg-gray-300 text-white text-xl">
      {children}
    </div>
  );
};

export default function CommunityDetailCard({ props }) {
  const community = props.community;
  const events = props.events;
  // Removed events as it's not passed to this component
  // console.log("Props from card: ", community, events);

  // Check if community is undefined or null
  if (!community) {
    return <div>Loading community data...</div>;
  }

  const {
    orgId = "",
    orgName = "Unknown Organization",
    orgImage = "",
    location = "Unknown Location",
    contactNumbers = [],
    volunteers = [],
    description = "No description available",
    ongoingEvents = [],
    pastEvents = [],
    upcomingEvents = [],
  } = community;

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="w-16 h-16">
          {orgImage ? (
            <AvatarImage src={orgImage} alt={orgName} />
          ) : (
            <AvatarFallback>{orgName?.charAt(0)}</AvatarFallback>
          )}
        </Avatar>
        <div>
          <h2 className="text-2xl font-bold hover:underline hover:cursor-pointer">
            <NavLink to={`/community/${orgId}`} state={{ community, events }}>
              {orgName}
            </NavLink>
          </h2>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {location}
          </p>
        </div>
      </CardHeader>

      {/* Description */}
      <p className="text-gray-700">{description}</p>

      {/* Contact information */}
      {contactNumbers?.length > 0 && (
        <div className="mt-4">
          <h4 className="text-lg font-bold">Contact:</h4>
          <p>{contactNumbers.join(", ")}</p>
        </div>
      )}

      {/* Volunteers (if any) */}
      {volunteers?.length > 0 && (
        <div className="mt-4">
          <h4 className="text-lg font-bold">Volunteers:</h4>
          <p>{volunteers.join(", ")}</p>
        </div>
      )}

      {/* Ongoing/Upcoming events can be displayed here */}
    </Card>
  );
}