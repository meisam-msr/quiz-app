import {
  changeAmount,
  changeCategory,
  changeDifficulty,
  changeScore,
  changeType,
} from "./actions";

const initialState = {
  questionCategory: "",
  questionDifficulty: "",
  questionType: "",
  amountOfQuestion: 50,
  score: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case changeCategory:
      return { ...state, questionCategory: action.payload };
    case changeDifficulty:
      return { ...state, questionDifficulty: action.payload };
    case changeType:
      return { ...state, questionType: action.payload };
    case changeAmount:
      return { ...state, amountOfQuestion: action.payload };
    case changeScore:
      return { ...state, score: action.payload };
    default:
      return state;
  }
};

export default reducer;
