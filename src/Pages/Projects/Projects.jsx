import styles from "./Projects.module.css";
import { motion } from "motion/react";
import Project from "../Project/Project";
import projectsList from "../../Data/projectsData";

function Projects() {
  const projectSecVariants = {
    hidden: { opacity: 0, y: -40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const projectHeadingVariants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
  };

  const projectDescriptionVariants = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className={`${styles.projectsSection} container`}
      id="work"
      variants={projectSecVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.h1
        className={styles.projectsHeading}
        variants={projectHeadingVariants}
      >
        Recent Work
      </motion.h1>

      <motion.p
        className={styles.projectsDescription}
        variants={projectDescriptionVariants}
      >
        A collection of projects I have worked upon
      </motion.p>

      {projectsList.map((project) => {
        return <Project {...project} key={project.id} />;
      })}
    </motion.section>
  );
}

export default Projects;
