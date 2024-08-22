import React from "react";
import { getImageUrl } from "../../utils.js";
import styles from "./Hero.module.css";
import Textttt from "../Texttttt/Textttt.jsx";
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {/* <h1 className={styles.title} > Hi </h1> */}
        <div className={styles.kuchhText}>
        <Textttt />
        </div>
        <p className={styles.description}>
          Hi, I'm Kaustubh Agrawal! With a strong foundation in C++ programming
          and a passion for web development, I bring a unique blend of skills to
          the table. Proficient in creating efficient and high-performance
          solutions, I excel in both frontend and backend development. 
        </p>
        <a href="#contacts" className={styles.contactBtn}>
          Contact me
        </a>
      </div>
      <img
        src={getImageUrl("toon.jpg")}
        className={styles.heroImg}
        alt="My image"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

      <div></div>
    </section>
  );
};

export default Hero;
