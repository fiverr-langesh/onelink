import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import api from "../../utils/api";

function ListPage() {
  const [lists, setLists] = useState([]);
  const [selectedList, setSelectedList] = useState(null);

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
    
    console.log(res)

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
                  <div className="topNav">
                    <p className="navTitle">List Name</p>
                    <p className="navTitle">Links in List</p>
                    <a
                      href="#"
                      onClick={deleteAllList}
                      className="navTitle deleteBtn"
                    >
                      Delete all
                    </a>
                  </div>
                  <div className="">
                    <table width={"100%"}>
                      <tbody>
                        {lists.map((item) => {
                          return (
                            <tr
                              className="highlight-tr"
                              key={item._id}
                              onClick={() => setSelectedList(item)}
                            >
                              <td>{item.listName}</td>
                              <td>{item.links.length}</td>
                              <td>
                                <button
                                  onClick={() => deleteList(item._id)}
                                  href="#link"
                                  className="tableBtn delete-btn"
                                >
                                  <img
                                    src="/img/tdelete.svg"
                                    alt="edit"
                                    className="img-fluid "
                                    //   onClick={() => deleteUrl(item.id || item._id)}
                                  />
                                </button>
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

export default ListPage;
