import styles from "./Header.module.css";
import myPic from "../../Assets/Images/My Portfoio Picture.png";
import { anticipate, motion } from "motion/react";

function Header() {
  return (
    <header id="home">
      <motion.nav
        className="container"
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: "anticipate",
        }}
      >
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#work">Projects</a>
        <a href="#contact">Contact</a>
      </motion.nav>

      <section className={`container ${styles.hero}`}>
        <motion.div
          className={styles.heroContent}
          initial={{
            x: -30,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "anticipate",
          }}
        >
          <h1 className="mainHeading">Hi! I'm Amin</h1>
          <h2 className="mdHeading">Front End Developer</h2>

          <p>
            A self-driven front-end developer specializing in building
            responsive and performance-optimized web applications. I'm
            passionate about clean code, user-centric design, and creating
            digital solutions that enhance user engagement.
          </p>

          <button className="btn1">Let's Connect</button>
        </motion.div>

        <motion.div
          className={styles.heroImg}
          initial={{
            x: 30,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "anticipate",
          }}
        >
          <img src={myPic} alt="My Picture" className="myImg" />
        </motion.div>
      </section>
    </header>
  );
}

export default Header;
