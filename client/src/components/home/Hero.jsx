import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Hero() {
  return (
    <section className="heroSection">
      <Container>
        <Row className="heroRow">
          <Col lg={"6"}>
            <div className="heroContent">
              <h1 className="title">Add, Create, post and Repeat</h1>
              <p className="text">
                Make your <span>follower’s experience</span> better by easily
                creating a <span>single link for all your invitation,</span>
                giveaways, and much more!
              </p>
              <a href="#" className="mainBtn">
                Start Now
              </a>
            </div>
          </Col>

          <Col lg={"6"}>
            <div className="heroImage">
              <img src="./img/hero-image.png" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
