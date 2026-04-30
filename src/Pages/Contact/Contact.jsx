import styles from "./Contact.module.css";
import { SiMinutemailer } from "react-icons/si";
import { briefcase, mail, location } from "../../Data/assets.js";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useEffect, useState, useRef } from "react";

function Contact() {
  const formatTime = (timeLeft) => {
    if (timeLeft <= 0) return "00:00";
    const totalSeconds = Math.floor(timeLeft / 1000);
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60);

    const formattedSeconds = seconds.toString().padStart(2, "0");
    return `${minutes} minutes : ${formattedSeconds} seconds`;
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeyPot, setHoneyPot] = useState("");
  const [coolDown, setCoolDown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const timeIntervalRef = useRef(0);

  useEffect(() => {
    const coolDownTime = Number(localStorage.getItem("coolDownTime"));
    if (coolDownTime - Date.now() <= 0) {
      clearInterval(timeIntervalRef.current);
      setTimeLeft(0);
      setCoolDown(false);
      localStorage.removeItem("coolDownTime");
    } else {
      setCoolDown(true);
      timeIntervalRef.current = setInterval(() => {
        setTimeLeft(coolDownTime - Date.now());
      }, 1000);
    }

    return () => {
      clearInterval(timeIntervalRef.current);
    };
  }, []);

  function sendEmail(e) {
    e.preventDefault();
    if (name.trim().length === 0 || name.trim().length < 3) {
      toast.error("Your length should be 3 character minimum!");
      return;
    }

    if (!email.includes("gmail.com")) {
      toast.error("Enter a valid email format! e.g: xyz@gmail.com");
      return;
    }

    if (message.length < 10) {
      toast.warning("Your length should be 10 characters minimum");
      return;
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
        const expiryDuration = 0.5 * 60 * 1000;
        const coolDownTime = Date.now() + expiryDuration;
        localStorage.setItem("coolDownTime", `${coolDownTime}`);
        if (timeIntervalRef.current) {
          clearInterval(timeIntervalRef.current);
        }
        timeIntervalRef.current = setInterval(() => {
          const remainingTime = coolDownTime - Date.now();
          if (remainingTime <= 0) {
            clearInterval(timeIntervalRef.current);
            setTimeLeft(0);
            setCoolDown(false);
            localStorage.removeItem("coolDownTime");
          } else {
            setCoolDown(true);
            setTimeLeft(remainingTime);
          }
        }, 1000);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(() => {
        toast.error("Something went wrong. Please try later!");
        return;
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
                    ? `Wait for ${formatTime(timeLeft)}`
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
