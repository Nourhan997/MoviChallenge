import React, { Component } from "react";
import "./style.scss";

export default function Carddetails(props) {
  const { movie } = props;
  return (
    <div className="carddetails container">
      <div class="d-flex justify-content-between" key={movie.id}>
        <div className="d-flex">
          {movie.poster_path && (
            <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} />
          )}
        </div>
      </div>
      <div className="d-flex">
        <div class="list-group mt-1">
          <div class="list-group-item">
            <div class="d-flex justify-content-between">
              <h6 class="my-2">{movie.title}</h6>
              <small>Release Date {movie.release_date}</small>
            </div>
            <p class="my-2">
              <h6 class="my-2">OverView</h6>
              {movie.overview}
            </p>
            <h6 class="my-2">Genres</h6>

            {movie?.genres?.map((item) => (
              <small className="m-1">{item.name}</small>
            ))}
            <p>
              <h6 class="my-2">Spoken languages</h6>
              {movie?.spoken_languages?.map((item) => (
                <small className="m-1">{item.english_name}</small>
              ))}
            </p>
            <p>
              <h6 class="my-2">Rate</h6>
              <b-form-rating id="rating-sm" v-model="value" size="sm"></b-form-rating>

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
