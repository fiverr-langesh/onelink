import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Update() {
  return (
    <section className="heroSection updateSection">
      <Container>
        <Row className="heroRow">
          <Col lg={"6"}>
            <div className="heroImage">
              <img src="./img/update-image.png" className="img-fluid" />
            </div>
          </Col>

          <Col lg={"6"}>
            <div className="heroContent">
              <h1 className="title">No-Hassle Updates</h1>
              <p className="text">
                Forget the hassle of manual updates, Onelistlink take care of
                you. It’s like having an automatic refreash button for your
                content.
              </p>
              <a href="#" className="mainBtn outlineBtn">
                Join for free
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Update;
