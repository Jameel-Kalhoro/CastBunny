import React, { useEffect, useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import yt from "../assets/yt.svg";
import discord from "../assets/discord.svg";
import insta from "../assets/instagram.svg";
import fb from "../assets/icons8-facebook-48.png";
import x from "../assets/x.svg";
import tiktok from "../assets/tiktok.svg";

const Footer = () => {
  const handleMenu = () => {
    setMenu(!menu);
  };
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      {isDesktop ? (
        <>
          <hr style={{ height: "2px", margin: "30px 0 " }} />
          <div className="footerContainer">
            <div className="footerWrap ">
              <div className="info">
                <div className="heading">Company</div>
                <div className="details">
                  <Link to="/about" className="about">
                    About
                  </Link>
                  <Link to="/blog" className="blog">
                    Blog
                  </Link>
                  <Link to="/pricing" className="footerPricing">
                    Pricing
                  </Link>
                  <Link to="/mediaKit" className="mediaKit">
                    Media Kit
                  </Link>
                  <Link to="/contact" className="contact">
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="info">
                {" "}
                <div className="heading">Products</div>
                <div className="details">
                  <Link to="/multiStream" className="about">
                    P2P Multistream
                  </Link>
                  <Link to="/VoD" className="blog">
                    CastStudios
                  </Link>

                  <Link to="/chat" className="mediaKit">
                    ChatBot{" "}
                  </Link>
                  <Link to="/tipbot" className="mediaKit">
                    TipBot{" "}
                  </Link>
                  <Link to="/ott" className="mediaKit">
                    OTT-Set-top Box{" "}
                  </Link>
                </div>
              </div>
              <div className="Resources">
                {" "}
                <div className="heading">Resources</div>
                <div className="details">
                  <Link to="/help" className="about">
                    Help Center{" "}
                  </Link>
                  <Link to="/integration" className="blog">
                    Integrations{" "}
                  </Link>
                  <Link to="/terms" className="contact">
                    Terms of Use{" "}
                  </Link>

                  <Link to="/privacy" className="mediaKit">
                    Privacy Policy{" "}
                  </Link>
                </div>
              </div>
              <div className="Community">
                <div className="heading">Community</div>
                <div className="details">
                  <Link
                    to="https://discord.gg/cXpReteP"
                    target="_blank"
                    className="about"
                  >
                    Discord
                  </Link>
                  <Link
                    to="https://www.reddit.com/r/CastBunnyHQ/"
                    className="blog"
                  >
                    Subreddit
                  </Link>
                  <Link to="/developerPortal" className="contact">
                    Developers
                  </Link>

                  <Link to="/affiliate" className="mediaKit">
                    Affiliate Program
                  </Link>
                </div>
              </div>
            </div>
            <div className="footerRight d-flex flex-column justify-content-center align-items-center">
              {" "}
              <div className="footerLinks">
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
                </a>{" "}
                <a href="https://www.tiktok.com/@castbunnyhq" target="_blank">
                  <img src={tiktok} alt="" />
                </a>
              </div>
              <div className="footerText">
                @ 2024 BunnyCast. All rights reserved.
              </div>
            </div>

            {/* <div className="rights ">
            <p> © 2024 CastBunny, Inc. All Rights Reserved.</p>{" "}
          </div> */}
          </div>
        </>
      ) : (
        <>
          <hr style={{ height: "2px", margin: "25px" }} />
          <div className="mobileFooterWrap">
            <div className="info">
              <div className="mobileHeading">Company</div>
              <div className="details">
                <Link to="/about" className="about">
                  About
                </Link>
                <Link to="/blog" className="blog">
                  Blog
                </Link>
                <Link to="/contact" className="contact">
                  Contact Us
                </Link>
                <Link to="/pricing" className="footerPricing">
                  Pricing
                </Link>
                <Link to="/mediaKit" className="mediaKit">
                  Media Kit
                </Link>
              </div>
            </div>

            <div className="info">
              <div className="mobileHeading">Products</div>
              <div className="details">
                <Link to="/about" className="about">
                  P2P Multistream
                </Link>
                <Link to="/blog" className="blog">
                  CastStudios VOD & Stream{" "}
                </Link>

                <Link to="/chat" className="mediaKit">
                  ChatBox & Donations{" "}
                </Link>
                <Link to="/mediaKit" className="mediaKit">
                  OTT-Set-top Box{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="mobileFooterWrap">
            <div className="info">
              <div className="Resources">
                {" "}
                <div className="mobileHeading">Resources</div>
                <div className="details">
                  <Link to="/about" className="about">
                    Help Center{" "}
                  </Link>
                  <Link to="/integration" className="blog">
                    Integrations{" "}
                  </Link>
                  <Link to="/terms" className="contact">
                    Terms of Use{" "}
                  </Link>

                  <Link to="/privacy" className="mediaKit">
                    Privacy Policy{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="info">
              <div className="mobileCommunity">
                <div className="mobileHeading">Community</div>
                <div className="details">
                  <Link
                    to="https://discord.gg/cXpReteP"
                    target="_blank"
                    className="about"
                  >
                    Discord
                  </Link>
                  <Link to="/forums" className="blog">
                    Forums
                  </Link>
                  <Link to="/developerPortal" className="contact">
                    Developers
                  </Link>

                  <Link to="/affiliate" className="mediaKit">
                    Affiliate Program
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mobileFooterRight mt-3 ">
            {" "}
            <div className="footerLinks">
              <a href="https://www.youtube.com/@CastBunnyHQ" target="_blank">
                <img src={yt} alt="" />
              </a>
              <a href="https://facebook.com/CastBunnyHQ" target="_blank">
                <img src={fb} alt="" />
              </a>
              <a href="https://www.instagram.com/castbunnyhq/" target="_blank">
                <img src={insta} alt="" />
              </a>
              <a href="https://discord.gg/cXpReteP" target="_blank">
                <img src={discord} alt="" />
              </a>
              <a href="https://x.com" target="_blank">
                <img src={x} alt="" />
              </a>{" "}
              <a href="https://www.tiktok.com/@castbunnyhq" target="_blank">
                <img src={tiktok} alt="" />
              </a>
            </div>
            <div className="footerText">
              @ 2024 BunnyCast. All rights reserved.
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Footer;
