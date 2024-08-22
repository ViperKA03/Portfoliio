import React from "react";
import { getImageUrl } from "../../utils.js";
import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img className={styles.aboutImg } src={getImageUrl("about.jpeg")} alt="" />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("cursor.png")} alt="cursor-icon" />
          
          <div className={styles.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p>
              Developed landing page for pathfinding and visualizer,iNotebook  web based  application and some additional mini-games(Snake and Ladders, Tic-tac-toe)
            </p>
          </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("server.png")} alt="server-icon" />
          
          <div className={styles.aboutItemText}>
            <h3>Backend Developer</h3>
            <p>
             <ul>
              <li>Built servers for CRUD applications using databases like MongoDB and MySQL</li>
              <li>Maintaing backend to ensure smooth usage of application using validators and decrypters</li>
             </ul>
            </p>
          </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("tutor.png")} alt="tutor-icon" />
          
          <div className={styles.aboutItemText}>
            <h3>Internship</h3>
            <p>
              Currently working at Suvidha Foundation as Technical (Web Development) Intern.
            </p>
          </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};

export default About;
