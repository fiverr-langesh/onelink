import React, { useEffect, useState } from "react";
import { Col, Row, Container ,Modal} from "react-bootstrap";
import api from "../../utils/api";

function ListPage() {
  const [lists, setLists] = useState([]);
  const [selectedList, setSelectedList] = useState(null);
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  useEffect(() => {
    async function getList() {
      const res = await api.get("/link");

      if (res.status === 200) setLists(res.data);
    }

    getList();
  }, []);

  function deleteLink(id) {
    const updatedLinks = selectedList.links.filter((item) => {
      return item._id !== id;
    });

    const res = api.put(`/link/${selectedList._id}`, { links: updatedLinks });

    console.log(res);

    setSelectedList((prev) => ({
      ...prev,
      links: updatedLinks,
    }));
  }

  async function deleteList(id) {
    const updatedLists = lists.filter((item) => {
      return item._id !== id;
    });

    const res = await api.delete(`/link/li/${id}`);

    setLists(updatedLists);
    setSelectedList(null);
  }

  async function deleteAllList() {
    const res = await api.delete("/link/li/all");

    setLists([]);
  }

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
                    <a
                      onClick={deleteAllList}
                      href="#link"
                      className="navTitle deleteBtn"
                    >
                      Delete all
                    </a>
                  </div>

                  <div className="recordTable table-responsive">
                    {!lists.length && (
                      <div className="nodeImage">
                        <img
                          src="/img/notebook.png"
                          alt="notebook"
                          className="img-fluid"
                        />
                        <p className="noteTitle">No Records yet </p>
                      </div>
                    )}
                    <table class="table">
                      <tbody>
                        {lists.map((item) => {
                          return (
                            <tr>
                              <td
                                style={{ cursor: "pointer" }}
                                onClick={() => setSelectedList(item)}
                                className="highlight"
                              >
                                {item.listName}
                              </td>
                              <td
                                style={{ cursor: "pointer" }}
                                onClick={() => setSelectedList(item)}
                                className="highlight"
                              >
                                {item.links.length}
                              </td>
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
                                  <a
                                    onClick={() => deleteList(item._id)}
                                    href="#"
                                    className="tableBtn deleteBtn"
                                  >
                                    <img
                                      src="/img/delete.svg"
                                      alt="edit"
                                      className="img-fluid"
                                    />
                                  </a>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Col>

              <Col lg={"12"}>
                <div className="tableSection tableSectionTwo">
                  {!selectedList && (
                    <div className="nodeImage">
                      <img
                        src="/img/notebook.png"
                        alt="notebook"
                        className="img-fluid"
                      />
                      <p className="noteTitle">No Records yet </p>
                    </div>
                  )}
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
                      {selectedList?.links.map((item) => {
                        if (item.status === "Active") {
                          return (
                            <tr key={item._id}>
                              <td>{item.url}</td>
                              <td>{item.date}</td>
                              <td>{item.status}</td>
                              <td>
                                <a href="#link" className="tableBtn deleteBtn">
                                  <img
                                    src="/img/tdelete.svg"
                                    alt="edit"
                                    className="img-fluid"
                                    onClick={() => deleteLink(item._id)}
                                  />
                                </a>
                              </td>
                            </tr>
                          );
                        }
                      })}
                    </tbody>
                    <tbody className="bodyTwo">
                      {selectedList?.links.map((item) => {
                        if (item.status === "Used") {
                          return (
                            <tr key={item._id}>
                              <td>{item.url}</td>
                              <td>{item.date}</td>
                              <td>{item.status}</td>
                              <td>
                                <a href="#link" className="tableBtn deleteBtn">
                                  <img
                                    src="/img/tdelete.svg"
                                    alt="edit"
                                    className="img-fluid"
                                    onClick={() => deleteLink(item._id)}
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
            <div className="rightContent rightContentTwo">
              {/* <div className="errorContent">
                <img
                  src="/img/error.png"
                  alt="erroImage"
                  className="img-fluid"
                />
                <h5 className="errorTitle">
                  Oops looks like you have no other groups right now
                </h5>
                <p className="text">Let’s fix that by creating a new group</p>
              </div> */}
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
                    Group 1
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

export default ListPage;
