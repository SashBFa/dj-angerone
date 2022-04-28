import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import NextGig from "../components/NextGig";
import { Parallax, Background } from "react-parallax";
import { NavLink } from "react-router-dom";
import Album from "../components/Album";
import Fanbase from "../components/Fanbase";
import TourSchedule from "../components/TourSchedule";
import Partners from "../components/Partners";
import Tickets from "../components/Tickets";
import GalleryHome from "../components/GalleryHome";
import News from "../components/News";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="home">
      <Navigation />
      <Header />
      <NextGig />
      <div className="aboutHome">
        <img
          className="aboutHome__img"
          src="./assets/images/home-dj.jpg"
          alt="about DJ"
        />
        <h2 className="aboutHome__title">About DJ Angerone</h2>
        <p className="aboutHome__p">
          Mike Myers, professionally known as DJ Angerone, is internationally
          acclaimed Progressive House & Trance DJ & musician.
        </p>

        <div className="aboutHome__path">
          <div className="aboutHome__path--left"></div>
          <div className="aboutHome__path--right"></div>
          <p className="aboutHome__comment">
            I try experiment with various music genres in every track that I
            make.
          </p>
        </div>

        <p className="aboutHome__p">
          Since the beginning if his career in 2010, he has already released 5
          EPs on a range of worldwide know labels (Booster Records, DSTRCT
          Recordings etc.) and received a number of music awards.
        </p>
      </div>
      <div className="viewDisco">
        <Parallax strength={100}>
          <Background>
            <div
              className="viewDisco__parallax"
              style={{
                backgroundImage:
                  "-webkit-linear-gradient(top,rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.1)),url(./assets/images/homepage-latest-releases-background.jpg)",
              }}
            />
          </Background>
          <div className="viewDisco__box">
            <h2>Listen to the latest Releases by DJ Angerone</h2>
            <NavLink className="viewDisco__link" to={"/discography"}>
              <button className="button button--big">view discography</button>
            </NavLink>
          </div>
        </Parallax>
      </div>
      <div className="lastestReleases">
        <h2 className="lastestReleases__title">Lastest Releases</h2>
        <p className="lastestReleases__p">
          Here are the most recent singles, EPs and other releases that DJ
          Angerones has worked on. You can stream and buy them on our website
          and a variety of digital store
        </p>
        <Album show={3} />
      </div>
      <Fanbase />
      <TourSchedule />
      <Partners />
      <Tickets />
      <GalleryHome />
      <News />
      <div className="subscribe">
        <Parallax strength={100}>
          <Background>
            <div
              className="subscribe__parallax"
              style={{
                backgroundImage:
                  "-webkit-linear-gradient(top,rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.1)),url(./assets/images/homepage-footer-background.jpg)",
              }}
            />
          </Background>
          <div className="subscribe__box">
            <h2>Subscribe to stay informed</h2>
            <input type="text" placeholder="Your E-mail" />
            <button className="button button--big">subscribe</button>
          </div>
        </Parallax>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
