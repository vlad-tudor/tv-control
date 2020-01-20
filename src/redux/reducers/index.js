import { occupancyReducer } from "./occupancy";
import { propertyReducer } from "./property";
import { combineReducers } from "redux";
import { progressReducer } from "./progress";

export const rootReducer = combineReducers({
  progress: progressReducer,
  property: propertyReducer,
  occupancy: occupancyReducer
});
