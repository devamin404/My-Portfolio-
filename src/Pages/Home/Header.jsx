import styles from "./Header.module.css";
import myPic from "../../Assets/Images/My Portfoio Picture.png";
import { motion } from "motion/react";
import NameTyping from "../../Components/NameTyping";
import RoleTyping from "../../Components/RoleTyping";

function Header() {
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
          <h1 className="mainHeading">
            <NameTyping />
          </h1>
          <h2 className="mdHeading">
            <RoleTyping />
          </h2>

          <p>
            A self-driven front-end developer specializing in building
            responsive and performance-optimized web applications. I'm
            passionate about clean code, user-centric design, and creating
            digital solutions that enhance user engagement.
          </p>

          <button className="btn1">
            <a href="#contact">Let's Connect</a>
          </button>
        </motion.div>

        <motion.div className={styles.heroImg} variants={heroImgVariants}>
          <img src={myPic} alt="My Picture" className="myImg" />
        </motion.div>
      </motion.section>
    </header>
  );
}

export default Header;
