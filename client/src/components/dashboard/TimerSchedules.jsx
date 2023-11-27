import React from "react";
import { Dropdown } from "react-bootstrap";

function TimerSchedules() {
  return (
    <section className="scheduleSection">
      <div className="schedulMenu">
        <div className="menuContent">
          <h4 className="title">THURSDAY OCTOBER 16TH</h4>
          <hr />

          <a href="#link" className="schedulBtn">
            Schedule New Timer +
          </a>

          <div className="group">
            <p className="text">Group Name</p>
            <p className="groupName">Super Group</p>
            <p className="text">Timer Type</p>
            <p className="groupName">Activate List</p>

            <img
              src="/img/pointer.png"
              alt="pointer"
              className="img-fluid pointerImage"
            />
          </div>

          <hr />

          <div className="group groupTwo">
            <p className="text">Group Name</p>
            <p className="groupName">Super Group</p>
            <p className="text">Timer Type</p>
            <p className="groupName">Activate List</p>
          </div>

          <hr />
        </div>
      </div>

      <div className="mainSchedule">
        <div className="sectionHeading">
          <h1 className="title">Timer Schedules</h1>
        </div>
        <div className="calendar">
          <div className="months">
            <span className="mon">JAN </span>
            <span className="mon">FEB </span>
            <span className="mon">MAR </span>
            <span className="mon">APR </span>
            <span className="mon">MAY </span>
            <span className="mon">JUN </span>
            <span className="mon">JUL </span>
            <span className="mon">AUG </span>
            <span className="mon">SEPT </span>
            <span className="mon">OCT </span>
            <span className="mon">NOV </span>
            <span className="mon">DEC </span>
          </div>

          <div className="year">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Octobar 2023
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">2023</Dropdown.Item>
                <Dropdown.Item href="#/action-2">2024</Dropdown.Item>
                <Dropdown.Item href="#/action-3">2025</Dropdown.Item>
                <Dropdown.Item href="#/action-1" className="active">
                  2023
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">2024</Dropdown.Item>
                <Dropdown.Item href="#/action-3">2025</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="day">
            <div className="dayHead">
              <span className="dHead">Mo</span>
              <span className="dHead">Tu</span>
              <span className="dHead">We</span>
              <span className="dHead">Th</span>
              <span className="dHead">Fr</span>
              <span className="dHead">Sa</span>
              <span className="dHead">Su</span>
            </div>

            <div className="dayBody">
              <span className="value">01</span>
              <span className="value">02</span>
              <span className="value">03</span>
              <span className="value">04</span>
              <span className="value">05</span>
              <span className="value">06</span>
              <span className="value">07</span>
            </div>
            <div className="dayBody">
              <span className="value">08</span>
              <span className="value">09</span>
              <span className="value">10</span>
              <span className="value">11</span>
              <span className="value">12</span>
              <span className="value">13</span>
              <span className="value">14</span>
            </div>

            <div className="dayBody">
              <span className="value">15</span>
              <span className="value">16</span>
              <span className="value">17</span>
              <span className="value">18</span>
              <span className="value active">19</span>
              <span className="value">20</span>
              <span className="value">21</span>
            </div>
            <div className="dayBody">
              <span className="value">22</span>
              <span className="value">23</span>
              <span className="value">24</span>
              <span className="value">25</span>
              <span className="value">26</span>
              <span className="value">27</span>
              <span className="value">28</span>
            </div>
            <div className="dayBody">
              <span className="value">29</span>
              <span className="value">30</span>
              <span className="value">31</span>
              <span className="value"></span>
              <span className="value"></span>
              <span className="value"></span>
              <span className="value"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="rightlMenu">
        <div className="rightPanel darkPanel">
          <h5 className="title">Scheduled</h5>

          <hr />

          <div className="panelControl">
            <div className="item">
              <p className="cTitle">Group Name</p>
              <a href="#link" className="groupBtn">
                Quad Square
              </a>
            </div>
            <div className="item">
              <p className="cTitle">Timer Type</p>
              <a href="#link" className="groupBtn">
                Activate List
              </a>
            </div>
            <div className="item">
              <p className="cTitle">Day / Time</p>
              <a href="#link" className="groupBtn">
                Tuesday 16/13:00 PM
                <img src="/img/tedit.svg" alt="edit" className="img-fluid" />
              </a>
            </div>

            <div className="panelButtons">
              <a href="#link" className="mainBtn">
                Cancel
              </a>
              <a href="#link" className="mainBtn stopBtn">
                Stop
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TimerSchedules;
