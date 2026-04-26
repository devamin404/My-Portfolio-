import styles from "./Contact.module.css";
import { SiMinutemailer } from "react-icons/si";
import { briefcase, mail, location } from "../../Data/assets.js";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeyPot, setHoneyPot] = useState("");
  const [coolDown, setCoolDown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    if (name.trim().length === 0) {
      toast.error("Please enter a valid name!");
      return;
    }

    if (!email.includes(".")) {
      toast.error("Enter a valid email");
      return;
    }

    if (message.length < 10) {
      toast.warning("Enter a valid message...");
    }

    if (honeyPot) {
      return;
    }

    if (isLoading) {
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        toast.success("Message sent!");
        setCoolDown(true);
        setTimeout(() => {
          setCoolDown(false);
        }, 900000);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.log("Full error", err);
        toast.error("Something went wrong. Please try later!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

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
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.h1
        className={styles.contactHeading}
        variants={contactHeadingVariants}
      >
        Let's Connect
      </motion.h1>

      <div className={styles.contactWrapper}>
        <div className={styles.contactInfo}>
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
                <img src={mail} alt="Email for clients" />
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
                <span className={styles.oppurtunityBox}>
                  Open to Opportunities
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.contactFormContainer}
          variants={contactFormVariants}
        >
          <form
            className={styles.contactForm}
            onSubmit={sendEmail}
            method="post"
          >
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="your.email@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <input
              type="text"
              name="company"
              autoComplete="off"
              style={{ display: "none" }}
              value={honeyPot}
              onChange={(e) => setHoneyPot(e.target.value)}
            />

            <button
              type="submit"
              className={styles.btnSubmit}
              disabled={isLoading || coolDown}
            >
              <SiMinutemailer size={"30px"} />
              <span>
                {isLoading
                  ? "Sending..."
                  : coolDown
                    ? "Wait for 15 minutes..."
                    : "Send Message"}
              </span>
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;
