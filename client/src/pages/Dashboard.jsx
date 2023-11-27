import React from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Content from "../components/dashboard/Content";
import "../components/dashboard/dashboard.css";

function Dashboard() {
  return (
    <div className="bodyWrapper">
      <Sidebar />
      <Content />
    </div>
  );
}

export default Dashboard;
