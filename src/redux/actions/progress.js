export const PROGRESS_GET = "PROGRESS/GET";
export const PROGRESS_NEXT = "PROGRESS/NEXT";
export const PROGRESS_PREV = "PROGRESS/PREV";
export const PROGRESS_SET = "PROGRESS/SET";

export const getProgress = () => ({ type: PROGRESS_GET });

export const forwardProgress = () => ({ type: PROGRESS_NEXT });

export const prevProgress = () => ({
  type: PROGRESS_PREV
});

export const setProgress = progress => ({
  type: PROGRESS_SET,
  payload: progress
});
