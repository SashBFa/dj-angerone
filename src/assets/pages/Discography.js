import React from "react";
import Album from "../components/Album";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

const Discography = () => {
  return (
    <div className="discography">
      <Navigation />
      <Header page={"discography"} />
      <Album show={6} />
      <Footer />
    </div>
  );
};

export default Discography;
