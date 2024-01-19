import ProBox from "./ProBox";
import disney2 from "../images/disney2.jpg"

function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>projects</p>
            <h3>Each project is a learning of development 🧩</h3>
            <div className="projects-grid">
              <ProBox
                title="Disney Clone "
                img = {disney2}
                date="(May 2023)"
                description="Disney webApp clone using react, vite, tailwind-css
                . Created the home page, navigation bar, recommended trending movies
               poster on slider using 'TheMovieDb' API endpoints  "
                techno1="React"
                techno2="TailwindCSS"
                code="https://github.com/ashdude14/disney-clone"
                demo="https://disney-clone-mu-three.vercel.app/"
                scrollY="-50%"
                icon="📺"
              />    

  

               <ProBox
                title="NETFLIX CLONE"
                img = {"image"}
                date="(JUL 2023)"
                description="NetFlix clone using React,  Tailwind-CSS, FireBase.
                Componets that we completed -
                created a login/signup page to authenticate user with the help of
                fireBase. Created a Home page, Navigation bar, and dynamic 
                poster recommendations using TheMovieDB API endpoints.[updating(live) soon!]"
                techno1="React & FireBase"
                techno2="Tailwind-CSS"
                code="https://github.com/ashdude14/netflix-clone"
                demo="https://github.com/ashdude14/netflix-clone"
                scrollY="-50%"
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
