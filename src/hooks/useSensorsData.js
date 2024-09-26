import { useState, useEffect } from 'react';
import { fetchSensorData } from '../services/dataService';

export const useSensorsData = (devices) => {
  const [sensorsData, setSensorsData] = useState({});

  useEffect(() => {
    const updateSensorData = () => {
      const newData = {};
      devices.forEach(device => {
        const latestData = fetchSensorData(device.type);
        newData[device.id] = [
          ...(sensorsData[device.id] || []).slice(-9),
          latestData
        ];
      });
      setSensorsData(newData);
    };

    updateSensorData();
    const interval = setInterval(updateSensorData, 10000);

    return () => clearInterval(interval);
  }, [devices]);

  return sensorsData;
};