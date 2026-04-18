import styles from "./About.module.css";
import { motion } from "motion/react";

function About() {
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
      initial={{
        opacity: 0,
        y: -40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        ease: "anticipate",
      }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className={styles.container}>
        <h2 className={`${styles.aboutHeading} lgHeading`}>About</h2>

        <p className={styles.aboutText}>
          A passionate front-end developer with a focus on creating modern,
          responsive, and user-friendly websites. I build clean, efficient code
          with HTML, CSS, Tailwind CSS, and JavaScript (ES6+), while currently
          mastering React.js. I focus on seamless interactions that align with
          user expectations and deliver smooth digital experiences.
        </p>

        <div className={styles.skillsIcons}>
          {primaryIcons.map((iconClass) => (
            <div key={iconClass} className={styles.skillIcon}>
              <i className={iconClass}></i>
            </div>
          ))}
        </div>

        <div className={styles.skillsIconsSecond}>
          {secondaryIcons.map((iconClass) => (
            <div key={iconClass} className={styles.skillIcon}>
              <i className={iconClass}></i>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default About;
