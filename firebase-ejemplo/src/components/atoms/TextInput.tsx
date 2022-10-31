import React from "react";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: "text" | "password" | "email" | "number";
  placeholder?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  type,
  value,
  placeholder,
  ...props
}) => {
  return (
    <label className="flex flex-col mb-6 text-base">
      <span>{label}</span>
      <input placeholder={placeholder} type={type} value={value} {...props} />
    </label>
  );
};
