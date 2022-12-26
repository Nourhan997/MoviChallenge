import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  GetallMovies,
  GetUpCommingMovies,
} from "../../core/redux/actions/moviesAction";
import Customcards from "../../layout/moviecard/customcards";
import "./style.scss";

const Home = (props) => {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    props.GetallMovies();
    props.GetUpCommingMovies();
  }, []);

  const { movies } = props.movies;
  const { upcoming } = props.movies;
  console.log("upcoming", upcoming);

  return (
    <div>
      <div className="container">
        <Customcards
          data={movies}
          title="Top Rated"
          number="5"
          viewmore="View More"
        />
        <div class="row">
          <div class="col-md-8">
            <Customcards
              data={upcoming}
              number="6"
              firstno="0"
              title="Up Coming"
            />
          </div>
          <div class="col-md-4 backgroundCol"></div>
        </div>
        <Customcards
          data={movies}
          title="What's Popular"
          number="10"
          viewmore="View More"
        />
      </div>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    movies: state.movies,
    upcoming: state.upcoming,
  };
}

export default connect(mapStateToProps, {
  GetallMovies,
  GetUpCommingMovies,
})(Home);
