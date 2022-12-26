import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

export default function Slider(props) {
  const { data } = props;
  return (
    <main>
      <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          {data?.map((movie) => (
            <div class="carousel-item active">
              {movie.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w185${movie.backdrop_path}`}
                />
              )}

              <div class="container">
                <div class="carousel-caption text-start">
                  <h1> {movie.title}</h1>
                  <Link
                    className="movie-title"
                    onClick={() => this.Clicked(movie.id)}
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </main>
  );
}
