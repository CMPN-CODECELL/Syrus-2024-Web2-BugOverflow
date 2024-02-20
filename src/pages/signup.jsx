import React from "react";
import "../css/signup.css";
import { Link } from "react-router-dom";

const signup = () => {
  return (
    <div class="wrapper">
      <div class="container main">
        <div class="row">
          <div class="col-md-6 side-imageSignup">
            {/* <img class="image" src={image} alt=""></img> */}
            <div class="text">
              {/* <p>Join the community of our Travellers</p> */}
            </div>
          </div>
          <div class="col-md-6 right">
            <div class="input-box">
              <header>Create an account</header>
              <div class="input-field">
                <input
                  type="text"
                  class="input"
                  id="email"
                  required
                  autoComplete="off"
                ></input>
                <label for="email">Name</label>
              </div>
              <div class="input-field">
                <input
                  type="text"
                  class="input"
                  id="email"
                  required
                  autoComplete="off"
                ></input>
                <label for="email">Email</label>
              </div>
              <div class="input-field">
                <input
                  type="password"
                  class="input"
                  id="password"
                  required
                  autoComplete="off"
                ></input>
                <label for="password">Password</label>
              </div>
              <div class="input-field">
                <input type="submit" class="submit" value="Sign up"></input>
              </div>
              <div class="signin">
                <span>
                  Already have an account? <Link to="/login">Login</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
