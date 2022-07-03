import { Box } from "@mui/system";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";

const SelectField = ({ label, options }) => {
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <Box mt={3} width="100%">
      <FormControl size="small" fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={changeHandler}>
          {options.map(({ id, name }) => (
            <MenuItem value={id} key={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectField;
