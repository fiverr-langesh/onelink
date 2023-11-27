import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Cnavbar() {
  return (
    <section className="dashboardHeader">
      <Container fluid>
        <Row className="navbarRow">
          <Col lg={"12"}>
            <div className="navbar">
              <div className="navBrand">
                <a href="#" className="groupName">
                  Group 1
                </a>
              </div>

              <div className="navLinks">
                <p className="date">Created at 20/11/21</p>
                <a href="#link" className="upgradeBtn">
                  <img
                    src="/img/premium.png"
                    alt="premium"
                    className="img-fluid"
                  />
                  Upgrade Plan
                </a>
              </div>

              <div className="actionButtons">
                <a href="#link" className="aLink">
                  <img
                    src="/img/note.svg"
                    alt="premium"
                    className="img-fluid"
                  />
                </a>
                <a href="#link" className="aLink">
                  <img
                    src="/img/setting.png"
                    alt="premium"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Cnavbar;
