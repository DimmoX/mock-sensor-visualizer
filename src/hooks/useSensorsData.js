import { useState, useEffect } from 'react';
import { fetchSensorData } from '../services/dataService';

export const useSensorsData = (devices) => {
  const [sensorsData, setSensorsData] = useState({});
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const updateSensorData = () => {
      const newData = {};
      const newNotifications = [];
      devices.forEach(device => {
        const latestData = fetchSensorData(device.type);
        newData[device.id] = [
          ...(sensorsData[device.id] || []).slice(-29),
          ...latestData
        ];

        const lastValue = latestData[latestData.length - 1].value;
        if (device.type === 'temperature' && lastValue < 20) {
          newNotifications.push({
            message: 'Niveles de Temperatura Bajos',
            type: 'warning'
          });
        } else if (device.type === 'gas' && lastValue > 60) {
          newNotifications.push({
            message: 'Posible fuga de gas, niveles críticos',
            type: 'error'
          });
        }
      });
      setSensorsData(newData);
      setNotifications(newNotifications);
    };

    updateSensorData();
    const interval = setInterval(updateSensorData, 10000);

    return () => clearInterval(interval);
  }, [devices]);

  return { sensorsData, notifications };
};