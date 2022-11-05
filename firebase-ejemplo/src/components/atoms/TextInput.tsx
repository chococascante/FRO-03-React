import React from "react";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: "text" | "password" | "email" | "number";
  placeholder?: string;
  helperText?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  type,
  value,
  placeholder,
  helperText,
  ...props
}) => {
  return (
    <label className="flex flex-col mb-6 text-base">
      <span>{label}</span>
      <input placeholder={placeholder} type={type} value={value} {...props} />
      {helperText && <p data-testid="helper-text">{helperText}</p>}
    </label>
  );
};
