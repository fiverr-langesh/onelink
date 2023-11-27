import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Pricing() {
  return (
    <section className="pricingSection">
      <Container>
        <Row className="priceRow">
          <Col lg={"12"}>
            <div className="sectionHeading">
              <h1 className="title">Get Your Awesome Plan</h1>
            </div>
          </Col>
          <div className="col-lg-12">
            <div className="pricinghButtons">
              <div className="btn-group">
                <button className="priceBtn tab-btn active" data-tab="tab1">
                  Monthly
                </button>
                <button className="priceBtn tab-btn" data-tab="tab2">
                  Annually
                </button>
              </div>
            </div>

            <div id="tab1" className="tab-content active-tab">
              <div className="priceTable table-responsive">
                <table className="table">
                  <thead>
                    <tr className="topHeading">
                      <th scope="col"></th>
                      <th scope="col" className="tTitle">
                        <span className="mTitle">
                          Free
                          <img
                            src="./img/help.svg"
                            className="img-fluid"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            data-bs-custom-className="custom-tooltip"
                            data-bs-title="Always Free"
                          />
                        </span>
                      </th>
                      <th scope="col" className="tTitle">
                        <span className="mTitle">
                          Balanced
                          <img
                            src="./img/help.svg"
                            className="img-fluid"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            data-bs-custom-className="custom-tooltip"
                            data-bs-title="Most Power plus 5 groups"
                          />
                        </span>
                      </th>
                      <th scope="col" className="tTitle">
                        <span className="mTitle">
                          Unlimited
                          <img
                            src="./img/help.svg"
                            className="img-fluid"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            data-bs-custom-className="custom-tooltip"
                            data-bs-title="Unlimited Everthing"
                          />
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <thead>
                    <tr>
                      <th scope="col" className="sTitle">
                        All Features
                      </th>
                      <th scope="col" className="tTitle">
                        <span className="tTitle">$0.00</span>
                      </th>
                      <th scope="col" className="tTitle">
                        <span className="tTitle">$2.99</span>
                      </th>
                      <th scope="col" className="tTitle">
                        <span className="tTitle">$4.99</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <i className="fa fa-chevron-up"></i> Unlimited Links
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-chevron-down"></i> Unlimited Groups
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-chevron-down"></i> LinealList Link
                        Generator
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-chevron-down"></i> Delete Multiple
                        Links
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-chevron-down"></i> List link counter
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-chevron-up"></i> Free of Ad banner
                      </td>
                      <td className="uncheck">
                        <i className="fa fa-x"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-chevron-up"></i> Priority Support
                      </td>
                      <td className="uncheck">
                        <i className="fa fa-x"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-chevron-down"></i> Random List Link
                        Generator
                      </td>
                      <td className="uncheck">
                        <i className="fa fa-x"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-chevron-down"></i> Timer for List to
                        be Deleted
                      </td>
                      <td className="uncheck">
                        <i className="fa fa-x"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-chevron-down"></i> Delete list after
                        x amount of uses
                      </td>
                      <td className="uncheck">
                        <i className="fa fa-x"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-chevron-down"></i> Timestamp of
                        cration
                      </td>
                      <td className="uncheck">
                        <i className="fa fa-x"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="tableButtons">
                  <a href="#" className="mainBtn outlineBtn">
                    See more details
                  </a>
                </div>
              </div>
            </div>

            <div id="tab2" className="tab-content">
              <div className="priceTable table-responsive">
                <table className="table">
                  <thead>
                    <tr className="topHeading">
                      <th scope="col"></th>
                      <th scope="col" className="tTitle">
                        <span className="mTitle">
                          Free{" "}
                          <img src="./img/help.svg" className="img-fluid" />
                        </span>
                      </th>
                      <th scope="col" className="tTitle">
                        <span className="mTitle">
                          Balanced{" "}
                          <img src="./img/help.svg" className="img-fluid" />
                        </span>
                      </th>
                      <th scope="col" className="tTitle">
                        <span className="mTitle">
                          Unlimited
                          <img src="./img/help.svg" className="img-fluid" />
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <thead>
                    <tr>
                      <th scope="col" className="sTitle">
                        All Features
                      </th>
                      <th scope="col" className="tTitle">
                        <span className="tTitle">$0.00</span>
                      </th>
                      <th scope="col" className="tTitle">
                        <span className="tTitle">$82.99</span>
                      </th>
                      <th scope="col" className="tTitle">
                        <span className="tTitle">$114.99</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <i className="fa fa-chevron-up"></i> Unlimited Links
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-chevron-down"></i> Unlimited Groups
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-chevron-down"></i> LinealList Link
                        Generator
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-chevron-down"></i> Delete Multiple
                        Links
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-chevron-down"></i> List link counter
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-chevron-up"></i> Free of Ad banner
                      </td>
                      <td className="uncheck">
                        <i className="fa fa-x"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-chevron-up"></i> Priority Support
                      </td>
                      <td className="uncheck">
                        <i className="fa fa-x"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-chevron-down"></i> Random List Link
                        Generator
                      </td>
                      <td className="uncheck">
                        <i className="fa fa-x"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-chevron-down"></i> Timer for List to
                        be Deleted
                      </td>
                      <td className="uncheck">
                        <i className="fa fa-x"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-chevron-down"></i> Delete list after
                        x amount of uses
                      </td>
                      <td className="uncheck">
                        <i className="fa fa-x"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-chevron-down"></i> Timestamp of
                        cration
                      </td>
                      <td className="uncheck">
                        <i className="fa fa-x"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                      <td>
                        <i className="fa fa-check"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="tableButtons">
                  <a href="#" className="mainBtn outlineBtn">
                    See more details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Pricing;
