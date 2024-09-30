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
            <SelectValue placeholder="Seleccionar un dispositivo" />
          </SelectTrigger>
          <SelectContent>
            {devices.map((device) => (
              <SelectItem key={device.id} value={device.id}>{device.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button onClick={() => setSelectedDevice(null)}>Limpiar</Button>
      </div>
      
      {isLoading && <p>Cargando datos históricos...</p>}
      {error && <p>Error al cargar datos históricos: {error.message}</p>}
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