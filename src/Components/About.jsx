import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.aboutSection} id="about">
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
          <div className={styles.skillIcon}>
            <i className="devicon-figma-plain colored"></i>
          </div>
          <div className={styles.skillIcon}>
            <i className="devicon-react-original colored"></i>
          </div>
          <div className={styles.skillIcon}>
            <i className="devicon-cplusplus-plain colored"></i>
          </div>
          <div className={styles.skillIcon}>
            <i className="devicon-nodejs-plain colored"></i>
          </div>
          <div className={styles.skillIcon}>
            <i className="devicon-webpack-plain colored"></i>
          </div>
          <div className={styles.skillIcon}>
            <i className="devicon-javascript-plain colored"></i>
          </div>
          <div className={styles.skillIcon}>
            <i className="devicon-bootstrap-plain colored"></i>
          </div>
        </div>

        <div className={styles.skillsIconsSecond}>
          <div className={styles.skillIcon}>
            <i className="devicon-npm-original-wordmark colored"></i>
          </div>
          <div className={styles.skillIcon}>
            <i className="devicon-github-original"></i>
          </div>
          <div className={styles.skillIcon}>
            <i className="devicon-illustrator-plain colored"></i>
          </div>
          <div className={styles.skillIcon}>
            <i className="devicon-atom-original colored"></i>
          </div>
          <div className={styles.skillIcon}>
            <i className="devicon-vscode-plain colored"></i>
          </div>
          <div className={styles.skillIcon}>
            <i className="devicon-git-plain colored"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
