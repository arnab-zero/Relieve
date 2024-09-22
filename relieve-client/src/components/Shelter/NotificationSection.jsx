// components/NotificationSection.jsx
const NotificationSection = ({ notifications }) => {
    return (
      <div className="mt-6">
        {notifications.length === 0 ? (
          <p>No notifications.</p>
        ) : (
          <ul className="list-disc">
            {notifications.map((notification, index) => (
              <li key={index}>{notification}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default NotificationSection;
  