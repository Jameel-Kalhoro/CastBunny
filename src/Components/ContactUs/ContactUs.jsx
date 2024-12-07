import React from "react";
import "./ContactUs.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import yt from "../assets/yt.svg";
import insta from "../assets/instagram.svg";
import fb from "../assets/fb.svg";
import discord from "../assets/discord.svg";
import x from "../assets/x.svg";
import tiktok from "../assets/tiktok.svg";

const ContactUs = () => {
  return (
    <div className="contactWrap">
      <div className="contactHeading d-flex flex-column align-items-center justify-content-center">
        <p>Have a question about CastBunny?</p>
        <button>Submit a request</button>
      </div>

      <div className="contactDetails">
        <div className="contactContainer">
          <Container>
            <Row>
              <Col md={7} className="contactContainerDetails borderRight">
                <div className="inquiries">
                  <div>Email us at:</div>
                  <p className="emailSales">
                    For Sales info about our products
                  </p>
                  <p className="emailBusiness">
                    <a href="mailto:business@castbunny.com">
                      business@castbunny.com
                    </a>
                  </p>

                  <p className="emailSales">For copyright and DMCA notices</p>
                  <p className="emailBusiness">
                    <a href="mailto:abuse.report@castbunny.com">
                      abuse.report@castbunny.com
                    </a>
                  </p>

                  <button className="emailLive">Live chat, Chat with us</button>
                </div>
              </Col>
              <Col md={5} className="contactContainerDetails">
                <p className="helpHeading">Help & Support</p>
                <div className="helpSupport">
                  <Link to="/forums" className="helpLink">
                    Forums
                  </Link>
                  <Link to="/help" className="helpLink">
                    HelpCenter
                  </Link>
                  <p>
                    <a href="mailto:support@castbunny.com">
                      support@castbunny.com
                    </a>
                  </p>
                  <div>Social Media</div>
                  <div className="socialLink">
                    <a
                      href="https://www.youtube.com/@CastBunnyHQ"
                      target="_blank"
                    >
                      <img src={yt} alt="" />
                    </a>
                    <a
                      href="https://www.instagram.com/castbunnyhq/"
                      target="_blank"
                    >
                      <img src={insta} alt="" />
                    </a>
                    <a href="https://facebook.com/CastBunnyHQ" target="_blank">
                      <img src={fb} alt="" />
                    </a>
                    <a href="https://discord.gg/cXpReteP" target="_blank">
                      <img src={discord} alt="" />
                    </a>
                    <a href="https://x.com" target="_blank">
                      <img src={x} alt="" />
                    </a>{" "}
                    <a
                      href="https://www.tiktok.com/@castbunnyhq"
                      target="_blank"
                    >
                      <img src={tiktok} alt="" />
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
