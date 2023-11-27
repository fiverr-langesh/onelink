import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Maincontent() {
  return (
    <section className="mainContent">
      <Container fluid>
        <Row className="contentRow">
          <Col lg={"9"}>
            <Row className="panelContent">
              <Col lg={"12"}>
                <div className="topPanel">
                  <form className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter Url"
                    />

                    <button className="mainBtn" type="submit">
                      Add Url
                    </button>
                  </form>
                  <form className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter Url"
                    />

                    <button className="mainBtn addBtn" type="submit">
                      Add fallback Url
                    </button>
                  </form>

                  <div className="formButtons">
                    <a href="#link" className="mainBtn">
                      Generate
                    </a>

                    <div className="redioButtons">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          class="form-check-label randomLBL"
                          for="flexRadioDefault1"
                        >
                          Random Link
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        />
                        <label class="form-check-label" for="flexRadioDefault2">
                          Lineal Link
                        </label>
                      </div>
                    </div>
                  </div>

                  <form className="input-group">
                    <button className="mainBtn customBtn" type="submit">
                      <img
                        src="/img/premium.png"
                        alt="premium"
                        className="img-fluid"
                      />
                      Customize link
                    </button>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter Url"
                    />

                    <button className="mainBtn copyBtn" type="submit">
                      Copy
                    </button>
                  </form>
                </div>
              </Col>

              <Col lg={"12"}>
                <div className="tableSection table-responsive">
                  <table width="100%">
                    <thead>
                      <tr>
                        <th>URL</th>
                        <th></th>
                        <th>Status</th>
                        <th> Delete All</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>https://www.waves.com/</td>
                        <td>10/11/23</td>
                        <td>Active</td>
                        <td>
                          <a href="#link" className="tableBtn editBtn">
                            <img
                              src="/img/tedit.svg"
                              alt="edit"
                              className="img-fluid"
                            />
                          </a>
                          <a href="#link" className="tableBtn deleteBtn">
                            <img
                              src="/img/tdelete.svg"
                              alt="edit"
                              className="img-fluid"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>https://www.waves.com/</td>
                        <td>10/11/23</td>
                        <td>Active</td>
                        <td>
                          <a href="#link" className="tableBtn editBtn">
                            <img
                              src="/img/tedit.svg"
                              alt="edit"
                              className="img-fluid"
                            />
                          </a>
                          <a href="#link" className="tableBtn deleteBtn">
                            <img
                              src="/img/tdelete.svg"
                              alt="edit"
                              className="img-fluid"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>https://www.waves.com/</td>
                        <td>10/11/23</td>
                        <td>Active</td>
                        <td>
                          <a href="#link" className="tableBtn editBtn">
                            <img
                              src="/img/tedit.svg"
                              alt="edit"
                              className="img-fluid"
                            />
                          </a>
                          <a href="#link" className="tableBtn deleteBtn">
                            <img
                              src="/img/tdelete.svg"
                              alt="edit"
                              className="img-fluid"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>https://www.waves.com/</td>
                        <td>10/11/23</td>
                        <td>Active</td>
                        <td>
                          <a href="#link" className="tableBtn editBtn">
                            <img
                              src="/img/tedit.svg"
                              alt="edit"
                              className="img-fluid"
                            />
                          </a>
                          <a href="#link" className="tableBtn deleteBtn">
                            <img
                              src="/img/tdelete.svg"
                              alt="edit"
                              className="img-fluid"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>https://www.waves.com/</td>
                        <td>10/11/23</td>
                        <td>Active</td>
                        <td>
                          <a href="#link" className="tableBtn editBtn">
                            <img
                              src="/img/tedit.svg"
                              alt="edit"
                              className="img-fluid"
                            />
                          </a>
                          <a href="#link" className="tableBtn deleteBtn">
                            <img
                              src="/img/tdelete.svg"
                              alt="edit"
                              className="img-fluid"
                            />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                    <tbody className="bodyTwo">
                      <tr>
                        <td>https://www.waves.com/</td>
                        <td>10/11/23</td>
                        <td>Used</td>
                        <td>
                          <a href="#link" className="tableBtn deleteBtn">
                            <img
                              src="/img/delete.svg"
                              alt="edit"
                              className="img-fluid"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>https://www.waves.com/</td>
                        <td>10/11/23</td>
                        <td>Used</td>
                        <td>
                          <a href="#link" className="tableBtn deleteBtn">
                            <img
                              src="/img/delete.svg"
                              alt="edit"
                              className="img-fluid"
                            />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={"3"}>
            <div className="rightContent">
              <div className="rightActions">
                <a href="#link" className="rightLink signalLink">
                  Save List
                  <img
                    src="/img/premium.png"
                    alt="premium"
                    className="img-fluid bTag"
                  />
                </a>
                <a href="#link" className="rightLink signalLink">
                  Reset
                  <img
                    src="/img/premium.png"
                    alt="premium"
                    className="img-fluid bTag"
                  />
                </a>
                <a href="#link" className="rightLink">
                  Delete List <br /> after x uses
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                  <img
                    src="/img/premium.png"
                    alt="premium"
                    className="img-fluid bTag"
                  />
                </a>
                <a href="#link" className="rightLink">
                  Delete List
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                  <img
                    src="/img/premium.png"
                    alt="premium"
                    className="img-fluid bTag"
                  />
                </a>
                <a href="#link" className="rightLink">
                  Loop
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                  <img
                    src="/img/premium.png"
                    alt="premium"
                    className="img-fluid bTag"
                  />
                </a>
              </div>
              <div className="rightActions">
                <img
                  src="/img/premium.png"
                  alt="premium"
                  className="img-fluid pTag"
                />
                <h1 className="title">Timers</h1>
                <a href="#link" className="rightLink">
                  Activate List
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                </a>
                <a href="#link" className="rightLink">
                  Stop List
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                </a>
                <a href="#link" className="rightLink">
                  Delete List
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Maincontent;
