import "../App.css";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import waving from "../assets/waving.jpg";
import"bootstrap/dist/css/bootstrap.min.css";

const skillsIcons = [
  {
    img: "https://skillicons.dev/icons?i=html,css",
    id: 1,
  },
  {
    img: "https://skillicons.dev/icons?i=js,express",
    id: 2,
  },
  {
    img: "https://skillicons.dev/icons?i=react,ts",
    id: 3,
  },
  {
    img: "https://skillicons.dev/icons?i=mysql,mongodb",
    id: 4,
  },
];

function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Full Stack Web Developer</h1>
                <img src={waving} alt="waving_hand" />
                <p>
                  Hi, I am Aashish Kumar Singh. A passionate Full-Stack
                  Developer based in Bihar, India. 📍
                </p>
                <span>
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/aashish-kumar-singh-499241164/"
                  >
                    <FaLinkedin width={32} height={32} />
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/ashdude14"
                  >
                    <FaGithub width={32} height={32} />
                  </a>
                </span>
              </div>

              <div className="hero-img"></div>
            </div>

            {/*  */}
            <div className="skills">
              <p>Tech Stack</p>
              <div className="logos">
                <ul>
                  {skillsIcons.map((icon) => (
                    <li key={icon.id}>
                      <img src={icon.img} alt="skill-icon" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
