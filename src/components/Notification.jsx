import React from 'react';
import { AlertCircle, X } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const Notification = ({ message, type, onClose }) => {
  return (
    <Alert variant={type === 'error' ? "destructive" : "default"} className="mb-2 relative">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{type === 'error' ? 'Alerta' : 'Advertencia'}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 hover:bg-transparent"
        onClick={onClose}
      >
        <X className="h-4 w-4" />
      </Button>
    </Alert>
  );
};

export default Notification;