import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function ClickSection() {
  return (
    <section className="heroSection clickSection">
      <Container>
        <Row className="heroRow">
          <Col lg={"6"}>
            <div className="heroContent">
              <h1 className="title">Exciting Clicks</h1>
              <p className="text">
                Onelistlink is all about surprises! Each click leads to
                something new, keeping users engaged. it’s like a lucky dip, but
                online.
              </p>
              <a href="#" className="mainBtn outlineBtn">
                Join for free
              </a>
            </div>
          </Col>

          <Col lg={"6"}>
            <div className="heroImage">
              <img src="./img/clickImage.png" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ClickSection;
