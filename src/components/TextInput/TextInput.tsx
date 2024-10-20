import React from "react";
import { TextField } from "@mui/material";

interface TextInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  type?: string;
  fullWidth?: boolean;
}

export function TextInput({
  value,
  onChange,
  placeholder = "", 
  type = "text", 
  fullWidth = false, 
}: TextInputProps) {
  
  return (
    <div>
      <div className="my-3">
        <TextField
          className="w-[330px]"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          fullWidth={fullWidth}
          variant="outlined"
        />
      </div>
      
    </div>
  );
}
