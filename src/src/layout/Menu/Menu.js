import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GETGENRES } from "../../core/redux/actions/moviesAction";
import { connect } from "react-redux";

const Menu = (props) => {
  useEffect(() => {
    props.GETGENRES();
  }, []);

  const { geners } = props.geners;
  console.log(geners);

  let navigate = useNavigate();
  let isAuth = sessionStorage.getItem("session") ? true : false;
  const [search, setSearch] = useState("");
  const clearsession = async () => {
    await sessionStorage.clear();
    navigate("/login");
  };
  const handleSearch = (search) => {
    navigate(`/movielist/${search}`);
  };
  return (
    <div className="header fixed">
      <header class="p-3 ">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              {isAuth ? (
                <li>
                  <a
                    class="nav-link px-2 text-white"
                    onClick={() => navigate("/dashboard")}
                  >
                    Dashboard
                  </a>
                </li>
              ) : (
                <>
                  <li>
                    <a
                      class="nav-link px-2 text-secondary"
                      onClick={() => navigate("/home")}
                    >
                      Home
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Genre
                    </a>
                    <div class="dropdown-menu">
                      {geners?.slice(0, 6)?.map((item) => (
                        <a
                          class="dropdown-item"
                          onClick={() => navigate(`/movielist/${item.id}`)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </li>
                </>
              )}
            </ul>
            {!isAuth ? (
              <form
                class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                role="search"
              >
                <div className="d-flex">
                <input
                  type="search"
                  class="form-control form-control-dark "
                  placeholder="Search..."
                  aria-label="Search"
                  onChange={(event) => setSearch(event.target.value)}
                />
                <button
                  class="btn btn-outline-success m-2 my-sm-0"
                  onClick={() =>
                    navigate(`/movielist/${search}`)
                  }
                >
                  Search
                </button>
                </div>
              </form>
            ) : (
              " "
            )}
            {isAuth ? (
              <div class="text-end">
                <button
                  type="button"
                  class="btn btn-outline-light me-2"
                  onClick={() => clearsession()}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div class="text-end">
                <button
                  type="button"
                  class="btn btn-outline-light me-2 btn-warning"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    geners: state.geners,
  };
}

export default connect(mapStateToProps, {
  GETGENRES,
})(Menu);
