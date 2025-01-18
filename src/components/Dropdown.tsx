"use client";

import React, { useState } from "react";
import {
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { MdArrowDropDown } from "react-icons/md";

interface DropdownProps {
  options: string[]; // List of options
  defaultValue?: string; // Default selected option
  onChange?: (value: string) => void; // Custom onChange handler
  sx?: object; // Custom styles
  height?: string | number; // Custom height
  width?: string | number; // Custom width
  selectedOptionColor?: string; // Custom color for selected option
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  defaultValue = "Last Week", // Default value
  onChange,
  sx,
  height = "auto", // Default height
  width = "120px", // Default width
  selectedOptionColor = "#A7A7A7", // Default selected option color
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(defaultValue);

  const handleChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange && onChange(value); // Call the custom onChange handler if provided
  };

  return (
    <FormControl
      sx={{
        minWidth: width,
        height: height,
        border: "1px solid #E6E6E6",
        borderRadius: "4px",
        padding: "8px",
        position: "relative",
        backgroundColor: "white",
        ...sx, // Merge with passed sx prop
      }}
    >
      <Select
        value={selectedOption}
        onChange={handleChange}
        displayEmpty
        IconComponent={MdArrowDropDown}
        sx={{
          "& .MuiSelect-select": {
            padding: "0px",
            color: selectedOptionColor, // Text color for selected value
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiSelect-icon": {
            color: "#A7A7A7", // Arrow icon color
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={index}
            value={option}
            sx={{
              backgroundColor: index === 0 ? "#F5F5F5" : "white", // Highlight the first option
              color: "#A7A7A7", // Default text color
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
