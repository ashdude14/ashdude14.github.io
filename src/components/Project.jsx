import portfolio from "../images/portfolio.png"
import ProBox from "./ProBox";

function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>projects</p>
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className="projects-grid">
              <ProBox
                title="Portfolio Website"
                img = {portfolio}
                date="(February 2023)"
                description="A portfolio website that represents my skill sets and experience. I am using here for demo I will update some more projects like this.."
                techno1="React"
                techno2="SCSS"
                code="https://github.com/ashdude14/ashdude14.github.io/"
                demo="https://ashdude14-github-2o5lsi776-ashdude14s-projects.vercel.app/"
                scrollY="-83%"
                icon="🌐"
              />             
            </div>
          </div>
          <h2 className="new-projects">New projects coming soon.. 🤠</h2> 
        </div>
      </section>
    </>
  );
}

export default Projects;
