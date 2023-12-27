//import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import "../App.css";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footerc">
            <h3>
              Copyright © {new Date().getFullYear()}. All rights are reserved.
               <br/> Author - Aashish Kumar Singh.
            </h3>
           
            <div className="footerc__socials">

                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/aashish-kumar-singh-499241164//"
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
        
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
