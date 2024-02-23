
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
                A dedicated Full-Stack Developer <br /> based in Bihar, India
                📍
              </h4>
              <p>
                My expertise lies in crafting
                dynamic, engaging interfaces through writing clean and optimized
                code and utilizing cutting-edge development tools and
                techniques. Being a full-stack allows me to not only develop client-facing apps and websites but also develop it with cutting edge backend support.

I specialize in building robust backends that do all the heavy lifting for your app or website. I love designing systems that are light yet powerful, distributed yet synchronized and beautiful yet effective.
                applications.
                
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
