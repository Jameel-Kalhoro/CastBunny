import React from "react";
import "./Studio.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import audience from "../assets/audience.svg";
import rightHead from "../assets/rightDivHead.svg";
import leftHead from "../assets/leftDivHead.svg";

const Studio = () => {
  return (
    <div className="studioWrap">
      <div className="studio">
        <Container>
          <Row>
            {" "}
            <Col sm={12} md={5} className="studioLeft">
              <div className="studioTitle">CastBunny Studio</div>
              <div>
                <span className="powerUp">Boost </span>{" "}
                <span className="your">your</span> <br />
                <span className="streaming">Streaming</span>
              </div>
              <p>Effortless live streaming right from your browser.</p>
              <Link to={"/signup"}>
                <button className="studioLeftBtn">Get Started</button>
              </Link>
            </Col>
            <Col sm={12} md={7} className="studioRight">
              <div className="studioRightPlaceholder"></div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="studioColabs">
        <Container>
          <Row>
            <Col className="colabDetail">
              <div className="colabLogo"></div>
              Collaborators
            </Col>
            <Col className="colabDetail">
              <div className="colabLogo"></div>
              Collaborators
            </Col>
            <Col className="colabDetail">
              <div className="colabLogo"></div>
              Collaborators
            </Col>
            <Col className="colabDetail">
              <div className="colabLogo"></div>
              Collaborators
            </Col>
          </Row>
        </Container>
      </div>

      <div className="audience">
        <div className="audienceTitle">
          Engage with your audience in real time
        </div>
        <Container>
          <Row>
            <Col
              sm={12}
              md={4}
              className="d-flex flex-column justify-content-center align-items-center audienceCol"
            >
              <div className="giftsImgPlaceholder"></div>
              <p>Send Gifts</p>
            </Col>

            <Col
              sm={12}
              md={4}
              className="d-flex flex-column justify-content-center align-items-center audienceCol"
            >
              <div className="highLightMessagesImgPlaceholder"></div>{" "}
              <p>Highlight Message </p>
            </Col>

            <Col
              sm={12}
              md={4}
              className="d-flex flex-column justify-content-center align-items-center audienceCol"
            >
              <div className="giftsImgPlaceholder"></div>
              <p>Share Memories</p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="audience">
        <div className="audienceTitle">Reach your audience everywhere</div>
        <div className="d-flex justify-content-center align-items-center audienceImg">
          <img src={audience} alt="" />
        </div>
        <div className="audienceText">
          Stream live to Facebook, YouTube, DIscord and others at the same time
        </div>
      </div>

      <div className="host">
        <Container>
          <Row>
            <Col sm={6} md={6} className="hostDiv">
              <div>Expand Your Reach</div>
              <p>
                Broadcast live to Facebook, YouTube, Twitter, LinkedIn, and
                multiple platforms simultaneously
              </p>
            </Col>
            <Col sm={6} md={6} className="hostDiv">
              <div className="hostRightDiv">
                <img src={rightHead} alt="" className="rightHead" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="liveVideo">
        <Container>
          <Row>
            <Col sm={6} md={6} className="hostDiv">
              <div className="hostRightDiv">
                <img src={leftHead} alt="" className="leftHead" />
              </div>
            </Col>
            <Col sm={6} md={6} className="hostDiv">
              <div>Become a Show Host</div>
              <p>
                Invite guests to your live streams and deliver a thrilling
                experience for your audience.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="host">
        <Container>
          <Row>
            <Col sm={6} md={6} className="hostDiv">
              <div>Brand Your Live Videos</div>
              <p>
                Distinguish yourself with custom logos, overlays, and
                backgrounds
              </p>
            </Col>
            <Col sm={6} md={6} className="hostDiv">
              <div className="hostRightDiv">
                <img src={rightHead} alt="" className="rightHead" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="liveVideo">
        <Container>
          <Row>
            <Col sm={6} md={6} className="hostDiv">
              <div className="hostRightDiv">
                <img src={leftHead} alt="" className="leftHead" />
              </div>
            </Col>
            <Col sm={6} md={6} className="hostDiv">
              <div>Drive Viewer Actions</div>
              <p>
                Incorporate calls-to-action or vital messages to encourage
                viewer engagement.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="host">
        <Container>
          <Row>
            <Col sm={6} md={6} className="hostDiv">
              <div>Real-Time Interaction</div>
              <p>
                Highlight messages from all your channels to enhance audience
                interaction.
              </p>
            </Col>
            <Col sm={6} md={6} className="hostDiv">
              <div className="hostRightDiv">
                <img src={rightHead} alt="" className="rightHead" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="interViews">
        <div className="interViewsHeading">
          With Our <span>Studio</span> You Can
        </div>
        <div className="interViewsDetails">
          <Container>
            <Row>
              <Col sm={12} md={3} className="interViewCard">
                <div className="interViewCardCircle"></div>
                <div className="interViewCardHeading">
                  Company & Industry Updates
                </div>
                <p>
                  Announce company news to your community across all social
                  media platforms.
                </p>
              </Col>
              <Col sm={12} md={3} className="interViewCard">
                <div className="interViewCardCircle mb-4"></div>
                <div className="interViewCardHeading ">
                  Interviews and Q&A's
                </div>
                <p>
                  Easily host interviews, AMAs (ask me anything), and Q&A
                  sessions.
                </p>
              </Col>
              <Col sm={12} md={3} className="interViewCard">
                <div className="interViewCardCircle"></div>
                <div className="interViewCardHeading">
                  Product Launches & Demos{" "}
                </div>
                <p>
                  Launch new products live and demonstrate their features to
                  your community.
                </p>
              </Col>
            </Row>
            <Row className="g-2">
              <Col sm={12} md={3} className="interViewCard">
                <div className="interViewCardCircle"></div>
                <div className="interViewCardHeading">
                  {" "}
                  Flash Sales & Promotional Offers
                </div>
                <p>
                  Boost customer base and revenue with time-limited offers and
                  sales promotions.
                </p>
              </Col>
              <Col sm={12} md={3} className="interViewCard">
                <div className="interViewCardCircle"></div>
                <div className="interViewCardHeading">
                  Webinars, Classes, & Workshops{" "}
                </div>
                <p>
                  Share your expertise by hosting live webinars, classes, and
                  workshops.
                </p>
              </Col>
              <Col sm={12} md={3} className="interViewCard">
                <div className="interViewCardCircle mb-4"></div>
                <div className="interViewCardHeading">
                  {" "}
                  Meetups & Conferences
                </div>
                <p>Stream events live to expand your reach and viewership.</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="someUser">
        <Container>
          <Row>
            <Col md={7} className="userInfo">
              <div className="userName">Olivia Brooks,</div>
              <div className="userDesignation"> Etsy Craft Entrepreneur</div>
              <div className="userRemarks">
                <p>“</p>With CastBunny, my audience grew by more than 70%. It
                has significantly enhanced my sales and visibility on Facebook
                and YouTube.
              </div>
              <p className="leftAppos">”</p>
            </Col>
            <Col md={5}>
              <div className="userImg d-flex flex-column align-items-center justify-content-center ">
                <div className="userImgPlaceholder"></div>
              </div>
              <div className="userCompany">Company</div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="growBusiness d-flex flex-column justify-content-center align-items-center">
        <p>Grow Your Business with Live Streaming </p>
        <Link to={"/signup"}>
          <button className="growBtn">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Studio;
