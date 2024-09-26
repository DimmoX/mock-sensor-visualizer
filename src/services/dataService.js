const generateRandomData = (min, max) => {
  return Math.random() * (max - min) + min;
};

export const fetchSensorData = (deviceType) => {
  const value = deviceType === 'temperature'
    ? generateRandomData(15, 30)
    : generateRandomData(0, 100);
  
  return {
    timestamp: new Date().toISOString(),
    value: parseFloat(value.toFixed(2)),
  };
};

export const fetchHistoricalData = (deviceId) => {
  // Simular la obtención de datos históricos
  const deviceType = deviceId.startsWith('temp') ? 'temperature' : 'gas';
  const data = [];
  const now = new Date();
  
  for (let i = 0; i < 24; i++) {
    const timestamp = new Date(now - i * 3600000).toISOString();
    const value = fetchSensorData(deviceType).value;
    data.unshift({ timestamp, value });
  }
  
  return Promise.resolve(data);
};