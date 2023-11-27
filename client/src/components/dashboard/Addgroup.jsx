import React from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { useState } from "react";

function Addgroup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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

                  <div className="recordTable table-responsive">
                    <table class="table">
                      <tbody>
                        <tr>
                          <td className="highlight">Quad Squad</td>
                          <td className="highlight">20</td>
                          <td>
                            <a href="#" className="useBtn">
                              Reuse List
                            </a>
                          </td>
                          <td>
                            <div className="dataButtons">
                              <a href="#" className="tableBtn editBtn">
                                <img
                                  src="/img/edit.svg"
                                  alt="edit"
                                  className="img-fluid"
                                />
                              </a>
                              <a href="#" className="tableBtn deleteBtn">
                                <img
                                  src="/img/delete.svg"
                                  alt="edit"
                                  className="img-fluid"
                                />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="highlight">Quad Squad</td>
                          <td className="highlight">20</td>
                          <td>
                            <a href="#" className="useBtn">
                              Reuse List
                            </a>
                          </td>
                          <td>
                            <div className="dataButtons">
                              <a href="#" className="tableBtn editBtn">
                                <img
                                  src="/img/edit.svg"
                                  alt="edit"
                                  className="img-fluid"
                                />
                              </a>
                              <a href="#" className="tableBtn deleteBtn">
                                <img
                                  src="/img/delete.svg"
                                  alt="edit"
                                  className="img-fluid"
                                />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="highlight">Quad Squad</td>
                          <td className="highlight">20</td>
                          <td>
                            <a href="#" className="useBtn">
                              Reuse List
                            </a>
                          </td>
                          <td>
                            <div className="dataButtons">
                              <a href="#" className="tableBtn editBtn">
                                <img
                                  src="/img/edit.svg"
                                  alt="edit"
                                  className="img-fluid"
                                />
                              </a>
                              <a href="#" className="tableBtn deleteBtn">
                                <img
                                  src="/img/delete.svg"
                                  alt="edit"
                                  className="img-fluid"
                                />
                              </a>
                            </div>
                          </td>
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
              <div className="addCheckbox">
                <h5 className="title">
                  Choose the group(s) on which you want to apply this list
                </h5>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Quad Square
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Square Square
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    The Coven
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    The Posse
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    The Posse
                  </label>
                </div>

                <div className="addButtons">
                  <a href="#link" className="mainBtn">
                    Cancel
                  </a>
                  <a
                    href="#link"
                    className="mainBtn saveBtn"
                    onClick={handleShow}
                  >
                    Save
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose} className="groupModel">
        <Modal.Body>
          <h4 className="title">
            You want to use this list in multiple groups?
          </h4>

          <div className="addButtons">
            <a href="#link" className="mainBtn" onClick={handleClose}>
              Cancel
            </a>
            <a href="#link" className="mainBtn saveBtn" onClick={handleShow}>
              Yes
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default Addgroup;
