import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";
interface SelectInputProps {
  value: string;
  onChange: (e: SelectChangeEvent) => void;
  items: string[];
}
export function SelectInput({ value, onChange, items }: SelectInputProps) {
  return (
    <div>
      <Select
        className="w-[330px] block my-3"
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
