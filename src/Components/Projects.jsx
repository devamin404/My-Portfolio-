import styles from "./Projects.module.css";
import calculatorProject from "../Assets/img/Calculator.png";
function Projects() {
  return (
    <section className={`${styles.projectsSection} container`} id="work">
      <h1 className={styles.projectsHeading}>Recent Work</h1>

      <p className={styles.projectsDescription}>
        A collection of projects I have worked upon
      </p>

      <div className={styles.projectCard}>
        <div className={styles.projectContent}>
          <h3 className={`${styles.projectCategory} textBlue`}>
            Featured Project
          </h3>
          <h2 className={`${styles.projectTitle} textWhite`}>Calculator App</h2>

          <div className={styles.projectDescription}>
            <p>
              Developed a responsive calculator web application using HTML, CSS,
              and JavaScript. The application performs basic arithmetic
              operations including addition, subtraction, multiplication, and
              division. JavaScript is used to handle user inputs and implement
              the calculation logic, while CSS is used to create an intuitive
              and visually appealing interface. This project demonstrates
              fundamental concepts of DOM manipulation and event handling in
              JavaScript.
            </p>
          </div>

          <div className={styles.projectLinks}>
            <a
              href="https://github.com/devamin404/Calculator-Project.git"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="View GitHub Repository"
            >
              <i className="devicon-github-original"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-amin-989269398"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Connect on LinkedIn"
            >
              <i className="devicon-linkedin-plain"></i>
            </a>
          </div>
        </div>

        <div className={styles.projectImageWrapper}>
          <img
            src={calculatorProject}
            alt="Calculator Web Application Interface"
            className={styles.projectImage}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
