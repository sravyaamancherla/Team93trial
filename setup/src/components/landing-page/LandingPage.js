import React, { Fragment } from "react";
import Features from "./Features";
import Hero from "./Hero";
import Cta from "./Cta";
import Contact from "./Contact";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Cta />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
