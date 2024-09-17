
const IncidentCard = ({incident}) => {
    const {contact, description, eventId, incidentId, isVerified, location, mapLink, requestType, status, upazilla, updateDetail, userId, zilla} = incident;
    return (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-gray-100 border border-gray-300 rounded-lg shadow-lg p-4 mb-4">
            {/* Left Section: Zilla, Upazilla, and Contact */}
            <div className="flex flex-col md:w-1/3">
                <h3 className="text-lg font-bold text-gray-600">{zilla}, {upazilla}</h3>
                <span className={`text-sm ${isVerified ? 'text-green-500' : 'text-red-500'}`}>
                    {isVerified ? 'Verified' : 'Not Verified'}
                </span>
                <p className="text-gray-600">Contact: {contact}</p>
            </div>

            {/* Center Section: Location, Request Type, and Status */}
            <div className="flex flex-col md:w-1/3 my-4 md:my-0">
                <p className="text-gray-600">Location: {location}</p>
                {mapLink && (
                    <a href={mapLink} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                        View on Map
                    </a>
                )}
                <p className="text-gray-600">Request Type: {requestType}</p>
                <p className={`text-gray-600 ${status === 'pending' ? 'text-yellow-500' : status === 'resolved' ? 'text-green-500' : 'text-red-500'}`}>
                    Status: {status}
                </p>
            </div>

            {/* Right Section: Event and Incident Details */}
            <div className="flex flex-col md:w-1/3 text-gray-600">
                <p>Event ID: {eventId}</p>
                <p>Incident ID: {incidentId}</p>
                {updateDetail && (
                    <p className="text-sm">Update: {updateDetail}</p>
                )}
                <p>Description: {description}</p>
            </div>
        </div>
    );
};

export default IncidentCard;