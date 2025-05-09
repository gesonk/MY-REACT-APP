import React from 'react';
import "./about.css";
import AboutImg from "../../assets/about.png";
import CV from "../../assets/Geson-Kachappilly-Cv.pdf";
import Info from './Info';


const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About</h2>
        <span className="section__subtitle">My introduction</span>
        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />

            <div className="about__data">
                <Info />
                <p className="about__description">I'm a Frontend Developer with experience in building web applications using React, JavaScript, and CSS. I have a passion for creating user-friendly interfaces and optimizing performance.</p>
                <a download="Geson-Kachappilly-Cv" href={CV}  className="button button--flex">Download CV <i className="uil uil-file-download"></i></a>
            </div>
        </div>
    </section>
  )
}

export default About