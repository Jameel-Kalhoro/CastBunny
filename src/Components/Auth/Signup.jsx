import React from "react";
import { FcGoogle } from "react-icons/fc";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signupWrap">
      <div className="signupHeading">Cast Bunny</div>
      <div className="signupCard">
        <div className="cardTitle">Sign Up</div>
        <div className="cardInputs">
          <p>Create an account</p>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
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
          Already have an account?{" "}
          <Link to="/login" className="cardLoginLinkRoute">
            {" "}
            <span>Log In</span>
          </Link>
        </p>
      </div>
      <div className="signUpTermOrServices">
        By signing up, you agree to the{" "}
        <Link to={"/terms"} className="signUpTermOrServicesRoute">
          <span>Terms of Service.</span>
        </Link>
        <br />
        You also agree to receive emails from Restream.
      </div>
    </div>
  );
};

export default Signup;
