import React from "react";
import "./Homepage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

import fb from "../assets/fb.svg";
import { Link } from "react-router-dom";
import homepageLight from "../assets/homepageLight.svg";
import homepageDark from "../assets/homepageDark.svg";
import yt from "../assets/yt.svg";
import discord from "../assets/discord.svg";
import insta from "../assets/instagram.svg";
import x from "../assets/x.svg";
import tiktok from "../assets/tiktok.svg";

const Homepage = () => {
  return (
    <div className="homeWrap">
      <Container>
        <Row>
          <Col md={6}>
            <div className="left">
              {" "}
              <div className="homeHeading">
                <span>One</span> Stream, Infinite <span>Reach</span>
              </div>
              <div className="homeDetails ">
                <p>
                  "Simplify your live streaming with CastBunny’s <br />{" "}
                  groundbreaking <span style={{ fontWeight: "600" }}>P2P</span>{" "}
                  multistreaming solution."
                </p>
              </div>
              <div className="socialWrap">
                <button className="google">
                  <a href="https://Apple.com" target="_blank">
                    {" "}
                    <span>
                      <FaApple />
                    </span>
                    Continue with Apple
                  </a>
                </button>
                <button className="google">
                  <a href="https://google.com" target="_blank">
                    {" "}
                    <span>
                      <FcGoogle />
                    </span>
                    Continue with Google
                  </a>
                </button>
                <button className="facebook">
                  <a href="https://facebook.com" target="_blank">
                    <span>
                      <img src={fb} alt="" />
                    </span>
                    Continue with Facebook
                  </a>
                </button>
              </div>
              <span className="or">or</span>
              <div className="enterEmail">
                <input type="text" placeholder="abc123xyz@email.com" />
                <Link to="/signup">
                  <button className="emailSignUp">Signup</button>
                </Link>
              </div>
              <div className="homeTermOfService">
                By signing up, you agree to the{" "}
                <Link to={"/terms"} className="TermofServiceLink">
                  Terms of Service
                </Link>
                . You agree to receive our emails.
              </div>
              <div className="alreadyAccount">
                Already have an account?{" "}
                <Link to={"./login"} className="loginLink">
                  Log In
                </Link>
              </div>
            </div>
          </Col>
          <Col md={6} className="right">
            <div className="dark">
              <img src={homepageDark} alt="" />{" "}
              {/* will be only displayed in the dark theme */}
              <div className="homePageLogos">
                <a href="https://www.youtube.com/@CastBunnyHQ" target="_blank">
                  <img src={yt} alt="" />
                </a>
                <a href="https://facebook.com/CastBunnyHQ" target="_blank">
                  <img src={fb} alt="" />
                </a>
                <a
                  href="https://www.instagram.com/castbunnyhq/"
                  target="_blank"
                >
                  <img src={insta} alt="" />
                </a>
                <a href="https://discord.gg/cXpReteP" target="_blank">
                  <img src={discord} alt="" />
                </a>
                <a href="https://x.com" target="_blank">
                  <img src={x} alt="" />
                </a>
                <a href="https://www.tiktok.com/@castbunnyhq" target="_blank">
                  <img src={tiktok} alt="" />
                </a>
              </div>
            </div>

            <div className="light">
              <img src={homepageLight} alt="" />
              {/* will be only displayed in the light theme */}
              <div className="homePageLogos">
                <a href="https://www.youtube.com/@CastBunnyHQ" target="_blank">
                  <img src={yt} alt="" />
                </a>
                <a href="https://facebook.com/CastBunnyHQ" target="_blank">
                  <img src={fb} alt="" />
                </a>
                <a
                  href="https://www.instagram.com/castbunnyhq/"
                  target="_blank"
                >
                  <img src={insta} alt="" />
                </a>
                <a href="https://discord.gg/cXpReteP" target="_blank">
                  <img src={discord} alt="" />
                </a>
                <a href="https://x.com" target="_blank">
                  <img src={x} alt="" />
                </a>
                <a href="https://www.tiktok.com/@castbunnyhq" target="_blank">
                  <img src={tiktok} alt="" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
