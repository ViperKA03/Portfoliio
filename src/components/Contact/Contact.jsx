import React from "react";
import { getImageUrl } from "../../utils.js";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id="contacts" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact </h2>
        <p>Feel free to contact</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:kaustubhagrawal20102003@gmail.com?subject=Inquiry%20from%20Portfolio%20Site&body=Hello%20Kaustubh,%0D%0A%0D%0AI%20am%20reaching%20out%20to%20you%20after%20visiting%20your%20portfolio%20site.%20I%20would%20like%20to%20discuss%20[mention%20the%20topic%20here].%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]">
            {" "}
            <img
              src={getImageUrl("gmail.png")}
              className={styles.img}
              alt="Email-icon"
            />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://discord.gg/7N7BbXfN" target="_blank">
            {" "}
            <img
              className={styles.img}
              src={getImageUrl("discord.png")}
              alt="Email-icon"
            />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/ViperKA03" target="_blank">
            {" "}
            <img
              className={styles.img}
              src={getImageUrl("github.png")}
              alt="Email-icon"
            />
          </a>
        </li>
        <li className={styles.link}>
          <a
            href="https://www.geeksforgeeks.org/user/kaustubhagrax6wn/"
            target="_blank"
          >
            {" "}
            <img
              className={styles.img}
              src={getImageUrl("gfg.png")}
              alt="Email-icon"
            />{" "}
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://leetcode.com/u/Kaustubh_Agrawal/" target="_blank">
            {" "}
            <img
              className={styles.img}
              src={getImageUrl("leetcode.png")}
              alt="Email-icon"
            />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/erkagrawal/" target="_blank">
            {" "}
            <img
              src={getImageUrl("linkedin.png")}
              className={styles.img}
              alt="Email-icon"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
