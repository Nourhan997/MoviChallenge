import { GET_ALLMOVIES, FILTERBYGENRE, GET_UPMOVIES } from "../type";

const initialState = {
  movies: [],
  loading: true,
  upcoming: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALLMOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case GET_UPMOVIES:
      return {
        ...state,
        upcoming: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
