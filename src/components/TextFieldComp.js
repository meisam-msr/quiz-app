import { Box } from "@mui/system";
import { FormControl, TextField } from "@mui/material";

const TextFieldComp = () => {
  const changeHandler = () => {};

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
