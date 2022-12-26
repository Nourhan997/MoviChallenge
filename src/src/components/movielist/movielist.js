import React, { useEffect, useState } from "react";
import Customcards from "../../layout/moviecard/customcards";
import { useParams } from "react-router-dom";
import {
  retrievMoviesBycategories,
  searchAllMovies,
} from "../../core/services/movies";

export const Movielist = () => {
  let id = useParams();
  const [searchdata, setsearchdata] = useState();
  console.log(id)
  useEffect(() => {
    if (typeof id.search == "number") {
      handlefilter(id.search);
    } else handleSearch(id.search);
  }, []);

  const handlefilter = (event) => {
    retrievMoviesBycategories(event).then((res) => setsearchdata(res));
  };

  const handleSearch = (event) => {
    searchAllMovies(event).then((res) => setsearchdata(res));
  };

  return (
    <div>
      <div className="container">
        <Customcards data={searchdata} title="" />
      </div>
      ;
    </div>
  );
};

export default Movielist;
