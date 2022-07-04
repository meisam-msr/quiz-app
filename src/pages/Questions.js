import { Typography, CircularProgress, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { changeScore } from "../redux/questionSlice";
import { getRandomInt } from "../utils/getRandomInt";

const Questions = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();
  const {
    questionCategory,
    questionDifficulty,
    questionType,
    amountOfQuestion,
    score,
  } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  let apiUrl = `/api.php?amount=${amountOfQuestion}`;

  if (questionCategory) {
    apiUrl = apiUrl.concat(`&category=${questionCategory}`);
  }
  if (questionCategory) {
    apiUrl = apiUrl.concat(`&difficulty=${questionDifficulty}`);
  }
  if (questionType) {
    apiUrl = apiUrl.concat(`&type=${questionType}`);
  }
  const { response, loading } = useAxios({ url: apiUrl });

  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];

      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [response, questionIndex]);

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  const answerHandler = (e) => {
    const question = response.results[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      dispatch(changeScore(score + 1));
    }
    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/score");
    }
  };

  return (
    <Box>
      <Typography variant="h2">Questions {questionIndex + 1}</Typography>
      <Typography mt={5}>{response.results[questionIndex].question}</Typography>
      {options.map((data, id) => (
        <Box mt={2} key={id}>
          <Button onClick={answerHandler} variant="contained">
            {data}
          </Button>
        </Box>
      ))}
      <Box mt={5}>
        Score: {score} / {response.results.length}
      </Box>
    </Box>
  );
};

export default Questions;
