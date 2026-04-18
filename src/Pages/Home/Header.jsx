import styles from "./Header.module.css";
import myPic from "../../Assets/Images/My Portfoio Picture.png";

function Header() {
  return (
    <header id="home">
      <nav className="container">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#work">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <section className={`container ${styles.hero}`}>
        <div className={styles.heroContent}>
          <h1 className="mainHeading">Hi! I'm Amin</h1>
          <h2 className="mdHeading">Front End Developer</h2>

          <p>
            A self-driven front-end developer specializing in building
            responsive and performance-optimized web applications. I'm
            passionate about clean code, user-centric design, and creating
            digital solutions that enhance user engagement.
          </p>

          <button className="btn1">Let's Connect</button>
        </div>

        <div className={styles.heroImg}>
          <img src={myPic} alt="My Picture" className="myImg" />
        </div>
      </section>
    </header>
  );
}

export default Header;
