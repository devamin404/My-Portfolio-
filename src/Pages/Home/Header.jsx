import styles from "./Header.module.css";
import myPic from "../../Assets/Images/My Portfoio Picture.png";
import { motion } from "motion/react";

function Header() {
  const navVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const navLinkVariants = {
    hidden: { opacity: 0, y: -8 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
  };

  const heroContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const heroContentVariants = {
    hidden: { opacity: 0, x: -28 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const heroImgVariants = {
    hidden: { opacity: 0, x: 28, scale: 0.96 },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <header id="home">
      <motion.nav
        className="container"
        variants={navVariants}
        initial="hidden"
        animate="show"
      >
        <motion.a href="#home" variants={navLinkVariants}>
          Home
        </motion.a>
        <motion.a href="#about" variants={navLinkVariants}>
          About
        </motion.a>
        <motion.a href="#work" variants={navLinkVariants}>
          Projects
        </motion.a>
        <motion.a href="#contact" variants={navLinkVariants}>
          Contact
        </motion.a>
      </motion.nav>

      <motion.section
        className={`container ${styles.hero}`}
        variants={heroContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className={styles.heroContent}
          variants={heroContentVariants}
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

        <motion.div className={styles.heroImg} variants={heroImgVariants}>
          <img src={myPic} alt="My Picture" className="myImg" />
        </motion.div>
      </motion.section>
    </header>
  );
}

export default Header;
