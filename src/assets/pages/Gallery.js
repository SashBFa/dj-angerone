import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

const Gallery = () => {
  return (
    <div className="gallery">
      <Navigation />
      <Header page={"gallery"} />
      <Footer />
    </div>
  );
};

export default Gallery;
