export const OCCUPANCY_SET = "OCCUPANCY/SET";
export const OCCUPANCY_GET = "OCCUPANCY/GET";

export const getOccupancy = () => ({ type: OCCUPANCY_GET });

export const setOccupancy = occupancy => ({
  type: OCCUPANCY_SET,
  payload: occupancy
});
