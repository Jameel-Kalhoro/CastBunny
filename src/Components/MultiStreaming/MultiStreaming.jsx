import React, { useState } from "react";
import "./MultiStreaming.css";
import { Container, Row, Col } from "react-bootstrap";
import rightHead from "../assets/rightDivHead.svg";
import leftHead from "../assets/leftDivHead.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import arrows from "../assets/multiIllustraionArrows.svg";

const MultiStreaming = () => {
  const [toggleStates, setToggleStates] = useState({
    div1: true,
    div2: true,
    div3: true,
    div4: true,
  });

  const handleToggle = (divKey) => {
    setToggleStates((prevState) => ({
      ...prevState,
      [divKey]: !prevState[divKey],
    }));
  };
  const reviewData = [
    {
      name: "Olivia Brook",
      designation: "Etsy Craft Entrepreneur",
      comment:
        "With CastBunny, my audience increased by more than 70%. It has boosted my sales and visibility on Facebook and YouTube.",
      company: "Nestle",
    },
    {
      name: "Jon Doe",
      designation: "CareTaker Manager",
      comment:
        "With CastBunny, my audience increased by more than 70%. It has boosted my sales and visibility on Facebook and YouTube.",
      company: "Cola Next",
    },
    {
      name: "Mary",
      designation: "Hr Manager",
      comment:
        "With CastBunny, my audience increased by more than 70%. It has boosted my sales and visibility on Facebook and YouTube.",
      company: "Pepsico",
    },
  ];

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: false, // Show navigation arrows
    responsive: [
      {
        breakpoint: 768, // Adjust slider for screens smaller than 768px
        settings: {
          // arrows: false, // Hide arrows on mobile
          dots: true,
        },
      },
    ],
  };
  const cards = [
    {
      id: 1,
      title: "Chats",
      content:
        "Monitor and respond to chats from all platforms in one place, ensuring you never miss a comment.",
    },
    {
      id: 2,
      title: "Backup",
      content:
        "Run a backup stream to automatically replace your main one if any issues arise.",
    },
    {
      id: 3,
      title: "Teams",
      content:
        "Collaborate with teammates to prepare, co-create, and post-produce your content seamlessly.",
    },
    {
      id: 4,
      title: "Analytics",
      content:
        "Track live views, chat activity, and peak moments to continuously improve your streaming performance.",
    },
  ];

  const [visibleCards, setVisibleCards] = useState(3); // Number of cards to show initially
  // Sample data array
  const blogData = [
    {
      id: 1,
      title: "Multiple Pages on One Platform",
      content:
        "Strengthen your influence on platforms like Facebook by streaming to your profile, pages, and relevant groups.",
    },
    {
      id: 2,
      title: "Partner Channels",
      content:
        "Boost your exposure by allowing partners to rebroadcast your live videos on their channels or host secure channel takeovers.",
    },
    {
      id: 3,
      title: "Your Website or Custom Pages",
      content:
        "Take full control of your content, bypass social media limitations, and direct viewers to pay for streams or purchase your services.",
    },
  ];
  return (
    <div className="multiStreamingWrap">
      <div className="multiStreamingTitle text-center">
        <h6>Be Seen, Everywhere</h6>
        <p>
          Expand your reach by live streaming on multiple platforms
          simultaneously.
        </p>
      </div>

      <div className="multiStreamingIllustration">
        {" "}
        <div className="multiStreamingContainer">
          <div className="outer-container">
            <div
              className="small-box"
              style={{
                backgroundColor: toggleStates.div1 ? "#ddd" : "black",
                border: toggleStates.div1 ? "none" : "1px solid white",
              }}
            >
              <div className="multiStreaming-toggle-switch">
                <div className="circle leftDivCircle"></div>

                <label className="multiStreamingSwitch leftDivSwitch">
                  <input
                    type="checkbox"
                    checked={toggleStates.div1}
                    onChange={() => handleToggle("div1")}
                  />
                  <span className="multiStreamingSlider"></span>
                </label>
              </div>
            </div>

            <div
              className="small-box"
              style={{
                backgroundColor: toggleStates.div2 ? "#ddd" : "black",
                border: toggleStates.div2 ? "none" : "1px solid white",
              }}
            >
              <div className="multiStreaming-toggle-switch">
                <div className="circle rightDivCircle"></div>

                <label className="multiStreamingSwitch rightDivSwitch">
                  <input
                    type="checkbox"
                    checked={toggleStates.div2}
                    onChange={() => handleToggle("div2")}
                  />
                  <span className="multiStreamingSlider"></span>
                </label>
              </div>
            </div>

            <div className="large-box"></div>

            <div
              className="small-box"
              style={{
                backgroundColor: toggleStates.div3 ? "#ddd" : "black",
                border: toggleStates.div3 ? "none" : "1px solid white",
              }}
            >
              <div className="multiStreaming-toggle-switch">
                <div className="circle leftDivCircle"></div>

                <label className="multiStreamingSwitch leftDivSwitch">
                  <input
                    type="checkbox"
                    checked={toggleStates.div3}
                    onChange={() => handleToggle("div3")}
                  />
                  <span className="multiStreamingSlider"></span>
                </label>
              </div>
            </div>

            <div
              className="small-box"
              style={{
                backgroundColor: toggleStates.div4 ? "#ddd" : "black",
                border: toggleStates.div4 ? "none" : "1px solid white",
              }}
            >
              <div className="multiStreaming-toggle-switch ">
                <div className="circle rightDivCircle"></div>
                <label className="multiStreamingSwitch rightDivSwitch">
                  <input
                    type="checkbox"
                    checked={toggleStates.div4}
                    onChange={() => handleToggle("div4")}
                  />
                  <span className="multiStreamingSlider"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="arrows d-flex justify-content-center align-items-center">
          <img src={arrows} alt="" />
        </div>
      </div>

      <div className="multiStreamingDestination text-center">
        <h5>Destinations</h5>
        <div className="d-flex justify-content-center align-items-center">
          <p>
            Broadcast your story across over <span>30+ platforms</span>,
            including your social media, guest channels, websites, and private
            pages, all at once.
          </p>
        </div>
      </div>

      <div className="multiStreamingDestination text-center">
        <h5>Amplify your story</h5>
        <div className="d-flex justify-content-center align-items-center">
          <p>
            Maximize your visibility by streaming to YouTube for discovery and
            LinkedIn for lead generation, leveraging the best features of each
            platform with a single stream.
          </p>
        </div>
      </div>

      <div className="multiStreamingCards ">
        <div className="d-flex justify-content-center align-items-center">
          <Container>
            <Row>
              {blogData.slice(0, visibleCards).map((blog) => (
                <Col key={blog.id} xs={12} md={4} lg={4} className="mb-4">
                  <div className="card-wrapper">
                    <div className="multiStreamingCard  ">
                      <div className="card-image-placeholder"></div>
                      <h3>{blog.title}</h3>
                      <p>{blog.content}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>

      <div className="multiStreamingTitle mt-5 text-center">
        <h6>P2P-Multistream</h6>
      </div>

      <div className="multiStreamingDivs">
        <div className="host">
          <Container>
            <Row>
              <Col sm={6} md={6} className="hostDiv">
                <div>Secure & Encrypted Streaming</div>
                <p>
                  Benefit from state-of-the-art security and encryption,
                  ensuring your streams are protected from unauthorized access
                  and interference. P2P multistreaming provides a secure
                  environment where your data is safe and your content remains
                  yours.
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
                <div>Low Latency</div>
                <p>
                  Enjoy low latency streaming for real-time interaction with
                  your audience, providing a seamless viewing experience.
                </p>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="host">
          <Container>
            <Row>
              <Col sm={6} md={6} className="hostDiv">
                <div>Scalability</div>
                <p>
                  Effortlessly scale your streams to accommodate any number of
                  viewers without compromising quality. P2P technology allows
                  for efficient distribution, making sure your stream reaches
                  everyone smoothly.
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
                <div>Cost-Effective</div>
                <p>
                  Reduce bandwidth costs by distributing the load across
                  multiple peers. This decentralized approach ensures
                  high-quality streaming without the hefty price tag.{" "}
                </p>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="host">
          <Container>
            <Row>
              <Col sm={6} md={6} className="hostDiv">
                <div>Redundancy & Reliability</div>
                <p>
                  Benefit from state-of-the-art security and encryption,
                  ensuring your streams are protected from unauthorized access
                  and interference. P2P multistreaming provides a secure
                  environment where your data is safe and your content remains
                  yours.
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
      </div>

      <div className="blurBgContainer">
        <div className="blur-background"></div>
        <div className="foreground">
          <div className="multiStreamingIntegration d-flex flex-column justify-content-center align-items-center">
            <h2>Integrations</h2>
            <div className="seamlessBadge">
              <p>Seamless Compatibility</p>
            </div>
            <p>
              CastBunny works effortlessly with your favorite streaming apps, so
              there's no need to change your current setup.
            </p>
            <div class="multiStreamContainer">
              <div class="box"></div>
              <div class="box"></div>
              <div class="box"></div>
              <div class="box"></div>
              <div class="box"></div>
            </div>
          </div>

          <div className="multiStreamingTakeControl">
            <h2>Take Control</h2>
            <div className="multiStreamingTakeControlDetails">
              <h4>Everything at your fingertips</h4>
              <h6>
                Our tools for audience engagement, analytics, and collaboration
                help you stay confident before, during, and after each stream
              </h6>

              <div>
                <Container>
                  <Row className="gy-2">
                    {cards.map((card, index) => (
                      <Col
                        key={card.id}
                        xs={12}
                        md={6}
                        lg={index === 1 || index === 3 ? 8 : 4}
                      >
                        <div
                          className={
                            index === 0
                              ? `card-container  card1`
                              : `card-container` && index === 1
                              ? `card-container card2`
                              : `card-container` && index === 2
                              ? `card-container card3`
                              : `card-container` && index === 3
                              ? `card-container card4`
                              : `card-container`
                          }
                        >
                          <div className="glass-box"></div>
                          <div className="details">
                            <h4 className="card-title">{card.title}</h4>
                            <p className="card-text">{card.content}</p>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="multiStreamingUseCase">
        <h3 className="text-center">Use Case</h3>
        <div className="multiStreamingTakeControlDetails">
          <h4>Loved by Creators</h4>
          <h6>
            From small businesses to celebrities, CastBunny is ideal for live
            events, webinars, podcasts, and gaming. Join our community of
            satisfied users!
          </h6>
        </div>

        <div className="useCaseCards d-flex justify-content-center align-items-center">
          <Container>
            <Row>
              <Col xs={12} sm={4} md={4} lg={4}>
                <div className="useCaseSmall d-flex justify-content-center align-items-center">
                  <div className="useCaseSmallPlaceholder"></div>
                </div>
              </Col>
              <Col xs={12} sm={4} md={4} lg={4}>
                <div className="useCaseLarge d-flex justify-content-center align-items-center">
                  <div className="useCaseLargePlaceholder"></div>
                </div>
              </Col>
              <Col xs={12} sm={4} md={4} lg={4}>
                <div className="useCaseSmall d-flex justify-content-center align-items-center">
                  <div className="useCaseSmallPlaceholder"></div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="userReviews">
          <h3>What Our Users Say</h3>
          <div className="reviewDiv">
            {" "}
            <Slider {...settings}>
              {reviewData.map((review, index) => (
                <Container key={index}>
                  <Row className="gx-5 d-flex justify-content-center align-items-center">
                    <Col sm={12} md={7} className="userInfo">
                      <div className="userName multiStreamingUserName">
                        {review.name}
                      </div>
                      <div className="userDesignation multiStreamingUserDesignation">
                        {review.designation}
                      </div>
                      <div className="userRemarks multiStreamingUserRemarks">
                        <p>“</p> {review.comment}
                      </div>
                      <p className="leftAppos multiStreamingLeftAppos">”</p>
                    </Col>
                    <Col sm={12} md={5}>
                      <div className="userImg d-flex flex-column align-items-center justify-content-center">
                        <div className="userImgPlaceholder"></div>
                      </div>
                      <div className="userCompany">Company</div>
                    </Col>
                  </Row>
                </Container>
              ))}
            </Slider>
          </div>
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
    </div>
  );
};

export default MultiStreaming;
