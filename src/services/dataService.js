const generateRandomData = (min, max) => {
  return Math.random() * (max - min) + min;
};

export const fetchSensorData = (deviceType) => {
  const dataPoints = [];
  const now = new Date();
  
  for (let i = 0; i < 5; i++) {
    const value = deviceType === 'temperature'
      ? generateRandomData(15, 30)
      : generateRandomData(0, 100);
    
    dataPoints.push({
      timestamp: new Date(now.getTime() - (4 - i) * 2000).toISOString(),
      value: parseFloat(value.toFixed(2)),
    });
  }
  
  return dataPoints;
};

export const fetchHistoricalData = (deviceId) => {
  const deviceType = deviceId.startsWith('temp') ? 'temperature' : 'gas';
  const data = [];
  const now = new Date();
  
  for (let i = 0; i < 24; i++) {
    const timestamp = new Date(now - i * 3600000).toISOString();
    const value = generateRandomData(
      deviceType === 'temperature' ? 15 : 0,
      deviceType === 'temperature' ? 30 : 100
    );
    data.unshift({ timestamp, value: parseFloat(value.toFixed(2)) });
  }
  
  return Promise.resolve(data);
};