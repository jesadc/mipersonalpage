// src/components/SelectService.tsx
import React from 'react';

interface Props {
  services: { name: string }[];
  selectedService: string;
  onServiceChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectServices: React.FC<Props> = ({ services, selectedService, onServiceChange }) => (
  <div>
    <label htmlFor="service" className="block text-md font-semibold">Servicio:</label>
    <select id="service" value={selectedService} onChange={onServiceChange} className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500">
      <option value="">Selecciona</option>
      {services.map(service => (
        <option key={service.name} value={service.name}>{service.name}</option>
      ))}
    </select>
  </div>
);

export default SelectServices;
