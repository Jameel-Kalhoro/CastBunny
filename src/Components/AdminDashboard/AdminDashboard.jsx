import React from "react";
import { Container, Row, Col, Card, ProgressBar, ListGroup, Badge } from "react-bootstrap";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const analyticsProgress = 75; // Example progress percentage for Google Analytics
  const signUpProgress = 90; // Example progress for Sign-Up Process
  const paymentGatewayProgress = 60; // Example progress for Payment Gateways

  return (
    <div className="admincontainer">
    <Container fluid className="p-4 bg-tansparent">
      <h2 className="mb-4 text-center">Admin Dashboard</h2>

      {/* Row for Dashboard Cards */}
      <Row className="g-4">
        {/* Google Analytics Integration */}
        <Col md={4}>
          <Card className="shadow adminbox">
            <Card.Header className="bg-primary text-white">Google Analytics Integration</Card.Header>
            <Card.Body>
              <Card.Text>
                Monitor the progress and integration status of Google Analytics across your platform.
              </Card.Text>
              <ProgressBar now={analyticsProgress} label={`${analyticsProgress}%`} variant="info" />
            </Card.Body>
            <Card.Footer className="text-muted">
              Last Updated: <span className="fw-bold">1 day ago</span>
            </Card.Footer>
          </Card>
        </Col>

        {/* Sign-Up Process */}
        <Col md={4}>
          <Card className="shadow adminbox">
            <Card.Header className="bg-success text-white">Sign-Up Processes</Card.Header>
            <Card.Body>
              <Card.Text>
                Keep track of the sign-up process updates, user flows, and related changes.
              </Card.Text>
              <ProgressBar now={signUpProgress} label={`${signUpProgress}%`} variant="success" />
            </Card.Body>
            <Card.Footer className="text-muted">
              Last Updated: <span className="fw-bold">3 hours ago</span>
            </Card.Footer>
          </Card>
        </Col>

        {/* Payment Gateways */}
        <Col md={4}>
          <Card className="shadow adminbox">
            <Card.Header className="bg-warning text-dark">Payment Gateways</Card.Header>
            <Card.Body>
              <Card.Text>
                Overview of payment gateway integration, configurations, and current progress.
              </Card.Text>
              <ProgressBar now={paymentGatewayProgress} label={`${paymentGatewayProgress}%`} variant="warning" />
            </Card.Body>
            <Card.Footer className="text-muted">
              Last Updated: <span className="fw-bold">5 days ago</span>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

      {/* Additional Updates Section */}
      <Row className="mt-5">
        <Col>
          <Card className="shadow adminbox">
            <Card.Header className="bg-secondary text-white">Recent Updates</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Badge bg="primary" className="me-2">New</Badge> Google Analytics event tracking added.
              </ListGroup.Item>
              <ListGroup.Item>
                <Badge bg="success" className="me-2">Fixed</Badge> Sign-up process validation bug resolved.
              </ListGroup.Item>
              <ListGroup.Item>
                <Badge bg="warning" className="me-2">Pending</Badge> Stripe payment gateway API verification.
              </ListGroup.Item>
              <ListGroup.Item>
                <Badge bg="info" className="me-2">Improved</Badge> User onboarding process.
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default AdminDashboard;
