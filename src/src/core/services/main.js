import axios from "axios";

const REACT_APP_API_URL = "https://api.themoviedb.org/3/";

export let api = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
