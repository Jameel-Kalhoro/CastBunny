import React, { useState } from "react";
import "./Pricing.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import "react-multi-carousel/lib/styles.css";
import { TiHeadphones } from "react-icons/ti";
import Table from "react-bootstrap/Table";

const Pricing = () => {
  const [isStandard, setIsStandard] = useState(true);
  const handleToggle = () => {
    setIsStandard(!isStandard);
  };
  const [isPricingTableVisible, setIsPricingTableVisible] = useState(true);

  const togglePricingTable = () => {
    setIsPricingTableVisible(!isPricingTableVisible);
  };
  const features = [
    {
      name: "Simultaneous channels",
      options: ["Free", "Standard", "Professional", "Premium", "Business"],
      support: [true, false, true, true, true], // Added support for proper feature mapping
    },
    {
      name: "Encoder integrations",
      support: [true, false, true, true, true],
    },
    {
      name: "No quality limitations",
      support: [true, true, true, true, false],
    },
    {
      name: "Cross-platform chat",
      support: [false, true, true, true, true],
    },
    {
      name: "Live health monitor",
      support: [true, false, true, true, true],
    },
    {
      name: "Stream analytics",
      support: [false, true, true, true, true],
    },
    {
      name: "Encrypted RTMPS",
      support: [true, true, true, false, true],
    },
  ];

  const plans = ["Free", "Standard", "Professional", "Premium", "Business"];

  return (
    <div className="pricingWrap">
      <div className="pricingHeader">
        <p className="today">Get Started Today</p>
        <p className="fastGrow">Choose how fast you want to grow</p>
        <p className="pricingDesc">
          Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
          consectetur ipsum dolor sit amet{" "}
        </p>
      </div>

      <div className="pricingCardDivs">
        <div className="d-flex justify-content-center align-items-center">
          <div className="toggle-container ">
            <div
              className={`pricingSlider ${
                isStandard ? "standard" : "business"
              }`}
              onClick={handleToggle}
            ></div>
            <div className="labels">
              <span
                className={`label ${isStandard ? "active" : ""}`}
                onClick={() => setIsStandard(true)}
              >
                Standard
              </span>
              <span
                className={`label ${!isStandard ? "active" : ""}`}
                onClick={() => setIsStandard(false)}
              >
                Business
              </span>
            </div>
          </div>
        </div>

        {isStandard ? (
          <div className="standardDiv">
            {" "}
            {/*  Individual Plans  */}
            <Container>
              <Row>
                <Col xs={12} md={4} lg={4}>
                  <div className="pricingCards">
                    <p>Free Plan</p>
                    <div className="pricingCard ">
                      <div className="pricingHeading">
                        $O <span>per month</span>
                      </div>
                      <p></p>
                      <div className="pricingCardDetails">
                        <p>Multistream to 3 channels</p>
                        <p>Basic graphics with no branding</p>
                        <p>8 on-screen guests</p>
                        <p>Stream health monitoring and analytics</p>
                      </div>
                    </div>
                    <div className="planBtn">
                      {" "}
                      <a href="https://google.com" target="_blank">
                        <button>Choose this plan</button>
                      </a>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={4} lg={4}>
                  {" "}
                  <div className="pricingCards ">
                    <p>Standard Plan</p>
                    <div className="pricingCard free">
                      <div className="pricingHeading">
                        $15 <span>per month</span>
                      </div>
                      <p>$12/month if billed annually</p>
                      <div className="pricingCardDetails">
                        <p>Multistream to 6 channels</p>
                        <p>Custom graphics</p>
                        <p>12-hour recording storage</p>
                        <p>No Restream branding</p>
                        <p>12 on-screen guests</p>
                      </div>
                    </div>

                    <div className="planBtn">
                      {" "}
                      <a href="https://google.com" target="_blank">
                        <button>Choose this plan</button>
                      </a>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={4} lg={4}>
                  <div className="pricingCards ">
                    <p>Professional Plan</p>
                    <div className="pricingCard basic">
                      <div className="pricingHeading">
                        $39 <span>per month</span>
                      </div>
                      <p> $33/month if billed annually</p>
                      <div className="pricingCardDetails">
                        <p>Multistream to 10 channels</p>
                        <p>Full HD streaming</p>
                        <p>15-hour recording storage</p>
                        <p>Enhanced analytics</p>
                        <p>Custom video clips and graphics</p>
                      </div>
                    </div>
                    <div className="planBtn">
                      {" "}
                      <a href="https://google.com" target="_blank">
                        <button>Choose this plan</button>
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        ) : (
          <div className="businessDiv ">
            {" "}
            {/* BUSINESS PLAN  */}
            <Container>
              <Row>
                <Col md={2} lg={2}></Col>
                <Col xs={12} md={4} lg={4}>
                  <div className="pricingCards business1">
                    <p>Premium Plan</p>
                    <div className="pricingCard standard">
                      <div className="pricingHeading">
                        $79 <span>per month</span>
                      </div>
                      <p>$66/month if billed annually</p>
                      <div className="pricingCardDetails">
                        <p>Multistream to 15 channels</p>
                        <p>30-hour recording storage</p>
                        <p>Advanced analytics tools</p>
                        <p>Multi-camera support</p>
                      </div>
                    </div>
                    <div className="planBtn">
                      {" "}
                      <a href="https://google.com" target="_blank">
                        <button>Choose this plan</button>
                      </a>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={4} lg={4}>
                  <div className="pricingCards business2">
                    <p>Business Plan</p>
                    <div className="pricingCard business">
                      <div className="pricingHeading">
                        $249 <span>per month</span>
                      </div>
                      <p>$199/month if billed annually</p>
                      <div className="pricingCardDetails">
                        <p>Multistream to 25 channels</p>
                        <p>Unlimited recording storage</p>
                        <p>Dedicated account manager for support</p>
                        <p>Advanced engagement tools</p>
                      </div>
                    </div>
                    <div className="planBtn">
                      {" "}
                      <a href="https://google.com" target="_blank">
                        <button>Choose this plan</button>
                      </a>
                    </div>
                  </div>
                </Col>
                <Col md={2} lg={2}></Col>
              </Row>
            </Container>
          </div>
        )}
      </div>

      <div className="planInclude">
        <div className="planIncludeHeading">Our Plans Include</div>
        <div className="planIncludeDetails">
          <Container>
            <Row>
              <Col sm={4} md={4}>
                <div className="planCard">
                  <div className="planCardHeading">
                    <span>
                      <TiHeadphones />
                    </span>
                    Service 01
                  </div>
                  <div className="planCardDetails">
                    Lorem ipsum dolor sit amet consectetur. Condimentum dui
                    loremnulla dignissim.
                  </div>
                </div>
              </Col>
              <Col sm={4} md={4}>
                <div className="planCard">
                  <div className="planCardHeading">
                    <span>
                      <TiHeadphones />
                    </span>
                    Service 01
                  </div>
                  <div className="planCardDetails">
                    Lorem ipsum dolor sit amet consectetur. Condimentum dui
                    loremnulla dignissim.
                  </div>
                </div>
              </Col>
              <Col sm={4} md={4}>
                <div className="planCard">
                  <div className="planCardHeading">
                    <span>
                      <TiHeadphones />
                    </span>
                    Service 01
                  </div>
                  <div className="planCardDetails">
                    Lorem ipsum dolor sit amet consectetur. Condimentum dui
                    loremnulla dignissim.
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={4} md={4}>
                <div className="planCard">
                  <div className="planCardHeading">
                    <span>
                      <TiHeadphones />
                    </span>
                    Service 01
                  </div>
                  <div className="planCardDetails">
                    Lorem ipsum dolor sit amet consectetur. Condimentum dui
                    loremnulla dignissim.
                  </div>
                </div>
              </Col>
              <Col sm={4} md={4}>
                <div className="planCard">
                  <div className="planCardHeading">
                    <span>
                      <TiHeadphones />
                    </span>
                    Service 01
                  </div>
                  <div className="planCardDetails">
                    Lorem ipsum dolor sit amet consectetur. Condimentum dui
                    loremnulla dignissim.
                  </div>
                </div>
              </Col>
              <Col sm={4} md={4}>
                <div className="planCard">
                  <div className="planCardHeading">
                    <span>
                      <TiHeadphones />
                    </span>
                    Service 01
                  </div>
                  <div className="planCardDetails">
                    Lorem ipsum dolor sit amet consectetur. Condimentum dui
                    loremnulla dignissim.
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="pricingTable">
        <div className="featuresTable">
          <div className="d-flex mt-4 justify-content-center align-items-center">
            <h2 className=" text-center  comparisonHeading">Compare Plans</h2>
            <label className="toggle-switch mx-4">
              <input
                type="checkbox"
                checked={isPricingTableVisible}
                onChange={togglePricingTable}
              />
              <span className="slider"></span>
            </label>
          </div>
          {isPricingTableVisible && (
            <Table responsive bordered hover className="customTable">
            <thead>
              <tr>
                <th className="multiHeading borderRight">Multi Streaming</th>
                <th className="borderRight">
                  Free Plan <br />
                  <span className="priceText">$0/ forever</span>
                  <div className="reachMoreBtnWrap d-flex justify-content-center align-items-center">
                    <Link to={"/signUp"}>
                      <button className="reachMoreBtn">Get Started</button>
                    </Link>
                  </div>
                </th>
                <th className="borderRight">
                  Standard <br />
                  <span className="priceText">$15/ month</span>
                  <div className="reachMoreBtnWrap d-flex justify-content-center align-items-center">
                    <Link to={"/checkout"}>
                      <button className="reachMoreBtn">Choose this plan</button>
                    </Link>
                  </div>
                </th>
                <th className="borderRight">
                  Professional <br />
                  <span className="priceText">$39/ month</span>
                  <div className="reachMoreBtnWrap d-flex justify-content-center align-items-center">
                    <Link to={"/checkout"}>
                      <button className="reachMoreBtn">Choose this plan</button>
                    </Link>
                  </div>
                </th>
                <th className="borderRight">
                  Business <br />
                  <span className="priceText">$79/ month</span>
                  <div className="reachMoreBtnWrap d-flex justify-content-center align-items-center">
                    <Link to={"/checkout"}>
                      <button className="reachMoreBtn">Choose this plan</button>
                    </Link>
                  </div>
                </th>
                <th className="borderRight">
                  Enterprise <br />
                  <span className="priceText">$249/ month</span>
                  <div className="reachMoreBtnWrap d-flex justify-content-center align-items-center">
                    <Link to={"/checkout"}>
                      <button className="reachMoreBtn">Choose this plan</button>
                    </Link>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => {
                return (
                  <tr key={index}>
                    <td>{feature.name}</td>
                    {feature.support.map((isSupported, idx) => {
                      return (
                        <td key={idx}>
                          {isSupported ? (
                            <span className="text-center">✔️</span>
                          ) : (
                            <span className="text-center">❌</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
            <thead>
              <tr>
              <th className="multiHeading borderRight">Cast Bunny Studio</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => {
                return (
                  <tr key={index}>
                    <td>{feature.name}</td>
                    {feature.support.map((isSupported, idx) => {
                      return (
                        <td key={idx}>
                          {isSupported ? (
                            <span className="text-center">✔️</span>
                          ) : (
                            <span className="text-center">❌</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
            <thead>
              <tr>
              <th className="multiHeading borderRight">Pre Recorded Live Streams</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => {
                return (
                  <tr key={index}>
                    <td>{feature.name}</td>
                    {feature.support.map((isSupported, idx) => {
                      return (
                        <td key={idx}>
                          {isSupported ? (
                            <span className="text-center">✔️</span>
                          ) : (
                            <span className="text-center">❌</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
            <thead>
              <tr>
              <th className="multiHeading borderRight">For Teams</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => {
                return (
                  <tr key={index}>
                    <td>{feature.name}</td>
                    {feature.support.map((isSupported, idx) => {
                      return (
                        <td key={idx}>
                          {isSupported ? (
                            <span className="text-center">✔️</span>
                          ) : (
                            <span className="text-center">❌</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table>                              
          )}
        </div>
      </div>

      <div className="frequentlyAsk">
        <div className="frequentlyAskHeading">
          See, what users frequently ask
        </div>
        <div className="frequentlyAskDetails">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Lorem ipsum dolor sit amet consectetur. Tellus tempus dolor non
                nibh elementum.
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Lorem ipsum dolor sit amet consectetur. Tellus tempus dolor non
                nibh elementum.
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Lorem ipsum dolor sit amet consectetur. Tellus tempus dolor non
                nibh elementum.
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                {" "}
                Lorem ipsum dolor sit amet consectetur. Tellus tempus dolor non
                nibh elementum.
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <div className="reachMoreViewersWrap pricingCTA ">
        <div className="reachMoreText text-center">Get Started today!</div>
        <h4 className="pricingCTAText text-center">
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

export default Pricing;
