import React from "react";
import "./Integration.css";
import { useState } from "react";
import { Tabs, Tab, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import yt from "../assets/yt.svg";
import fb from "../assets/fb.svg";
import insta from "../assets/instagram.svg";
import twitch from "../assets/twitch.svg";
import x from "../assets/x.svg";
import vimeo from "../assets/vimeo.svg";
import linkedin from "../assets/linkedin.svg";
import tiktok from "../assets/tiktok.svg";
import obs from "../assets/obs.svg";
// import tricaster from "../assets/tricaster.svg";
import zoom from "../assets/zoom.svg";
import gopro from "../assets/gopro.svg";
import streamlabs from "../assets/streamlabs.svg";
import playstation from "../assets/playstation.svg";

const Integration = () => {
  const [key, setKey] = useState("social");

  const data = {
    // Social PLatforms
    social: [
      {
        title: "Facebook",
        description:
          "Create powerful broadcasts and engage your audience on the world’s biggest social network.",
        image: fb,
      },
      {
        title: "Youtube",
        description:
          "Use CastBunny’s powerful features to go live on the world’s largest video-sharing platform.",
        image: yt,
      },
      {
        title: "Instagram",
        description:
          "Stream to Instagram and engage with your followers directly from your desktop.",
        image: insta,
      },
      {
        title: "X (formerly Twitter)",
        description:
          "Launch your live show on X and interact with your followers to build your audience.",
        image: x,
      },
      {
        title: "LinkedIn",
        description:
          "Stream professional-looking broadcasts and grow your LinkedIn network.",
        image: linkedin,
      },
      {
        title: "Twitch",
        description:
          "Grow on one of the world’s biggest live streaming services with Restream’s advanced features.",
        image: twitch,
      },
      {
        title: "TikTok",
        description:
          "Reach your audience and stream powerful content to one of the world’s largest online communities.",
        image: tiktok,
      },

      {
        title: "Vimeo",
        description:
          "Leverage Restream’s complete live streaming suite to create and stream your content on Vimeo.",
        image: vimeo,
      },
    ],
    // Streaming Softwares
    streaming: [
      {
        title: "OBS",
        description:
          "Set up OBS Studio’s free streaming app and unlock the power of multistreaming with CastBunny.",
        image: obs,
      },
      {
        title: "TriCaster",
        description:
          "Deliver a TV-grade experience to your viewers by combining TriCaster and CastBunny.",
        image: yt,
      },
      {
        title: "Zoom",
        description:
          "Broadcast your Zoom meetings and webinars with Restream to reach a wider audience.",
        image: zoom,
      },
      {
        title: "GoPro",
        description:
          "Connect your GoPro with Restream to broadcast your live feed on multiple channels.",
        image: gopro,
      },
      {
        title: "WireCast",
        description:
          "Create high-quality live streams with the power of Wirecast and Restream.",
        image: yt,
      },
      {
        title: "XSplit",
        description:
          "Deliver engaging video content to multiple platforms at once with XSplit and Restream.",
        image: yt,
      },
      {
        title: "vMix",
        description:
          "Broaden your audience by pairing your vMix setup with CastBunny's simulcasting abilities.",
        image: yt,
      },
      {
        title: "Streamlabs",
        description:
          "Add more control to your streaming setup with Streamlabs and broadcast live through Restream.",
        image: streamlabs,
      },
    ],
    // Mobile Encoders

    mobile: [
      {
        title: "Wirecast Go",
        description:
          "Produce and stream live videos from your iOS device with Wirecast Go and Restream.",
        image: yt,
      },
      {
        title: "Larix Broadcaster",
        description:
          "Create live content from your phone by connecting Restream with Larix’s portable solution.",
        image: yt,
      },
      {
        title: "Mobile Steamlabs",
        description:
          "Combine Streamlabs’ user-friendly mobile app with Restream’s cloud-based multistreaming.",
        image: streamlabs,
      },
    ],

    // Gaming Consoles

    gaming: [
      {
        title: "PlayStation",
        description:
          "Stream your PlayStation gameplay and build your audience on several platforms at once.",
        image: playstation,
      },
      {
        title: "Xbox",
        description:
          "Broadcast your Xbox games live and connect with the online gaming community.",
        image: yt,
      },
      {
        title: "Capture card",
        description:
          "Capture your gameplay from any console and stream it live using a capture card.",
        image: yt,
      },
    ],

    // E-commerce

    ecommerce: [
      {
        title: "WooCommerce",
        description:
          "Connect your WooCommerce store and let viewers buy directly from your stream.",
        image: yt,
      },
      {
        title: "Wix",
        description:
          "Showcase products from your Wix store and sell them live.",
        image: yt,
      },
      {
        title: "Shopify",
        description:
          "Integrate your Shopify store and run live shopping events seamlessly.",
        image: yt,
      },
      {
        title: "Amazon",
        description:
          "Import Amazon products to promote and sell them during your streams.",
        image: yt,
      },
      {
        title: "Etsy",
        description:
          "Display your Etsy products on your stream and generate sales in real time.",
        image: yt,
      },
    ],

    // Add ons

    addons: [
      {
        title: "Elagato Stream Deck",
        description:
          "Streamline your live production with hotkeys on your Stream Deck.",
        image: yt,
      },
      {
        title: "Youtube (import)",
        description:
          "Turn your YouTube videos into live broadcasts and stream them on multiple platforms at once.",
        image: yt,
      },
      {
        title: "DropBox",
        description:
          "Transform your existing Dropbox videos into exciting streams.",
        image: yt,
      },
      {
        title: "Google Drive",
        description:
          "Import videos from your Google Drive and stream them live.",
        image: yt,
      },
      {
        title: "Descript",
        description:
          "Export your Restream recordings to Descript and repurpose your content.",
        image: yt,
      },
    ],
  };

  const renderCards = (category) => {
    return (
      <Row>
        {data[category].map((item, idx) => (
          <Col
            key={idx}
            sm={6}
            md={3}
            className="tabCardWrap d-flex justify-content-center align-items-center"
          >
            <Card className="tabCard d-flex justify-content-center align-items-center">
              {/* <Card.Img
                variant="top"
                src={item.image}
                alt={item.title}
                className="tabCardImg"
              /> */}
              <div className="image-placeholder"></div>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className="tabCardDetails">
                  {item.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  };
  return (
    <div className="integrationWrap">
      <div className="integrationHeading">
        <div>Integrations</div>
        <p>
          CastBunny integrates with a wide variety of platforms, tools, and
          add-ons. Create high-quality live events, webinars, podcasts, and
          gameplay and multistream them to your favorite channels.
        </p>
      </div>

      <div className="integrationTab">
        <Container>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="social" title="Social Platforms">
              {renderCards("social")}
            </Tab>
            <Tab eventKey="streaming" title="Streaming Softwares">
              {renderCards("streaming")}
            </Tab>
            <Tab eventKey="mobile" title="Mobile Encoders">
              {renderCards("mobile")}
            </Tab>
            <Tab eventKey="gaming" title="Gaming Consoles">
              {renderCards("gaming")}
            </Tab>
            <Tab eventKey="ecommerce" title="E-commerce">
              {renderCards("ecommerce")}
            </Tab>
            <Tab eventKey="addons" title="Add-ons">
              {renderCards("addons")}
            </Tab>
          </Tabs>
        </Container>
      </div>

      <div className="reachMoreViewersWrap multiStreamingGetStarted">
        <div className="reachMoreText text-start">Get Started today!</div>
        <h4 className="multiStreamingGetStartedText text-center">
          Experience the satisfaction of reaching more viewers with CastBunny.
          <br />
          Try it for free today!
        </h4>
        <div className="reachMoreBtnWrap d-flex justify-content-center align-items-center">
          <Link to={"/signUp"}>
            <button className="reachMoreBtn">Sign up now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Integration;
