import React from 'react';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, placeholder }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-semibold">{label}</label>
      <input
        type="text"
        className="p-2 border rounded"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
