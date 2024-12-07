import React from "react";
import { FcGoogle } from "react-icons/fc";
import "./Signup.css";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <div className="signupWrap">
      <div className="signupHeading">Cast Bunny</div>
      <div className="signupCard">
        <div className="cardTitle">Login</div>
        <div className="cardInputs">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <p className="loginForgotPass">
            <a href="https://google.com" target="_blank">
              Forgot password?
            </a>
          </p>
          <button className="signupBtn">Sign Up</button>
          <div className="cardOR">
            <span>
              <hr />
            </span>
            OR{" "}
            <span>
              <hr />
            </span>
          </div>
          <a
            href="https://google.com"
            target="_blank"
            className="continueWithGoogleBtn"
          >
            {" "}
            <button>
              <span>
                <FcGoogle />
              </span>{" "}
              Continue with Google
            </button>
          </a>
        </div>
        <p className="cardLogin">
          New to CastBunny?{" "}
          <Link to="/signUp" className="cardLoginLinkRoute">
            {" "}
            <span>Create account</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default login;
