import { Box, Typography, Button, CircularProgress } from "@mui/material";
import SelectField from "../components/SelectField";
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../hooks/useAxios";

const Settings = () => {
  const { error, response, loading } = useAxios({ url: "/api_category.php" });

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        {error}
      </Typography>
    );
  }

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Typography variant="h2" fontWeight="bold">
        Quiz App
      </Typography>
      <form onSubmit={submitHandler}>
        <SelectField label="Category" />
        <SelectField label="Difficulty" />
        <SelectField label="Type" />
        <TextFieldComp />
        <Box mt={3} width="100%">
          <Button fullWidth variant="contained" type="submit">
            Get Started
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Settings;
