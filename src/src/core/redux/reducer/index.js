import { combineReducers } from "redux";
import userReducer from "./usersReducer";
import moviesReducer from "./moviesReducer";
import detailsReducer from "./detailsReducer";

export default combineReducers({
  geners: userReducer,
  movies: moviesReducer,
  details: detailsReducer,
});
