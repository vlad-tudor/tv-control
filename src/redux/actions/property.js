export const PROPERTY_SET = "PROPERTY/SET";
export const PROPERTY_GET = "PROPERTY/GET";

export const getProperty = () => ({ type: PROPERTY_GET });

export const setProperty = property => ({
  type: PROPERTY_SET,
  payload: property
});
