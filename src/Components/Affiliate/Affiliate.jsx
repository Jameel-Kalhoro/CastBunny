import React from "react";
import "./Affiliate.css";
import { Container, Col, Row } from "react-bootstrap";

const Affiliate = () => {
  return (
    <div className="affiliateWrap">
      <div className="affiliateHeading">
        <div>
          <span className="stream">Stream</span> More,{" "}
          <span className="earn">Earn</span> More
        </div>
        <div className="affiliateDetails">
          <div>Join the CastBunny Affiliate Program!</div>
          <p>
            CastBunny’s affiliate program lets you turn your passion for
            streaming into profit. Share CastBunny with your audience, drive new
            users, and earn commission on every sign-up or subscription. Help
            others discover seamless streaming while you enjoy rewards for each
            conversion!
          </p>
          <button>Start Earning</button>
        </div>
      </div>

      <div className="affiliateProgram">
        <div className="affiliateProgramTitle">How would our program work?</div>
        <div className="affiliateProgramDetails">
          <Container>
            <Row>
              <Col
                sm={12}
                md={4}
                className="programDiv d-flex flex-column justify-content-center align-items-center"
              >
                <div>Stage 1</div>
                <div className="programDivImgPlaceholder"></div>
                <p>This is Step1 Description</p>
              </Col>
              <Col
                sm={12}
                md={4}
                className="programDiv d-flex flex-column justify-content-center align-items-center"
              >
                <div>Stage 2</div>
                <div className="programDivImgPlaceholder"></div>
                <p>This is Step2 Description</p>
              </Col>
              <Col
                sm={12}
                md={4}
                className="programDiv d-flex flex-column justify-content-center align-items-center"
              >
                <div>Stage 3</div>
                <div className="programDivImgPlaceholder"></div>
                <p>This is Step3 Description</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="startEarning">
        <p>Start earning cash from your live stream</p>
        <button>Start Earning</button>
      </div>
    </div>
  );
};

export default Affiliate;
