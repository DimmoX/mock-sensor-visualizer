import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Notification = ({ message, type }) => {
  return (
    <Alert variant={type === 'error' ? "destructive" : "default"} className="fixed top-4 left-4 w-auto max-w-md z-50">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{type === 'error' ? 'Alerta' : 'Advertencia'}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export default Notification;