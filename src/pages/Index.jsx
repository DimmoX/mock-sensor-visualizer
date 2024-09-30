import React from 'react';
import { useState } from 'react';
import SensorChart from '../components/SensorChart';
import HistoricalData from '../components/HistoricalData';
import { useSensorsData } from '../hooks/useSensorsData';
import NotificationManager from '../components/NotificationManager';

const Index = () => {
  const [devices] = useState([
    { id: 'temp1', name: 'Sensor de Temperatura 1', type: 'temperature' },
    { id: 'gas1', name: 'Sensor de Gas 1', type: 'gas' },
  ]);

  const { sensorsData, notifications } = useSensorsData(devices);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">GuardianCare</h1>
      
      <NotificationManager notifications={notifications} />
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Datos de Sensores en Tiempo Real</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {devices.map((device) => (
            <SensorChart key={device.id} device={device} data={sensorsData[device.id]} />
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">Datos Históricos</h2>
        <HistoricalData devices={devices} />
      </div>
    </div>
  );
};

export default Index;