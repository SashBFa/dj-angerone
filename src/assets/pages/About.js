import React from "react";
import Album from "../components/Album";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div className="about">
      <Navigation />
      <Header />
      <Album show={3} />
      <Footer />
    </div>
  );
};

export default About;
