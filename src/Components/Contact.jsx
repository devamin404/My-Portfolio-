import styles from "./Contact.module.css";

function Contact() {
  return (
    <section className={`${styles.contactSection} container`} id="contact">
      <h1 className={styles.contactHeading}>Let's Connect</h1>

      <div className={styles.contactWrapper}>
        <div className={styles.contactInfo}>
          <h3 className={styles.infoHeading}>Get In Touch</h3>
          <p className={styles.infoDescription}>
            I'm currently open to freelance opportunities, collaboration
            projects, and internship positions. Whether you have a web project
            in mind or want to discuss front-end development, I'd love to
            connect!
          </p>

          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <div className={styles.iconBox}>
                <i className="fas fa-envelope"></i>
              </div>
              <div className={styles.detailText}>
                <a href="mailto:devamin404@gmail.com">devamin404@gmail.com</a>
              </div>
            </div>

            <div className={styles.detailItem}>
              <div className={styles.iconBox}>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className={styles.detailText}>
                <span>Lahore, Punjab, Pakistan</span>
              </div>
            </div>

            <div className={styles.detailItem}>
              <div className={styles.iconBox}>
                <i className="fas fa-clock"></i>
              </div>
              <div className={styles.detailText}>
                <span>Open to Opportunities</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contactFormContainer}>
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
              <span>Send Message</span>
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
