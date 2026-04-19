import styles from "./About.module.css";
import { motion } from "motion/react";

function About() {
  const aboutSectionVariants = {
    hidden: { opacity: 0, y: -40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.08,
      },
    },
  };

  const aboutLinksVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        ease: "aniticpated",
      },
    },
  };

  const aboutHeadingVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "aniticipated",
      },
    },
  };

  const aboutDescriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "aniticipated",
      },
    },
  };

  const primaryIcons = [
    "devicon-figma-plain colored",
    "devicon-react-original colored",
    "devicon-cplusplus-plain colored",
    "devicon-nodejs-plain colored",
    "devicon-webpack-plain colored",
    "devicon-javascript-plain colored",
    "devicon-bootstrap-plain colored",
  ];

  const secondaryIcons = [
    "devicon-npm-original-wordmark colored",
    "devicon-github-original",
    "devicon-illustrator-plain colored",
    "devicon-atom-original colored",
    "devicon-vscode-plain colored",
    "devicon-git-plain colored",
  ];

  return (
    <motion.section
      className={styles.aboutSection}
      id="about"
      variants={aboutSectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className={styles.container}>
        <motion.h2
          className={`${styles.aboutHeading} lgHeading`}
          variants={aboutHeadingVariants}
        >
          About
        </motion.h2>

        <motion.p
          className={styles.aboutText}
          variants={aboutDescriptionVariants}
        >
          A passionate front-end developer with a focus on creating modern,
          responsive, and user-friendly websites. I build clean, efficient code
          with HTML, CSS, Tailwind CSS, and JavaScript (ES6+), while currently
          mastering React.js. I focus on seamless interactions that align with
          user expectations and deliver smooth digital experiences.
        </motion.p>

        <div className={styles.skillsIcons}>
          {primaryIcons.map((iconClass) => (
            <motion.div
              key={iconClass}
              className={styles.skillIcon}
              variants={aboutLinksVariants}
              whileHover={{
                scale: 1.07,
                y: -15,
                transition: {
                  duration: 0.08,
                  ease: "easeOut",
                },
              }}
            >
              <motion.i className={iconClass}></motion.i>
            </motion.div>
          ))}
        </div>

        <div className={styles.skillsIconsSecond}>
          {secondaryIcons.map((iconClass) => (
            <motion.div
              key={iconClass}
              className={styles.skillIcon}
              variants={aboutLinksVariants}
              whileHover={{
                scale: 1.07,
                y: -15,
                transition: {
                  duration: 0.08,
                  ease: "easeOut",
                },
              }}
            >
              <i className={iconClass}></i>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default About;
