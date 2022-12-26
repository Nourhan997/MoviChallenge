import React from "react";
import "./style.scss";
import { useNavigate, useParams, Link } from "react-router-dom";

const Customcards = (props) => {
  const { data, title, number, viewmore, firstno } = props;
  let navigate = useNavigate();
 
  return (
    <div className="movies">
      <div className="topsection my-2">
        <h3 className="title">{title || " "}</h3>
        <Link className="viewmore">{viewmore || " "}</Link>
      </div>
      <div className="movies-inner">
        {data?.slice(firstno || 0, number || data.length)?.map((movie) => (
          <div className="movie" key={movie.id}>
            <div
              className={`movie-rating ${
                movie.vote_average >= 7 && "movie-rating-positive"
              }`}
            >
              {movie.vote_average}
            </div>
            <Link className="movie-poster" to={`/moviesDetails/${movie.id}`}>
              {movie.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                />
              )}
            </Link>
            <Link className="movie-title" to={`/moviesDetails/${movie.id}`}>
              {movie.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Customcards;
