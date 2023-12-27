//import { IconMail, IconMapSearch } from "@tabler/icons-react";
import { FaSearch , FaInstagram,FaEnvelope  } from "react-icons/fa";
function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__content">
            <div className="contact__title">
              <p>contact</p>
              <h3>Eagerly waiting for your response let's connect!👇</h3>
            </div>
            <div className="contact__icons">
              <div className="contact__icon-box">
                <span>
                <FaSearch size={32}  />
                </span>
                <div className="contact__info">
                  <h3>Location</h3>
                  <p>Bihar, India</p>
                </div>
              </div>

              <div className="contact__icon-box">
                <span>
                <FaEnvelope size={32}/>
                </span>
                <div className="contact__info">
                  <h3>Mail</h3>
                  <a href="mailto:ashish.kumar.singh.jee@gmail.com">
                  ashish.kumar.singh.jee@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact__icon-box">
                <span>
                <FaInstagram size={32} color="purple" />
                </span>
                <div className="contact__info">
                  <h3>Instagram</h3>
                  <a href="https://www.instagram.com/ashdude14/">
                   ashdude14
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
