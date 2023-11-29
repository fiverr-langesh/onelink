import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import api from "../../utils/api";

function Maincontent() {
  const [state, setState] = React.useState({ links: [], fallbackUrl: "" });
  const [url, setUrl] = React.useState("");
  const [fallback, setFallback] = useState("");

  useEffect(() => {
    async function getUrl() {
      const res = await api.get("/link");

      if (res.data.links?.length > 0 && res.status === 200) {
        setState((prev) => {
          return {
            ...prev,
            links: res.data.links,
            fallbackUrl: res.data.fallbackUrl,
          };
        });

        setFallback(res.data.fallbackUrl);
      }
    }

    getUrl();
  }, []);

  async function saveLinks() {
    console.log(state);
    const res = await api.post("/link/save", { links: state.links,fallbackUrl:state.fallbackUrl });

    if (res.status === 200) {
      alert("Links saved successfully");
    }
  }

  function addUrl(e) {
    e.preventDefault();

    if (url) {
      const day = new Date().getDate();
      const month = new Date().getMonth();
      const year = new Date().getFullYear() % 100; // Extract last two digits
      const date = `${day}/${month}/${year}`;

      const id = Math.floor(Math.random() * 1000000000);

      const payload = {
        id,
        url,
        date,
        status: "Active",
      };

      setState((prev) => {
        return {
          ...prev,
          links: [...prev.links, payload],
        };
      });
      setUrl("");
    }
  }

  function deleteUrl(id) {
    const updatedLinks = state.links.filter((item) => {
      if (item.id) {
        return item.id !== id;
      } else {
        return item._id !== id;
      }
    });

    setState((prev) => ({
      ...prev,
      links: updatedLinks,
    }));
  }

  return (
    <section className="mainContent">
      <Container fluid>
        <Row className="contentRow">
          <Col lg={"9"}>
            <Row className="panelContent">
              <Col lg={"12"}>
                <div className="topPanel">
                  <form onSubmit={addUrl} className="input-group">
                    <input
                      id="url"
                      type="text"
                      className="form-control"
                      placeholder="enter Url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
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
                      value={fallback}
                      onChange={(e) => setFallback(e.target.value)}
                    />

                    <button
                      onClick={() => {
                        setState((prev) => {
                          return {
                            ...prev,
                            fallbackUrl: fallback,
                          };
                        });
                      }}
                      className="mainBtn addBtn"
                    >
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
                      {state.links.map((item) => {
                        if (item.status === "Active") {
                          return (
                            <tr key={item.id || item._id}>
                              <td>{item.url}</td>
                              <td>{item.date}</td>
                              <td>{item.status}</td>
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
                                    onClick={() =>
                                      deleteUrl(item.id || item._id)
                                    }
                                  />
                                </a>
                              </td>
                            </tr>
                          );
                        }
                      })}
                    </tbody>
                    <tbody className="bodyTwo">
                      {state.links.map((item) => {
                        if (item.status === "Used") {
                          return (
                            <tr key={item.id || item._id}>
                              <td>{item.url}</td>
                              <td>{item.date}</td>
                              <td>{item.status}</td>
                              <td>
                                <a href="#link" className="tableBtn deleteBtn">
                                  <img
                                    src="/img/delete.svg"
                                    alt="edit"
                                    className="img-fluid"
                                    onClick={() =>
                                      deleteUrl(item.id || item._id)
                                    }
                                  />
                                </a>
                              </td>
                            </tr>
                          );
                        }
                      })}
                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={"3"}>
            <div className="rightContent">
              <div className="rightActions">
                <button onClick={saveLinks} className="rightLink signalLink">
                  Save List
                  <img
                    src="/img/premium.png"
                    alt="premium"
                    className="img-fluid bTag"
                  />
                </button>
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
