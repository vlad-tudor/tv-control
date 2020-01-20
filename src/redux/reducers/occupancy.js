import { OCCUPANCY_SET, OCCUPANCY_GET } from "../actions";

export const initialOccupancyState = {
  occupants: 0,
  vehicles: 0,
  pets: 0
};

export const occupancyReducer = (state = initialOccupancyState, action) => {
  switch (action.type) {
    case OCCUPANCY_SET:
      return { ...state, ...action.payload };
    case OCCUPANCY_GET:
    default:
      return { ...state };
  }
};
