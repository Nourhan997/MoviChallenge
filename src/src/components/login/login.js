import "./style.scss";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);

  let navigate = useNavigate();

  const handledata = () => {
    setloading(true);
    let data = {
      username: name,
      password: password,
    };
    if (data.username != "" && data.password != "") {
      sessionStorage.setItem("session", true);
      setloading(false);
      navigate("/dashboard");
    } else {
      sessionStorage.setItem("session", false);
      setloading(false);
    }
  };
  return (
    <div className="login">
      <div className="container">
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
              <form id="login-form" className="form" action="" method="post">
                <h3 className="text-center textinfo">Login</h3>
                <div className="form-group">
                  <label for="username" className="textinfo">
                    Username:
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Enter your Name"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label for="password" className="textinfo">
                    Password:
                  </label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your Password"
                    className="form-control"
                  />
                </div>
                <div className="d-flex justify-content-center mt-4">
                  <button
                    type="button"
                    class="btn  btn-outline-warning"
                    style={{ width: "150px" }}
                    disabled={!name & !password}
                    onClick={() => handledata()}
                  >
                    {loading ? "Please Wait" : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
