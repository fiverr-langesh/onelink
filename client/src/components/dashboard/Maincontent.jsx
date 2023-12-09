import React, { useEffect, useState } from "react";
import { Col, Container, Row, Modal } from "react-bootstrap";
import api from "../../utils/api";

function Maincontent() {
  const [state, setState] = React.useState({
    links: [],
    fallbackUrl: "",
    mainLink: {
      type: "lineal",
      value: "",
    },
    id: null,
  });
  const [url, setUrl] = React.useState("");
  const [fallback, setFallback] = useState("");
  const [copied, setCopied] = useState(false);
  const [edit, setEdit] = useState({});

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [restore, setRestore] = useState(false);

  const closeRestore = () => setRestore(false);
  const showRestore = () => setRestore(true);

  const [loop, setloop] = useState(false);

  const closeLoop = () => setloop(false);
  const showLoop = () => setloop(true);

  const [selectedValue, setSelectedValue] = useState("lineal");

  useEffect(() => {
    console.log(state);
  }, [state]);

  useEffect(() => {
    async function getUrl() {
      const res = await api.get("/link/recently-created");

      console.log("res", res.data);

      if (res.data && res.status === 200) {
        setState((prev) => {
          return {
            ...prev,
            links: res.data.links,
            fallbackUrl: res.data.fallbackUrl,
            mainLink: res.data.mainUrl,
            id: res.data._id,
          };
        });

        setFallback(res.data.fallbackUrl);
      }
    }

    getUrl();
  }, []);

  useEffect(() => {
    if (edit.url) {
      setUrl(edit.url);
    }
  }, [edit]);

  async function saveLinks() {
    handleClose();
    const res = await api.post("/link/save", {
      links: state.links,
      fallbackUrl: state.fallbackUrl,
    });

    if (res.status === 200) {
      // alert("Links saved successfully");
      setState((prev) => {
        return {
          ...prev,
          id: res.data._id,
          mainLink: {value: "", type: "lineal"},
        };
      });
    }
  }

  function addUrl(e) {
    e.preventDefault();
    const day = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear() % 100; // Extract last two digits
    const date = `${day}/${month}/${year}`;

    if (edit.id || edit._id) {
      const updatedLinks = state.links.map((item) => {
        if (
          (item.id === edit.id && item.id != undefined) ||
          (item._id === edit._id && item._id !== undefined)
        ) {
          return {
            ...item,
            date,
            url,
          };
        } else {
          return item;
        }
      });

      setState((prev) => ({
        ...prev,
        links: updatedLinks,
      }));

      setEdit({});
      setUrl("");
      return;
    }

    if (url) {
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

  async function generateMainLink() {
    if (!state.id) {
      alert("Please save the list first");
    }

    const res = await api.post("/link/main", {
      type: state.mainLink.type,
      id: state.id,
    });

    if (res.status === 200) {
      alert("Main Link generated successfully");
      setState((prev) => {
        return {
          ...prev,
          mainLink: {
            type: res.data.mainUrl.type,
            value: res.data.mainUrl.value,
          },
        };
      });
    }
  }

  async function customizeMainLink() {
    try {
      const res = await api.put("/link/main/customize", {
        value: state.mainLink.value,
      });

      if (res.status === 200) {
        alert("Main Link customized successfully");
      }
    } catch (e) {
      console.log(e);
      alert(e.response.data.message);
    }
  }

  function copyMainLinkToClipboard(e) {
    e.preventDefault();
    const el = document.createElement("textarea");
    el.value = state.mainLink.value;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  function handleRadioChange(e) {
    const value = e.target.value;

    console.log(value);

    const res = api.put(`/link/${state.id}`, { mainUrl: {type:value,value: state.mainLink.value} });

    console.log(res);

    setState((prev) => {
      return {
        ...prev,
        mainLink: {
          ...prev.mainLink,
          type: value,
        },
      };
    });
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
                  <div className="input-group">
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
                  </div>

                  <div className="formButtons">
                    <button onClick={generateMainLink} className="mainBtn">
                      Generate
                    </button>

                    <div className="redioButtons">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          value="random"
                          checked={state.mainLink.type === "random"}
                          onChange={handleRadioChange}
                        />
                        <label
                          className="form-check-label randomLBL"
                          htmlFor="flexRadioDefault1"
                        >
                          Random Link
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          value="lineal"
                          checked={state.mainLink.type === "lineal"}
                          onChange={handleRadioChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault2"
                        >
                          Lineal Link
                        </label>
                      </div>
                    </div>
                  </div>

                  <form
                    onSubmit={(e) => copyMainLinkToClipboard(e)}
                    className="input-group"
                  >
                    <button
                      onClick={customizeMainLink}
                      className="mainBtn customBtn"
                      type="submit"
                    >
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
                      value={state.mainLink.value}
                      onChange={(e) => {
                        // split the url apart from mainid e.g. https://www.google.com/1234 -> https://www.google.com/
                        let splitted = e.target.value.split("/");
                        const customized =
                          splitted[0] + "//" + splitted[2] + "/";

                        splitted = state.mainLink.value.split("/");
                        const mainUrl = splitted[0] + "//" + splitted[2] + "/";

                        if (customized !== mainUrl) {
                          alert(
                            "You can't change the url only change the id at the end of the url"
                          );
                          return;
                        }

                        console.log(mainUrl);

                        setState((prev) => {
                          return {
                            ...prev,
                            mainLink: {
                              ...prev.mainLink,
                              value: e.target.value,
                            },
                          };
                        });
                      }}
                    />

                    <button className="mainBtn copyBtn">
                      {copied ? "Copied" : "Copy"}
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
                                    onClick={() => setEdit(item)}
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
                <button onClick={handleShow} className="rightLink signalLink">
                  Save List
                  <img
                    src="/img/premium.png"
                    alt="premium"
                    className="img-fluid bTag"
                  />
                </button>
                <button onClick={showRestore} className="rightLink signalLink">
                  Reset
                  <img
                    src="/img/premium.png"
                    alt="premium"
                    className="img-fluid bTag"
                  />
                </button>
                <button className="rightLink">
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
                </button>
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
                <button onClick={showLoop} className="rightLink">
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
                </button>
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

      <Modal show={show} onHide={handleClose} className="groupModel">
        <Modal.Body>
          <h4 className="title">Do you want to save the entire link .</h4>

          <div className="addButtons">
            <a href="#link" className="mainBtn" onClick={handleClose}>
              Cancel
            </a>
            <button
              className="mainBtn saveBtn"
              onClick={() => {
                saveLinks();
              }}
            >
              Yes
            </button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={restore} onHide={closeRestore} className="groupModel">
        <Modal.Body>
          <h4 className="title">
            Do you want to restore the entire link again.
          </h4>

          <div className="addButtons">
            <a href="#link" className="mainBtn" onClick={closeRestore}>
              Cancel
            </a>
            <a href="#link" className="mainBtn saveBtn" onClick={showRestore}>
              Yes
            </a>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={loop} onHide={closeLoop} className="groupModel">
        <Modal.Body>
          <h4 className="title">Do you want to activate the loop options?</h4>

          <div className="addButtons">
            <a href="#link" className="mainBtn" onClick={closeLoop}>
              Cancel
            </a>
            <a href="#link" className="mainBtn saveBtn" onClick={showLoop}>
              Yes
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default Maincontent;
