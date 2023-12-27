
import working from "../images/developer.gif";
function AboutMe() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              {/*<img src={WorkingEmoji} alt="emoji" className="work-emoji" />
              <img src={AboutImg} alt="mee" className="img-side__main-img" /> 8 8*/}
            
            <img src={working} alt="mee" className="img-side__main-img" />
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>
                A dedicated Front-end Developer <br /> based in Bihar, India
                📍
              </h4>
              <p>
                I possess an impressive arsenal
                of skills in HTML, CSS, JavaScript, React, Express, and SCSS. I
                excel in designing and maintaining responsive websites that
                offer a smooth user experience. My expertise lies in crafting
                dynamic, engaging interfaces through writing clean and optimized
                code and utilizing cutting-edge development tools and
                techniques. I am also a team player who thrives in collaborating
                with cross-functional teams to produce outstanding web
                applications.
                I am 2021 graduate in Bachelor Of Technology with Computer Science & 
                Engineering major from Guru Ghasidas University, Bilaspur, Chhattisgarh, India. 
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
