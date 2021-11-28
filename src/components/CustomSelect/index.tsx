import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";

interface IProps {
  items: SelectItem[];
}

const CustomSelect: React.FC<IProps & SelectProps> = ({
  label,
  name,
  value,
  onChange,
  items,
}) => {
  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        label={label}
        name={name}
        value={value}
        onChange={onChange}
      >
        {items.map((item: SelectItem) => {
          return <MenuItem value={item.value}>{item.label}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
