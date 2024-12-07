import React from "react";
import { Link } from "react-router-dom";
import "./VoD.css";
import { Container, Row, Col } from "react-bootstrap";
import customer from "../assets/person4.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/sliderImg1.png";
import img2 from "../assets/sliderImg2.png";
import img3 from "../assets/sliderImg3.png";
import img4 from "../assets/sliderImg4.png";
import img5 from "../assets/sliderImg5.png";
import img6 from "../assets/sliderImg6.png";
import img7 from "../assets/sliderImg7.png";

const VoD = () => {
  const sliderImages = [
    img1, // Replace with your image paths
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
  ];
  const settings = {
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: true, // Show navigation arrows
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
  return (
    <div className="vodWrap">
      <div className="VoD">
        <Container>
          <Row>
            <Col sm={12} md={5} className="vodLeft">
              <div className="vodTitle">Upload and Stream</div>
              <div className="vodDetail">
                Turn your videos into Live Streams
              </div>

              <div className="vodBtnDiv">
                <Link to={"/signup"}>
                  <button className="vodLeftBtn">Sign up now</button>
                </Link>
                <span>OR</span>
                <br />
                <Link to={"/pricing"}>
                  <button className="vodLeftPriceBtn">
                    Checkout The Pricing Plans
                  </button>
                </Link>
              </div>
            </Col>
            <Col sm={12} md={7} className="vodRight">
              <div className="vodRightVideoPlaceholder"></div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="preRecord">
        <div className="preRecordHeading">WHY PRE-RECORD?</div>
        <div className="preRecordDetails">
          <Container>
            <Row>
              <div className="preRecordLeftFeature">Increased Visibility</div>
              <Col xs={4} sm={4} md={4}>
                <div className="preRecordFeatureImgPlaceholder"></div>{" "}
              </Col>
              <Col xs={8} sm={8} md={8}>
                <p className="preRecordFeatureText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Col>
            </Row>
            <Row>
              <div className="preRecordRightFeature">More Scalability</div>
              <Col xs={8} sm={8} md={8}>
                <p className="preRecordFeatureText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Col>
              <Col xs={4} sm={4} md={4}>
                <div className="preRecordFeatureImgPlaceholder"></div>{" "}
              </Col>
            </Row>

            <Row>
              <div className="preRecordLeftFeature">Content Consistency</div>
              <Col xs={4} sm={4} md={4}>
                <div className="preRecordFeatureImgPlaceholder"></div>{" "}
              </Col>
              <Col xs={8} sm={8} md={8}>
                <p className="preRecordFeatureText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Col>
            </Row>
            <Row>
              <div className="preRecordRightFeature">Less Effort</div>
              <Col xs={8} sm={8} md={8}>
                <p className="preRecordFeatureText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Col>
              <Col xs={4} sm={4} md={4}>
                <div className="preRecordFeatureImgPlaceholder"></div>{" "}
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="peopleUse">
        <div className="peopleUseHeading">WHAT PEOPLE USE IT FOR?</div>
        <div className="peopleUseDetails">
          <div className="vodcustom-slider">
            {" "}
            <Slider {...settings}>
              {sliderImages.map((image, index) => (
                <div key={index} className="vodslider-item">
                  <img src={image} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <h6>
              Make your product premieres and company announcements a grand
              spectacle. Turn heads and spark conversations.
            </h6>
          </div>
        </div>

        <div className="customerReviews">
          <div className="customerReviewsHeading">
            WHAT CUSTOMERS HAVE TO SAY?
          </div>
          <div className="customerReviewsDetails ">
            <Container>
              <Row className="g-5">
                <Col md={6}>
                  <div className="customerCardWrap">
                    <div className="customerID mb-4">
                      <Container>
                        <Row>
                          <Col xs={4} sm={4} md={4}>
                            <div className="customerImg">
                              <img src={customer} alt="" />
                            </div>
                          </Col>
                          <Col
                            xs={4}
                            sm={4}
                            md={4}
                            className="d-flex flex-column justify-content-center "
                          >
                            {" "}
                            <div className="customerName">Mr.Customer</div>
                            <div className="customerDesignation">
                              Designation
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </div>

                    <div className="customerComment">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore
                      magnaliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.”
                    </div>

                    <div className=" d-flex justify-content-center align-items-center  mt-4">
                      <div className="brandLogo text-center">Brand Logo</div>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="customerCardWrap">
                    <div className="customerID mb-4">
                      <Container>
                        <Row>
                          <Col xs={4} sm={4} md={4}>
                            <div className="customerImg">
                              <img src={customer} alt="" />
                            </div>
                          </Col>
                          <Col
                            xs={4}
                            sm={4}
                            md={4}
                            className="d-flex flex-column justify-content-center "
                          >
                            {" "}
                            <div className="customerName">Mr.Customer</div>
                            <div className="customerDesignation">
                              Designation
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </div>

                    <div className="customerComment">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore
                      magnaliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.”
                    </div>

                    <div className=" d-flex justify-content-center align-items-center  mt-4">
                      <div className="brandLogo text-center">Brand Logo</div>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row className="g-5 mt-3">
                <Col md={6}>
                  <div className="customerCardWrap">
                    <div className="customerID mb-4">
                      <Container>
                        <Row>
                          <Col xs={4} sm={4} md={4}>
                            <div className="customerImg">
                              <img src={customer} alt="" />
                            </div>
                          </Col>
                          <Col
                            xs={4}
                            sm={4}
                            md={4}
                            className="d-flex flex-column justify-content-center "
                          >
                            {" "}
                            <div className="customerName">Mr.Customer</div>
                            <div className="customerDesignation">
                              Designation
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </div>

                    <div className="customerComment">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore
                      magnaliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.”
                    </div>

                    <div className=" d-flex justify-content-center align-items-center  mt-4">
                      <div className="brandLogo text-center">Brand Logo</div>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="customerCardWrap">
                    <div className="customerID mb-4">
                      <Container>
                        <Row>
                          <Col xs={4} sm={4} md={4}>
                            <div className="customerImg">
                              <img src={customer} alt="" />
                            </div>
                          </Col>
                          <Col
                            xs={4}
                            sm={4}
                            md={4}
                            className="d-flex flex-column justify-content-center "
                          >
                            {" "}
                            <div className="customerName">Mr.Customer</div>
                            <div className="customerDesignation">
                              Designation
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </div>

                    <div className="customerComment">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore
                      magnaliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.”
                    </div>

                    <div className=" d-flex justify-content-center align-items-center  mt-4">
                      <div className="brandLogo text-center">Brand Logo</div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>

      <div className="vodCollaborate">
        <div className="vodCollaborateHeading">
          <div>COLLABORATE WITH TEAM</div>
          <p>Invite your team to work on videos and live chat with viewers.</p>
        </div>
        <div className="vodCollaborateDetails">
          <div className="vodCollaborateDetailsTitle">
            <Container>
              <Row className="gx-4">
                <Col xs={3} sm={3} md={3}>
                  <div className="collaborateDiv d-flex justify-content-center align-items-center">
                    <div></div>
                    <p className="collaborateDivName">Playlists</p>
                  </div>
                </Col>
                <Col xs={3} sm={5} md={3}>
                  <div className="collaborateDiv d-flex justify-content-center align-items-center">
                    <div></div>
                    <p className="collaborateDivName">Interactive Graphics </p>
                  </div>
                </Col>
                <Col xs={3} sm={3} md={3}>
                  <div className="collaborateDiv d-flex justify-content-center align-items-center">
                    <div></div>
                    <p className="collaborateDivName">Multi Chat</p>
                  </div>
                </Col>
              </Row>
            </Container>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className=" collaborateDivDisplayDiv ">
                <div className="collaborateDivDisplay"></div>
                <div className="collaborateDivDisplayText">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  nihil, perferendis odit velit incidunt placeat aut quidem eum
                  dolorum amet!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="vodGetStarted d-flex flex-column justify-content-center align-items-center">
        <p>Get Started today by bringing your videos to Live</p>
        <button>Sign up now</button>
      </div> */}

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

export default VoD;
