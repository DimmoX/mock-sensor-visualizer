import React, { useState, useEffect } from 'react';
import NotificationIcon from './NotificationIcon';
import Notification from './Notification';

const NotificationManager = ({ notifications }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeNotifications, setActiveNotifications] = useState([]);

  useEffect(() => {
    setActiveNotifications(notifications);
  }, [notifications]);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const removeNotification = (index) => {
    setActiveNotifications(activeNotifications.filter((_, i) => i !== index));
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        <NotificationIcon
          count={activeNotifications.length}
          onClick={toggleNotifications}
        />
        {showNotifications && (
          <div className="absolute top-full right-0 mt-2 w-80 max-h-[80vh] overflow-y-auto">
            {activeNotifications.map((notification, index) => (
              <Notification
                key={index}
                message={notification.message}
                type={notification.type}
                onClose={() => removeNotification(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationManager;