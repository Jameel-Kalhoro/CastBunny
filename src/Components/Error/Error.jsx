import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Error = () => {
  return (
    <Container
      className=" d-flex justify-content-center align-items-center my-5"
      style={{ minHeight: "40vh" }}
    >
      <Row>
        <Col>
          <div className="text-center fs-1">
            <p>404 Page Not Found</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Error;
