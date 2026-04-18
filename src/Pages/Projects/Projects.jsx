import styles from "./Projects.module.css";
import todoApplicationPicture from "../../Assets/Images/Todo App.avif";

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
          <h2 className={`${styles.projectTitle} textWhite`}>Todo App</h2>

          <div className={styles.projectDescription}>
            <p>
              An interactive todo application demonstrating modern React
              development with real-time progress tracking, smart filters, and
              persistent storage. Features include inline editing, keyboard
              shortcuts, toast notifications, and fully responsive design. Built
              with React hooks and CSS Modules for maintainable, scalable code.
            </p>
          </div>

          <div className={styles.projectLinks}>
            <a
              href="https://github.com/devamin404/Todo-App.git"
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
            <a
              href="https://todo-app-tau-opal-20.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Live Demo of the Project"
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
            </a>
          </div>
        </div>

        <div className={styles.projectImageWrapper}>
          <img
            src={todoApplicationPicture}
            alt="Todo Application interface"
            className={styles.projectImage}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
