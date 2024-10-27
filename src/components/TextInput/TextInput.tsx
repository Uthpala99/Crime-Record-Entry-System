import React from "react";
import { TextField } from "@mui/material";
//type SelectWidth = "w-[330px] block my-3" | "w-[250px] block my-3" | "w-[100px] block my-3" ;
interface TextInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  type?: string;
  fullWidth?: boolean;
  className?:string;
}

export function TextInput({
  value,
  onChange,
  placeholder = "", 
  type = "text", 
  fullWidth = false, 
  className = "w-[330px]",
}: TextInputProps) {
  
  return (
    <div>
      <div className="my-3">
        <TextField
          className={className}
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
