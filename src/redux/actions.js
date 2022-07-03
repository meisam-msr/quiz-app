import {
  CHANGE_AMOUNT,
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_SCORE,
  CHANGE_TYPE,
} from "./actionTypes";

export const changeCategory = (payload) => {
  return { type: CHANGE_CATEGORY, payload };
};

export const changeDifficulty = (payload) => {
  return { type: CHANGE_DIFFICULTY, payload };
};

export const changeAmount = (payload) => {
  return { type: CHANGE_AMOUNT, payload };
};

export const changeType = (payload) => {
  return { type: CHANGE_TYPE, payload };
};

export const changeScore = (payload) => {
  return { type: CHANGE_SCORE, payload };
};
