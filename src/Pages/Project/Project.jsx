import styles from "./Project.module.css";
import { motion } from "motion/react";

function Project({
  title,
  description,
  image,
  gitHubLink,
  liveLink,
  linkedinLink,
}) {
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

  const projectImageVariants = {
    hidden: { opacity: 0, x: 20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const linkContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const linkItemVariants = {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className={styles.projectCard}>
      <div className={styles.projectContent}>
        <motion.h3
          className={`${styles.projectCategory} textBlue`}
          variants={projectHeadingVariants}
        >
          Featured Projects
        </motion.h3>

        <motion.h2
          className={`${styles.projectTitle} textWhite`}
          variants={projectHeadingVariants}
        >
          {title}
        </motion.h2>

        <motion.div
          className={styles.projectDescription}
          variants={projectDescriptionVariants}
          whileHover={{ scale: 1.05 }}
        >
          <p>{description}</p>
        </motion.div>

        <motion.div
          className={styles.projectLinks}
          variants={linkContainerVariants}
        >
          <motion.a
            href={gitHubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="View GitHub Repository"
            variants={linkItemVariants}
            whileHover={{
              scale: 1.15,
              y: -10,
              rotate: -10,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 1.15, transition: { duration: 0.1 } }}
          >
            <i className="devicon-github-original"></i>
          </motion.a>

          <motion.a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="Connect on LinkedIn"
            variants={linkItemVariants}
            whileHover={{
              scale: 1.15,
              y: -10,
              rotate: -10,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 1.15, transition: { duration: 0.1 } }}
          >
            <i className="devicon-linkedin-plain"></i>
          </motion.a>

          <motion.a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="Live Demo of the Project"
            variants={linkItemVariants}
            whileHover={{
              scale: 1.15,
              y: -10,
              rotate: -10,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 1.15, transition: { duration: 0.1 } }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="22.5"
              viewBox="0 0 576 512"
            >
              <path
                opacity="0.97"
                fill="rgb(173, 174, 176)"
                d="M419.5 96c-16.6 0-32.7 4.5-46.8 12.7-15.8-16-34.2-29.4-54.5-39.5 28.2-24 64.1-37.2 101.3-37.2 86.4 0 156.5 70 156.5 156.5 0 41.5-16.5 81.3-45.8 110.6l-71.1 71.1c-29.3 29.3-69.1 45.8-110.6 45.8-86.4 0-156.5-70-156.5-156.5 0-1.5 0-3 .1-4.5 .5-17.7 15.2-31.6 32.9-31.1s31.6 15.2 31.1 32.9c0 .9 0 1.8 0 2.6 0 51.1 41.4 92.5 92.5 92.5 24.5 0 48-9.7 65.4-27.1l71.1-71.1c17.3-17.3 27.1-40.9 27.1-65.4 0-51.1-41.4-92.5-92.5-92.5zM275.2 173.3c-1.9-.8-3.8-1.9-5.5-3.1-12.6-6.5-27-10.2-42.1-10.2-24.5 0-48 9.7-65.4 27.1L91.1 258.2c-17.3 17.3-27.1 40.9-27.1 65.4 0 51.1 41.4 92.5 92.5 92.5 16.5 0 32.6-4.4 46.7-12.6 15.8 16 34.2 29.4 54.6 39.5-28.2 23.9-64 37.2-101.3 37.2-86.4 0-156.5-70-156.5-156.5 0-41.5 16.5-81.3 45.8-110.6l71.1-71.1c29.3-29.3 69.1-45.8 110.6-45.8 86.6 0 156.5 70.6 156.5 156.9 0 1.3 0 2.6 0 3.9-.4 17.7-15.1 31.6-32.8 31.2s-31.6-15.1-31.2-32.8c0-.8 0-1.5 0-2.3 0-33.7-18-63.3-44.8-79.6z"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className={styles.projectImageWrapper}
        variants={projectImageVariants}
      >
        <img
          src={image}
          alt="Todo Application interface"
          className={styles.projectImage}
        />
      </motion.div>
    </div>
  );
}

export default Project;
