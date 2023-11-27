import React from "react";
import Header from "../components/home/Header";
import "../components/home/home.css";
import Hero from "../components/home/Hero";
import Countnumber from "../components/home/Countnumber";
import ClickSection from "../components/home/ClickSection";
import Update from "../components/home/Update";
import Endless from "../components/home/Endless";
import StartSection from "../components/home/StartSection";
import Pricing from "../components/home/Pricing";
import Faqs from "../components/home/Faqs";
import Testimonials from "../components/home/Testimonials";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Countnumber />
      <ClickSection />
      <Update />
      <Endless />
      <StartSection />
      <Pricing />
      <Faqs />
      <Testimonials />
    </>
  );
}

export default Home;
