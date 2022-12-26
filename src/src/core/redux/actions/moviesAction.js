import {
  GET_ALLMOVIES,
  ERROR,
  GET_MOVIEDETAILS,
  FILTERBYGENRE,
  GET_GENRES,
  GET_UPMOVIES
} from "../type";
import {
  retrieveAllMovie,
  retrieveMovieByID,
  retrievMoviesBycategories,
  retrieveAllMoviesGenres,
  retrieveUpCommingMovie
} from "../../services/movies";

export const GetallMovies = () => async (dispatch) => {
  try {
    const res = await retrieveAllMovie(1);
    dispatch({
      type: GET_ALLMOVIES,
      payload: res.data.results,
    });
  } catch (e) {
    dispatch({
      type: ERROR,
      payload: console.log(e),
    });
  }
};

export const GetUpCommingMovies = () => async (dispatch) => {
  try {
    const res = await retrieveUpCommingMovie();
    dispatch({
      type: GET_UPMOVIES,
      payload: res.data.results,
    });
  } catch (e) {
    dispatch({
      type: ERROR,
      payload: console.log(e),
    });
  }
};

export const GetMovieDetails = (movie_id) => async (dispatch) => {
  try {
    const res = await retrieveMovieByID(movie_id);
    dispatch({
      type: GET_MOVIEDETAILS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ERROR,
      payload: console.log(e),
    });
  }
};

export const FilterByGener = (id) => async (dispatch) => {
  try {
    const res = await retrievMoviesBycategories(2);
    dispatch({
      type: FILTERBYGENRE,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ERROR,
      payload: console.log(e),
    });
  }
};

export const GETGENRES = () => async (dispatch) => {
  try {
    const res = await retrieveAllMoviesGenres();
    dispatch({
      type: GET_GENRES,
      payload: res.data.genres,
    });
  } catch (e) {
    dispatch({
      type: ERROR,
      payload: console.log(e),
    });
  }
};
