import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Countnumber() {
  return (
    <div className="numberSection">
      <Container>
        <Row className="numberRow">
          <Col lg="3">
            <div className="item frist">
              <h2 className="value">220k+</h2>
              <p className="text">Action Users</p>
            </div>
          </Col>
          <Col lg="3">
            <div className="item">
              <h2 className="value">88k+</h2>
              <p className="text">Users Passive</p>
            </div>
          </Col>
          <Col lg="3">
            <div className="item">
              <h2 className="value">30%</h2>
              <p className="text">Increases in users</p>
            </div>
          </Col>
          <Col lg="3">
            <div className="item">
              <h2 className="value">10k+</h2>
              <p className="text">Good Testimonials</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Countnumber;
