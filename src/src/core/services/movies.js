//UTILITIES
import { api } from "./main";
const REACT_APP_API_KEY = "2fed02e2a1ee478ce68a29873e724b99";

//toprated
export const retrieveAllMovie = (page) => {
  return api
    .get(`movie/top_rated/?api_key=${REACT_APP_API_KEY}&page=${page}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const retrieveUpCommingMovie = (page) => {
  return api
    .get(`movie/upcoming/?api_key=${REACT_APP_API_KEY}&page=${page}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};


export const filterMovies = (filter) => {
  return api
    .get(`movie/${filter}/?api_key=${REACT_APP_API_KEY}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const searchAllMovies = (searchTerm) => {
  return api
    .get(`search/movie/?api_key=${REACT_APP_API_KEY}&query=${searchTerm}`)
    .then((response) => {
      return response.data.results;
    })
    .catch((error) => {
      return error;
    });
};

export const retrieveMovieByID = (movie_id) => {
  return api
    .get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${REACT_APP_API_KEY}&language=en-US`
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const retrieveAllMoviesGenres = () => {
  return api
    .get(`genre/movie/list?api_key=${REACT_APP_API_KEY}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const retrievMoviesBycategories = (genre) => {
  return api
    .get(`discover/movie/?api_key=${REACT_APP_API_KEY}&with_genres=${genre}`)
    .then((response) => {
      return response.data.results;
    })
    .catch((error) => {
      return error;
    });
};
