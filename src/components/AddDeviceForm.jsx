import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const AddDeviceForm = ({ onAddDevice }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && type) {
      const newDevice = {
        id: `${type}${Date.now()}`,
        name,
        type,
      };
      onAddDevice(newDevice);
      setName('');
      setType('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Device Name"
        required
      />
      <Select value={type} onValueChange={setType} required>
        <SelectTrigger>
          <SelectValue placeholder="Select sensor type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="temperature">Temperature</SelectItem>
          <SelectItem value="gas">Gas</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit">Add Device</Button>
    </form>
  );
};

export default AddDeviceForm;