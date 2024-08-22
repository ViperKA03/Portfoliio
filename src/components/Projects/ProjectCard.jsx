import React from "react";
import projects from "../../data/projects.json";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils.js";
const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
     
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return <li key={id} className={styles.skill}>{skill}</li>;
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link} target="_blank"> Site</a>
        <a href={source} className={styles.link} target="_blank">Source</a>
      </div>
    </div>
  );
};

export default ProjectCard;
