import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  let navigate = useNavigate();
  return (
    <div>
      <div class="container">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              <a
                class="nav-link px-2 text-muted"
                onClick={() => navigate("/home")}
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link px-2 text-muted"
                onClick={() => navigate("/allMovies")}
              >
                Movies
              </a>
            </li>
          </ul>
          <p class="text-center text-muted">&copy; 2022 @Movify.com</p>
        </footer>
      </div>
    </div>
  );
}
