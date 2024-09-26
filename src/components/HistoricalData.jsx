import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useQuery } from '@tanstack/react-query';
import { fetchHistoricalData } from '../services/dataService';
import SensorChart from './SensorChart';

const HistoricalData = ({ devices }) => {
  const [selectedDevice, setSelectedDevice] = useState(null);

  const { data: historicalData, isLoading, error } = useQuery({
    queryKey: ['historicalData', selectedDevice],
    queryFn: () => fetchHistoricalData(selectedDevice),
    enabled: !!selectedDevice,
  });

  return (
    <div>
      <div className="flex space-x-4 mb-4">
        <Select value={selectedDevice} onValueChange={setSelectedDevice}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select a device" />
          </SelectTrigger>
          <SelectContent>
            {devices.map((device) => (
              <SelectItem key={device.id} value={device.id}>{device.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button onClick={() => setSelectedDevice(null)}>Clear</Button>
      </div>
      
      {isLoading && <p>Loading historical data...</p>}
      {error && <p>Error loading historical data: {error.message}</p>}
      {historicalData && selectedDevice && (
        <SensorChart
          device={devices.find(d => d.id === selectedDevice)}
          data={historicalData}
        />
      )}
    </div>
  );
};

export default HistoricalData;