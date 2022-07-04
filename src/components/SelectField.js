import { Box } from "@mui/system";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeCategory, changeDifficulty, changeType } from "../redux/questionSlice";

const SelectField = ({ label, options }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.target.value);
    switch (label) {
      case "Category":
        dispatch(changeCategory(e.target.value));
        break;
      case "Difficulty":
        dispatch(changeDifficulty(e.target.value));
        break;
      case "Type":
        dispatch(changeType(e.target.value));
        break;
      default:
        return;
    }
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
