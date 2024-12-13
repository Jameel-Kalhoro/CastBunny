import React from "react";
import "./AboutUs.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaHeadphones,
  FaCloud,
  FaRocket,
  FaShieldAlt,
  FaClipboardList,
  FaCogs,
} from "react-icons/fa";

import fb from "../assets/fb.svg";
import yt from "../assets/yt.svg";
import discord from "../assets/discord.svg";

import CountUp from "react-countup";

const AboutUs = () => {
  return (
    <div className="aboutWrap">
      {/* <div className="display imageGallery mt-2  d-flex justify-content-center align-items-center text-center">
        <Container>
          <Row className="g-1">
            <Col md={2} className="col1">
              <img src={person1} alt="" />
              <img src={person2} alt="" />
            </Col>
            <Col md={1} className="col2">
              <img src={person3} alt="" />
            </Col>
            <Col md={2} className="col3">
              <img src={person4} alt="" />
              <img src={person5} alt="" />
            </Col>
            <Col md={1} className="col4">
              <img src={person6} alt="" />
              <img src={person7} alt="" />
            </Col>
            <Col md={2} className="col5">
              <img src={person8} alt="" />
              <img src={person9} alt="" />
            </Col>
            <Col md={2} className="col6">
              <img src={person10} alt="" />
              <img src={person11} alt="" />
            </Col>
            <Col md={2} className="col7">
              <img src={person12} alt="" />
              <img src={person13} alt="" />
            </Col>
          </Row>
        </Container>
      </div> */}
      
      <div className="transform">
      <h1 className="text-center fw-bold mt-4">About Us</h1>
        <p>
          At CastBunny, we are on a mission to revolutionize the live streaming
          landscape. Based in Toronto, our startup is built on the vision of
          creating a powerful yet user-friendly platform that empowers creators
          and businesses to broadcast their content seamlessly across multiple
          channels. With a dedicated team of five talented individuals, we
          develop all our software in-house, ensuring that every feature is
          tailored to meet the needs of our users.
        </p>
        <div className="transformHeading fw-bold">Our Mission</div>
        <div className="transformDesc  d-flex flex-column justify-content-center align-items-center">
          <p>
            Our mission is to simplify the live streaming experience while
            maximizing reach and engagement. We understand the challenges faced
            by content creators and aim to provide an intuitive solution that
            allows them to connect with their audience effortlessly
          </p>
        </div>
      </div>



      {/* <div className="numbers">
        <Container>
          <Row>
            <Col xs={5} md={2} className="numberCols">
              <div>
                <CountUp start={0} end={92} duration={2} />
              </div>
              <div className="numberTitle">Employees</div>
            </Col>
            <Col xs={2} md={1} className="numberCols">
              <div className="verticalLine"></div>
            </Col>
            <Col xs={5} md={2} className="numberCols">
              <div className="">
                <CountUp start={0} end={25} duration={2} />
              </div>
              <div className="numberTitle">Countries</div>
            </Col>
            <Col xs={1} md={1} className="numberCols officeVertical">
              <div className="verticalLine"></div>
            </Col>
            <Col xs={5} md={2} className="numberCols">
              <div className="">
                <CountUp start={0} end={30} duration={2} />
              </div>
              <div className="numberTitle">Offices</div>
            </Col>
            <Col xs={1} md={1} className="numberCols partnerVertical">
              <div className="verticalLine"></div>
            </Col>
            <Col xs={5} md={1} className="numberCols">
              <div className="">
                <CountUp start={0} end={17} duration={2} />
              </div>
              <div className="numberTitle">Partners</div>
            </Col>
            <Col xs={1} md={1} className="numberCols collabVertical">
              <div className="verticalLine lastLine"></div>
            </Col>
            <Col xs={6} md={1} className="numberCols">
              <div className="">
                <CountUp start={0} end={46} duration={2} />
              </div>
              <div className="numberTitle">Collaborators</div>
            </Col>
          </Row>
        </Container>
      </div> */}

      <div className="believe ">
        <div className="believeTitle  fw-bold">WE BELIEVE IN</div>
        <div className="believeDetails">
          <Container>
            <Row>
            <div className="res">
              <Col md={3}>
                <div className="believeCard unity">
                  <div className="believeCardTitle">Unity</div>
                  <div className="believeCardDesc">
                    bringing people together through shared stories and
                    experiences
                  </div>
                </div>
              </Col>

              <Col md={3}>
                <div className="believeCard faith">
                  <div className="believeCardTitle">Faith</div>
                  <div className="believeCardDesc">
                    trust in the power of storytelling to inspire and connect
                    communities.
                  </div>
                </div>
              </Col>
              </div>
              <div className="res">
              <Col md={3}>
                <div className="believeCard focus">
                  <div className="believeCardTitle">Focus</div>
                  <div className="believeCardDesc">
                    prioritize quality and clarity, helping creators amplify
                    their voices with purpose.
                  </div>
                </div>
              </Col>

              <Col md={3}>
                <div className="believeCard empathy">
                  <div className="believeCardTitle">Empathy</div>
                  <div className="believeCardDesc">
                    listen, understand, and support perspectives to build a
                    welcoming space for all.
                  </div>
                </div>
              </Col>
              </div>
            </Row>
          </Container>
          
        </div>
      </div>

      <div className="provide">
        <div className="provideTitle fw-bold">WE PROVIDE</div>
        <Container className="services-container">
          <Row className="text-center">
            <Col
              xs={12}
              sm={6}
              md={4}
              className="service-item d-flex flex-column align-items-center justify-content-center hovcha"
            >
              <FaHeadphones className="service-icon" size={50} />
              <h5 className="service-title">Multi-Platform Streaming</h5>
              <p className="service-description ">
                {" "}
                Stream your content to various platforms simultaneously,
                enhancing visibility and audience interaction.
              </p>
            </Col>
            <Col
              xs={12}
              sm={6}
              md={4}
              className="service-item d-flex flex-column align-items-center justify-content-center hovcha"
            >
              <FaCloud className="service-icon" size={50} />
              <h5 className="service-title">Proprietary P2P Technology</h5>
              <p className="service-description ">
                Our innovative peer-to-peer technology enhances the efficiency
                and reliability of our multi-stream capabilities, ensuring
                high-quality broadcasts with minimal latency.
              </p>
            </Col>
            <Col
              xs={12}
              sm={6}
              md={4}
              className="service-item d-flex flex-column align-items-center justify-content-center hovcha"
            >
              <FaRocket className="service-icon" size={50} />
              <h5 className="service-title">User-Friendly Interface</h5>
              <p className="service-description ">
                Our platform is designed for ease of use, enabling both novice
                and experienced streamers to get started quickly.
              </p>
            </Col>

            <Col
              xs={12}
              sm={6}
              md={4}
              className="service-item d-flex flex-column align-items-center justify-content-center"
            >
              {/* <FaClipboardList className="service-icon" size={50} /> */}
              <h5 className="service-title"></h5>
              <p className="service-description  borderBottom">
                {/* Lorem ipsum dolor sit <br /> amet consectetur. */}
              </p>
            </Col>
            <Col
              xs={12}
              sm={6}
              md={4}
              className="service-item d-flex flex-column align-items-center justify-content-center hovcha"
            >
              <FaShieldAlt className="service-icon" size={50} />
              <h5 className="service-title">In-House Development</h5>
              <p className="service-description  borderBottom">
                {" "}
                By developing our software internally, we maintain full control
                over quality and innovation, allowing us to adapt quickly to
                user feedback and industry trends
              </p>
            </Col>
            <Col
              xs={12}
              sm={6}
              md={4}
              className="service-item d-flex flex-column align-items-center justify-content-center"
            >
              {/* <FaCogs className="service-icon" size={50} />
              <h5 className="service-title">Service Six</h5>
              <p className="service-description  ">
                Lorem ipsum dolor sit <br /> amet consectetur.
              </p> */}
            </Col>
          </Row>
        </Container>
      </div>

      <div className="upcomingFeatures">
        <div className="upcomingFeaturesHeading  fw-bold">
          OUR UPCOMING FEATURES
        </div>

        <div className="upcomingFeaturesDetails hovcha">
          <Container>
            <Row>
              <Col xs={12} md={4} className="feature">
                <div className="featureTitle">CastStudios</div>
                <div className="featureDesc">
                  A web browser based dedicated space for creators to
                  collaborate and edit and produce high-quality content.
                  Offering flexibility for viewers to watch content at their
                  convenience and Create 24/7 live streams with VOD library{" "}
                </div>
              </Col>
              <Col xs={12} md={4} className="feature hovcha">
                <div className="featureTitle">ChatBox & Donations</div>
                <div className="featureDesc">
                  Engage with your audience in real-time through interactive
                  chat features. Support your favorite creators with integrated
                  donation options.
                </div>
              </Col>{" "}
              <Col xs={12} md={4} className="feature hovcha">
                <div className="featureTitle">OTT Set-top Box:</div>
                <div className="featureDesc">
                  Our Android OTT set-top box with P2P technology offers an
                  exceptional streaming experience with minimal buffering. It
                  also provides access to a wide range of apps from a
                  third-party store, making it a versatile and user-friendly
                  addition to your entertainment setup. Enjoy seamless streaming
                  and extensive content options at your fingertips
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      {/* <div className="collaborators">
        <div className="collaboratorsHeading fw-bold">
          OUR TRUSTED COLLABORATORS
        </div>
        <div>
          <Container>
            <Row className="collaboratorDetails ">
              <Col sm={6} md={3} className="exampleVentures">
                Example Ventures
              </Col>
              <Col sm={6} md={3} className="exampleVentures">
                Example Ventures
              </Col>
              <Col sm={6} md={3} className="exampleVentures">
                Example Ventures
              </Col>
              <Col sm={6} md={3} className="exampleVentures">
                Example Ventures
              </Col>
            </Row>
          </Container>
        </div>
      </div> */}

      {/* <div className="investors ">
        <div className="investorsHeading fw-bold ">OUR ESTEEMED INVESTORS</div>
        <div className="investorDetails">
          <Container>
            <Row className="g-4 d-flex justify-content-center align-items-center">
              <Col xs={6} sm={6} md={2}>
                <div className="investorImg">
                  <img src={investor1} alt="" />
                </div>
                <div className="investorName fw-bold">Mr. Investor</div>
                <div className="investorCompany">Company name</div>
              </Col>
              <Col xs={6} sm={6} md={2}>
                <div className="investorImg">
                  <img src={investor2} alt="" />
                </div>{" "}
                <div className="investorName fw-bold">Mr. Investor</div>
                <div className="investorCompany">Company name</div>
              </Col>
              <Col xs={6} sm={6} md={2}>
                <div className="investorImg">
                  <img src={investor3} alt="" />
                </div>{" "}
                <div className="investorName fw-bold">Mr. Investor</div>
                <div className="investorCompany">Company name</div>
              </Col>
              <Col xs={6} sm={6} md={2}>
                {" "}
                <div className="investorImg">
                  <img src={investor4} alt="" />
                </div>{" "}
                <div className="investorName fw-bold">Mr. Investor</div>
                <div className="investorCompany">Company name</div>{" "}
              </Col>
              <Col xs={6} sm={6} md={2}>
                {" "}
                <div className="investorImg">
                  <img src={investor5} alt="" />
                </div>{" "}
                <div className="investorName fw-bold">Mr. Investor</div>
                <div className="investorCompany">Company name</div>
              </Col>
              <Col xs={6} sm={6} md={2}>
                {" "}
                <div className="investorImg">
                  <img src={person5} alt="" />
                </div>{" "}
                <div className="investorName fw-bold">Mr. Investor</div>
                <div className="investorCompany">Company name</div>
              </Col>
            </Row>
          </Container>
        </div>
      </div> */}

      <div className="joinUs ">
        <div className="joinUsTitle  fw-bold ">JOIN US NOW</div>
        <div className="joinsUsDetailsWrap ">
          <div className="d-flex justify-content-center align-items-center">
            <p>
              As we continue to grow, we invite you to be part of our journey.
              Whether you’re an aspiring streamer or a seasoned professional,
              CastBunny offers the tools you need to elevate your live streaming
              experience. Together, let's redefine the way content is shared and
              enjoyed. Join our community by participating in our forums and
              Discord! Connect with fellow creators, share ideas, and stay
              updated on all things CastBunny. We look forward to seeing you
              there!
            </p>
          </div>
          <Container>
            <Row>
              <Col sm={4} md={4} className="joinUsDetails">
                <div className="socialImg">
                  <img src={yt} alt="" />
                </div>
                <div className="socialName  fw-bold ">Youtube</div>
                <div className="socialAudience">15M Subscribers</div>
                <div className="joinNowBtn mt-3 ">
                  <a
                    href="https://www.youtube.com/@CastBunnyHQ"
                    target="_blank"
                  >
                    <button className="buttonHover">Join Now</button>
                  </a>
                </div>
              </Col>
              <Col sm={4} md={4} className="joinUsDetails">
                <div className="socialImg">
                  <img src={discord} alt="" />
                </div>
                <div className="socialName  fw-bold ">Discord</div>
                <div className="socialAudience">800k+ Members</div>
                <div className="joinNowBtn mt-3  ">
                  <a href="https://discord.gg/cXpReteP" target="_blank">
                    {" "}
                    <button className="buttonHover">Join Now</button>
                  </a>
                </div>
              </Col>
              <Col sm={4} md={4} className="joinUsDetails">
                <div className="socialImg">
                  <img src={fb} alt="" />
                </div>
                <div className="socialName  fw-bold ">Facebook</div>
                <div className="socialAudience">8M+ Likes</div>
                <div className="joinNowBtn mt-3 ">
                  <a href="https://facebook.com/CastBunnyHQ" target="_blank">
                    <button className="buttonHover">Join Now</button>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="reachMoreViewersWrap multiStreamingGetStarted alignCenter">
          <div className="reachMoreText text-start">Get Started today!</div>
          <h4 className="multiStreamingGetStartedText text-center">
            Experience the satisfaction of reaching more viewers with CastBunny.
            <br />
            Try it for free today!
          </h4>
          <div className="reachMoreBtnWrap d-flex justify-content-center align-items-center">
            <Link to={"/signUp"}>
              <button className="reachMoreBtn purpleHover">Sign up now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
