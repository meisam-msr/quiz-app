import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeAmount, changeScore } from "../redux/questionSlice";
const FinalScore = () => {
  const { score } = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const backToHome = () => {
    dispatch(changeScore(0));
    dispatch(changeAmount(50));
    navigate("/");
  };

  return (
    <Box mt={30}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Final Score : {score}
      </Typography>
      <Button onClick={backToHome} variant="outlined">
        Back to Home
      </Button>
    </Box>
  );
};

export default FinalScore;
