import React from "react";
import { Container } from "react-bootstrap";

function StartSection() {
  return (
    <section className="startSection">
      <Container>
        <div className="sectionHeading">
          <h1 className="title">
            You never have to create invitation or <br />
            giveaways <span>links</span> the old way again.
          </h1>
        </div>

        <div className="startBtn">
          <a href="#link" className="mainBtn">
            Start Now
          </a>
        </div>
      </Container>
    </section>
  );
}

export default StartSection;
