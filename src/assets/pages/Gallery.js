import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { galleryData } from "./../data/gallery";

const Gallery = () => {
  return (
    <div className="gallery">
      <Navigation />
      <Header page={"gallery"} />
      <div className="gallery__display" style={{ marginBottom: "4rem" }}>
        {galleryData &&
          galleryData.map((pict) => (
            <img
              key={pict.id}
              src={pict.img}
              alt="galleryImg"
              style={{ width: "100%", marginTop: "2rem" }}
            />
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
