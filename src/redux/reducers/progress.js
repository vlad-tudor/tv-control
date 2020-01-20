import {
  PROGRESS_GET,
  PROGRESS_SET,
  PROGRESS_PREV,
  PROGRESS_NEXT
} from "../actions/progress";

export const initialProgressState = {
  step: 0
};

export const progressReducer = (state = initialProgressState, action) => {
  console.log(action);
  switch (action.type) {
    case PROGRESS_NEXT:
      return { ...state, step: state.step + 1 };
    case PROGRESS_PREV:
      return { ...state, step: state.step - 1 };
    case PROGRESS_SET:
      return { ...state, ...action.payload };
    case PROGRESS_GET:
    default:
      return { ...state };
  }
};
