import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questionCategory: "",
  questionDifficulty: "",
  questionType: "",
  amountOfQuestion: 50,
  score: 0,
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.questionCategory = action.payload;
    },
    changeDifficulty: (state, action) => {
      state.questionDifficulty = action.payload;
    },
    changeAmount: (state, action) => {
      state.amountOfQuestion = action.payload;
    },
    changeType: (state, action) => {
      state.questionType = action.payload;
    },
    changeScore: (state, action) => {
      state.score = action.payload;
    },
  },
});

export const {
  changeCategory,
  changeDifficulty,
  changeAmount,
  changeScore,
  changeType,
} = questionSlice.actions;
export default questionSlice.reducer;
