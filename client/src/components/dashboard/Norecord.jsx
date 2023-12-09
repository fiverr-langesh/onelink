import React from "react";
import { Col, Row, Container } from "react-bootstrap";

function Norecord() {
  return (
    <section className="mainContent">
      <Container fluid>
        <Row className="contentRow">
          <Col lg={"9"}>
            <Row className="panelContent">
              <Col lg={"12"}>
                <div className="topPanel panelTwo">
                  <div className="topNav">
                    <p className="navTitle">List Name</p>
                    <p className="navTitle">Links in List</p>
                    <a href="#link" className="navTitle deleteBtn">
                      Delete all
                    </a>
                  </div>

                  <div className="nodeTable">
                    <table class="table">
                      <tbody>
                        <tr>
                          <td>Group 1</td>
                          <td>https://www.waves.com/</td>
                          <td>Active</td>
                        </tr>
                        <tr>
                          <td>Group 1</td>
                          <td>https://www.waves.com/</td>
                          <td>Active</td>
                        </tr>
                        <tr>
                          <td>Group 1</td>
                          <td>https://www.waves.com/</td>
                          <td>Active</td>
                        </tr>
                        <tr>
                          <td>Group 1</td>
                          <td>https://www.waves.com/</td>
                          <td>Active</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Col>

              <Col lg={"12"}>
                <div className="tableSection tableSectionTwo">
                  <div className="nodeImage">
                    <img
                      src="/img/notebook.png"
                      alt="notebook"
                      className="img-fluid"
                    />
                    <p className="noteTitle">No Records yet </p>
                  </div>
                  <table width="100%">
                    <thead>
                      <tr>
                        <th>URL</th>
                        <th></th>
                        <th>Status</th>
                        <th> Delete All</th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={"3"}>
            <div className="rightContent rightContentTwo">
              <div className="errorContent">
                <img
                  src="/img/error.png"
                  alt="erroImage"
                  className="img-fluid"
                />
                <h5 className="errorTitle">
                  Oops looks like you have no other groups right now
                </h5>
                <p className="text">Let’s fix that by creating a new group</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Norecord;
