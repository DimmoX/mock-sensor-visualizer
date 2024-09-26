import React from 'react';
import { useState } from 'react';
import SensorChart from '../components/SensorChart';
import AddDeviceForm from '../components/AddDeviceForm';
import HistoricalData from '../components/HistoricalData';
import { useSensorsData } from '../hooks/useSensorsData';

const Index = () => {
  const [devices, setDevices] = useState([
    { id: 'temp1', name: 'Temperature Sensor 1', type: 'temperature' },
    { id: 'gas1', name: 'Gas Sensor 1', type: 'gas' },
  ]);

  const sensorsData = useSensorsData(devices);

  const handleAddDevice = (newDevice) => {
    setDevices([...devices, newDevice]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">IoT Sensor Dashboard</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Real-time Sensor Data</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {devices.map((device) => (
            <SensorChart key={device.id} device={device} data={sensorsData[device.id]} />
          ))}
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Add New Device</h2>
        <AddDeviceForm onAddDevice={handleAddDevice} />
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">Historical Data</h2>
        <HistoricalData devices={devices} />
      </div>
    </div>
  );
};

export default Index;
