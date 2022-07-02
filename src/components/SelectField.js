import { Box } from "@mui/system";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";

const SelectField = ({ label }) => {
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <Box mt={3} width="100%">
      <FormControl size="small" fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={changeHandler}>
          <MenuItem>Option1</MenuItem>
          <MenuItem>Option2</MenuItem>
          <MenuItem>Option3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectField;
