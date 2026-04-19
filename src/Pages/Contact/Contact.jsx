import styles from "./Contact.module.css";
import briefcase from "../../Assets/Icons/briefcase.png";
import email from "../../Assets/Icons/email.png";
import location from "../../Assets/Icons/location.png";
import { SiMinutemailer } from "react-icons/si";
import { motion } from "motion/react";

function Contact() {
  const contactSecVariants = {
    hidden: { opacity: 0, y: -40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const contactHeadingVariants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const contactDescriptionVariants = {
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

  const contactFormVariants = {
    hidden: { opacity: 0, x: 30 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
  };

  const contactDetailsVariant = {
    hidden: { opacity: 0, x: -30 },
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
      className={`${styles.contactSection} container`}
      id="contact"
      variants={contactSecVariants}
      initial="hidden"
      whileInView="show"
    >
      <motion.h1
        className={styles.contactHeading}
        variants={contactHeadingVariants}
      >
        Let's Connect
      </motion.h1>

      <div className={styles.contactWrapper}>
        <div className={styles.contactInfo}>
          <motion.h3
            className={styles.infoHeading}
            variants={contactHeadingVariants}
          >
            Get In Touch
          </motion.h3>
          <motion.p
            className={styles.infoDescription}
            variants={contactDescriptionVariants}
          >
            I'm currently open to freelance opportunities, collaboration
            projects, and internship positions. Whether you have a web project
            in mind or want to discuss front-end development, I'd love to
            connect!
          </motion.p>

          <motion.div
            className={styles.contactDetails}
            variants={contactDetailsVariant}
          >
            <div className={styles.detailItem}>
              <div className={styles.iconBox}>
                <img src={email} alt="Email for clients" />
              </div>
              <div className={styles.detailText}>
                <a href="mailto:devamin404@gmail.com">devamin404@gmail.com</a>
              </div>
            </div>

            <div className={styles.detailItem}>
              <div className={styles.iconBox}>
                <img src={location} alt="" />
              </div>
              <div className={styles.detailText}>
                <span>Lahore, Punjab, Pakistan</span>
              </div>
            </div>

            <div className={styles.detailItem}>
              <div className={styles.iconBox}>
                <img src={briefcase} alt="" />
              </div>
              <div className={styles.detailText}>
                <span>Open to Opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.contactFormContainer}
          variants={contactFormVariants}
        >
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="How can I help you?"
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.btnSubmit}>
              <SiMinutemailer size={"30px"} />
              <span>Send Message</span>
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;
