"use client";

import React, { useState } from "react";
import {
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { MdArrowDropDown } from "react-icons/md";

const Dropdown: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("Last Week");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <FormControl
      sx={{
        minWidth: 120,
        border: "1px solid #E6E6E6",
        borderRadius: "4px",
        padding: "8px",
        position: "relative",
        backgroundColor: "white",
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
            color: "#A7A7A7", // Text color for selected value
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiSelect-icon": {
            color: "#A7A7A7", // Arrow icon color
          },
        }}
      >
        <MenuItem
          value="Last Week"
          sx={{
            backgroundColor: "#F5F5F5",
            color: "#A7A7A7", // Text color for "Last Week"
          }}
        >
          Last Week
        </MenuItem>
        <MenuItem
          value="Last Month"
          sx={{ color: "black" }} // Text color for "Last Month"
        >
          Last Month
        </MenuItem>
        <MenuItem
          value="Last Year"
          sx={{ color: "black" }} // Text color for "Last Year"
        >
          Last Year
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default Dropdown;
