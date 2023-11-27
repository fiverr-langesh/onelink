import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <section className="sideMenu">
      <div className="userProfile">
        <img src="/img/userPic.jpeg" alt="userImage" className="img-fluid" />
        <h5 className="username">Welcome! John</h5>
      </div>

      <div className="ytVideo">
        <iframe
          src="https://www.youtube.com/embed/8gLW-SMyxrw?si=C9Sx4jcobrgZqFOB"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="sideLinks">
        <Link to="/" className="sideLink">
          <img
            src="/img/dashboard.png"
            alt="dashboard"
            className="img-fluid icon"
          />
          Analytics
        </Link>
        <Link to="/list" className="sideLink active">
          <img src="/img/list.png" alt="dashboard" className="img-fluid icon" />
          List
          <img
            src="/img/premium.png"
            alt="dashboard"
            className="img-fluid premium"
          />
        </Link>
        <a href="#link" className="sideLink">
          <img
            src="/img/Schedule.png"
            alt="dashboard"
            className="img-fluid icon"
          />
          Schedule
          <img
            src="/img/premium.png"
            alt="dashboard"
            className="img-fluid premium"
          />
        </a>
      </div>

      <div className="groups">
        <img
          src="/img/premium.png"
          alt="dashboard"
          className="img-fluid premiumBtn"
        />
        <div className="gHeading">
          <div className="mainTitle">
            <p className="title">Groups</p>
            <Link to="/addgroup" className="plusBtn">
              <img src="/img/plus.svg" alt="plus" />
            </Link>
          </div>
          <a href="#link" className="groupBtn">
            <img src="/img/groups.svg" alt="group" />
          </a>
        </div>

        <div className="groupLink">
          <p className="name">Group 1</p>
          <div className="groupIcons">
            <a href="#" className="actionBtn editBtn">
              <img src="/img/edit.svg" alt="group" className="img-fluid" />
            </a>
            <a href="#" className="actionBtn deleteBtn">
              <img src="/img/delete.svg" alt="group" className="img-fluid" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
