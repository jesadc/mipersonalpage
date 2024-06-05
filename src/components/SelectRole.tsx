// src/components/SelectRole.tsx
import React from 'react';

interface Props {
  roles: string[];
  selectedRole: string;
  customRole: string;
  onRoleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onCustomRoleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SelectRole: React.FC<Props> = ({ roles, selectedRole, customRole, onRoleChange, onCustomRoleChange }) => (
  <div>
    <label htmlFor="role" className="block text-md font-semibold">Rol:</label>
    <select id="role" value={selectedRole} onChange={onRoleChange} className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500">
      <option value="">Selecciona</option>
      {roles.map(role => (
        <option key={role} value={role}>{role}</option>
      ))}
    </select>
    {selectedRole === 'Otro' && (
      <div className="mt-2">
        <label htmlFor="customRole" className="block text-md font-semibold">Especificar Rol:</label>
        <input 
          type="text" 
          id="customRole" 
          value={customRole} 
          onChange={onCustomRoleChange} 
          className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
    )}
  </div>
);

export default SelectRole;
