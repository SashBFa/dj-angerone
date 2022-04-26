import React, { useEffect, useState } from "react";
import { tourData } from "../data/tour";

const TourSchedule = () => {
  const [mois, setMois] = useState([]);
  const uniqMonth = [...new Set(mois)];
  const [filter, setFilter] = useState(uniqMonth[0]);
  const theDate = (i) => {
    let newDate = new Date(i);
    let date = newDate.getDate();
    let year = newDate.toLocaleString("default", { year: "numeric" });
    let month = newDate.toLocaleString("default", { month: "short" });
    return `${month} ${date}, ${year}`;
  };
  const theMonth = (i) => {
    let newDate = new Date(i);
    let month = newDate.toLocaleString("default", { month: "long" });
    return month;
  };

  useEffect(() => {
    tourData.map((mon) => {
      const newDate = new Date(mon.date);
      const month = newDate.toLocaleString("default", { month: "long" });
      setMois((mois) => [...mois, month]);
      return null;
    });
  }, []);
  const handleFilterTodos = () => {
    if (filter === uniqMonth[1]) {
      return (elements) => theMonth(elements.date) === uniqMonth[1];
    } else if (filter === uniqMonth[2]) {
      return (elements) => theMonth(elements.date) === uniqMonth[2];
    } else {
      return (elements) => theMonth(elements.date) === uniqMonth[0];
    }
  };

  return (
    <div className="tour">
      <h2 className="tour__title">Tour Schedule</h2>

      <div className="tour__boxInput">
        <input
          onChange={(e) => setFilter(e.target.value)}
          id="radio1"
          type="radio"
          name="filtre"
          value={uniqMonth[0]}
          defaultChecked
        />
        <label htmlFor="radio1">{uniqMonth[0]}</label>

        <input
          onChange={(e) => setFilter(e.target.value)}
          id="radio2"
          type="radio"
          name="filtre"
          value={uniqMonth[1]}
        />
        <label htmlFor="radio2">{uniqMonth[1]}</label>
        <input
          onChange={(e) => setFilter(e.target.value)}
          id="radio3"
          type="radio"
          name="filtre"
          value={uniqMonth[2]}
        />
        <label htmlFor="radio3">{uniqMonth[2]}</label>
      </div>
      <div className="tour__display">
        {tourData &&
          tourData.filter(handleFilterTodos()).map((tour, index) => (
            <div key={tour.id} className="tour__card">
              <label>
                <input
                  type="radio"
                  name="tourName"
                  value={tour.id}
                  defaultChecked={index === 0}
                />
                <span></span>
              </label>
              <h5>{theDate(tour.date)}</h5>
              <h4>{tour.space}</h4>
              <p>{tour.description}</p>
              <button>
                buy tickets <i className="fa-solid fa-angles-right"></i>
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TourSchedule;
