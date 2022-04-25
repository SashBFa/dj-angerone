import React from "react";
import { galleryData } from "./../data/gallery";

const GalleryHome = () => {
  return (
    <div className="galleryHome" style={{ margin: "4rem 0 2rem 0" }}>
      {galleryData &&
        galleryData.map((pict) => (
          <img
            key={pict.id}
            src={pict.img}
            alt="galleryImg"
            style={{ width: "100%" }}
          />
        ))}
    </div>
  );
};

export default GalleryHome;
