import React from 'react';
import { Bell } from 'lucide-react';
import { Button } from "@/components/ui/button"

const NotificationIcon = ({ count, onClick }) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative"
      onClick={onClick}
    >
      <Bell className="h-6 w-6" />
      {count > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
          {count}
        </span>
      )}
    </Button>
  );
};

export default NotificationIcon;