import React from "react";
import { NavLink } from "react-router-dom";

const Err = () => {
  return (
    <div className="error">
      <h1>Oops!</h1>
      <h2>404 - PAGE NOT FOUND</h2>
      <p>
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable.
      </p>
      <NavLink to={"/"}>
        <button className="button button--big">home</button>
      </NavLink>
    </div>
  );
};

export default Err;
