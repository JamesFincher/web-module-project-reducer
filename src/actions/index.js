export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEM_STORE = "MEM_STORE";
export const MEM_CLEAR = "MEM_CLEAR";
export const MEM_RECALL = "MEM_RECALL";
export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperation = (operator) => {
  return { type: CHANGE_OPERATION, payload: operator };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};

export const memStore = () => {
  return { type: MEM_STORE };
};

export const memClear = () => {
  return { type: MEM_CLEAR };
};

export const memRecall = () => {
  return { type: MEM_RECALL };
};
