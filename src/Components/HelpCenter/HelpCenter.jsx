import React, { useState } from "react";
import "./HelpCenter.css";
import { Container, Row, Col } from "react-bootstrap";
import { IoRocketOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const HelpCenter = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="helpCenterWrap">
      <div className="help">
        <div className="helpHeading">Tell us, How can we Help?</div>
        <div className="searchProblem">
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Search your problem here"
          />
          <button>Search</button>
        </div>
      </div>

      <div className="questionAsk">
        <div className="questionAskHeading">Questions people usually ask</div>
        <div className="questionAskDetails">
          <Container>
            <Row>
              <Col sm={12} md={4} className="qs">
                <p>Lorem ipsum amet consectetur</p>
              </Col>
              <Col sm={12} md={4} className="qs">
                <p>Lorem ipsum amet consorem ipsum amet consectetur</p>
              </Col>
              <Col sm={12} md={4} className="qs">
                <p>Lorem ipsum amet consectetur</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="needHelp">
        <div className="needHelpHeading">Need Helping with</div>
        <div className="needHelpDetails d-flex justify-content-center align-items-center">
          <Container>
            <Row className="g-4 ">
              <Col xs={12} sm={6} md={3}>
                <div className="needHelpCard">
                  <p className="needHelpCardHeading">Getting Started</p>
                  <div className="needHelpCardDetails">
                    Lorem ipsum dolor sit amet consectetur. pellentesque tempus
                    leo ultrices nulla bibendum dis vitae nunc.
                  </div>
                  <div className="needHelpCircle">
                    <IoRocketOutline />
                  </div>
                </div>
              </Col>

              <Col xs={12} sm={6} md={3}>
                <div className="needHelpCard">
                  <p className="needHelpCardHeading">Getting Started</p>
                  <div className="needHelpCardDetails">
                    Lorem ipsum dolor sit amet consectetur. pellentesque tempus
                    leo ultrices nulla bibendum dis vitae nunc.
                  </div>{" "}
                  <div className="needHelpCircle">
                    <IoRocketOutline />
                  </div>
                </div>
              </Col>

              <Col xs={12} sm={6} md={3}>
                <div className="needHelpCard">
                  <p className="needHelpCardHeading">Getting Started</p>
                  <div className="needHelpCardDetails">
                    Lorem ipsum dolor sit amet consectetur. pellentesque tempus
                    leo ultrices nulla bibendum dis vitae nunc.
                  </div>{" "}
                  <div className="needHelpCircle">
                    <IoRocketOutline />
                  </div>
                </div>
              </Col>

              <Col xs={12} sm={6} md={3}>
                <div className="needHelpCard">
                  <p className="needHelpCardHeading">Getting Started</p>
                  <div className="needHelpCardDetails">
                    Lorem ipsum dolor sit amet consectetur. pellentesque tempus
                    leo ultrices nulla bibendum dis vitae nunc.
                  </div>{" "}
                  <div className="needHelpCircle">
                    <IoRocketOutline />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="stillStuck">
        <div className="stillStuckHeading">Still Stuck? Reach us out at</div>
        <div className="stillStuckDetails">
          <Container>
            <Row className="g-1">
              <Col sm={6} md={6}>
                <div className="stillStuckSupport rightBorder">
                  <div className="stillStuckSupportIcon">
                    <HiOutlineMail />
                  </div>
                  <div className="stillStuckSupportTitle">Email Support</div>
                  <div className="stillStuckSupportDesc">
                    24/7 Email support is available <br /> for all the plans.
                  </div>
                  <div className="stillStuckSupportBtn">
                    <a href="mailto:example@gmail.com" target="_blank">
                      <button>Email</button>
                    </a>
                  </div>
                </div>
              </Col>

              <Col sm={6} md={6}>
                <div className="stillStuckSupport ">
                  <div className="stillStuckSupportIcon">
                    <IoChatbubbleEllipsesOutline />
                  </div>
                  <div className="stillStuckSupportTitle">Live Chat Agent</div>
                  <div className="stillStuckSupportDesc">
                    24/7 Chat support is available <br /> for only premium
                    plans.
                  </div>
                  <div className="stillStuckSupportBtn">
                    <a href="mailto:example@gmail.com" target="_blank">
                      <button>Chat Now</button>
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

export default HelpCenter;
