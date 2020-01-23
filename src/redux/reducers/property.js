import { PROPERTY_GET, PROPERTY_SET } from "../actions";

export const initialPropertyState = {
  address: "",
  type: null,
  commencementDate: null,
  agencyName: ""
};

export const propertyReducer = (state = initialPropertyState, action) => {
  switch (action.type) {
    case PROPERTY_SET:
      return { ...state, ...action.payload };
    case PROPERTY_GET:
    default:
      return { ...state };
  }
};
