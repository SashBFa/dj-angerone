import React from "react";
import { Parallax, Background } from "react-parallax";
import { NavLink } from "react-router-dom";
import PlayerAudio from "./PlayerAudio";

const Header = (props) => {
  return (
    <header className="header">
      {props.page === "home" ? (
        <Parallax strength={300}>
          <Background>
            <div className="header__parallax header__parallax--home" />
          </Background>
          <div className="header__box header__box--home">
            <h3>New Songs</h3>
            <PlayerAudio />
          </div>
        </Parallax>
      ) : (
        <Parallax strength={300}>
          <Background>
            <div className="header__parallax header__parallax--other" />
          </Background>
          <div className="header__box header__box--other">
            <div className="header__title">
              <h4>{props.page}</h4>
              <div className="header__links">
                <NavLink to={"/"}>
                  <h5 className="header__link">home</h5>
                </NavLink>
                <i className="fa-solid fa-circle"></i>
                <h5 className="header__link header__link--inactive">
                  {props.page}
                </h5>
              </div>
            </div>
          </div>
        </Parallax>
      )}
    </header>
  );
};

export default Header;
