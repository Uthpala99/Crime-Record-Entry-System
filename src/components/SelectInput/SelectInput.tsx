import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";
//type SelectWidth = "w-[330px] block my-3" | "w-[250px] block my-3" | "w-[100px] block my-3" ;
interface SelectInputProps {
  value: string;
  onChange: (e: SelectChangeEvent) => void;
  items: string[];
  className:string;
}
export function SelectInput({ value, onChange, items , className }: SelectInputProps) {
  return (
    <div>
      <Select
        className={className}
        value={value}
        onChange={onChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        {items?.map((item) => (
          <MenuItem value={item}>{item}</MenuItem>
        ))}
      </Select>
    </div>
  );
}
