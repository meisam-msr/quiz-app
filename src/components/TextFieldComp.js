import { Box } from "@mui/system";
import { FormControl, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { changeAmount } from "../redux/questionSlice";


const TextFieldComp = () => {
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    dispatch(changeAmount(e.target.value))
  };

  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth size="small">
        <TextField
          onChange={changeHandler}
          variant="outlined"
          label="Amount of questions"
          type="number"
          size="small"
        />
      </FormControl>
    </Box>
  );
};

export default TextFieldComp;
