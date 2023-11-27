import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Endless() {
  return (
    <section className="heroSection endlessSection">
      <Container>
        <Row className="heroRow">
          <Col lg={"6"}>
            <div className="heroContent">
              <h1 className="title">Endless Curiosity</h1>
              <p className="text">
                Onelistlink sparks curiosity. Users are naturally drawn to
                explore more, like flipping through pages of an amazing book,
                you never want to stop.
              </p>
              <a href="#" className="mainBtn outlineBtn">
                Join for free
              </a>
            </div>
          </Col>

          <Col lg={"6"}>
            <div className="heroImage">
              <img src="./img/endless-image.png" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Endless;
