import React from "react";
import Cnavbar from "./Cnavbar";
import Maincontent from "./Maincontent";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Norecord from "./Norecord";
import Addgroup from "./Addgroup";
import ListPage from "./ListPage";

function Content() {
  return (
    <section className="contentSection">
      <Cnavbar />
      <Routes>
        <Route exact path="/" element={<Maincontent />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/addgroup" element={<Addgroup />} />
      </Routes>
    </section>
  );
}

export default Content;
