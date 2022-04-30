import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import TourSchedule from "../components/TourSchedule";

const Tour = () => {
  return (
    <div className="tourPage">
      <Navigation />
      <Header page={"tour schedule"} />
      <TourSchedule page={"tour"} />
      <Footer />
    </div>
  );
};

export default Tour;
