import ProBox from "./ProBox";
import disney2 from "../images/disney2.jpg"
import netflix from "../assets/netflix.jpg" ///home/aashish/FullStack/Portfolio/portfolio/src/assets/netflix.png
//import url from "../assets/url.png" 
import url1 from "../assets/url1.jpg" 
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
                title="Disney UI "
                img = {disney2}
                date="(May 2023)"
                description="Disney webApp clone using react, vite, tailwind-css
                . Created the home page, navigation bar, recommended trending movies
               poster on slider using 'TheMovieDb' API endpoints  "
                techno1="React"
                techno2="TailwindCSS"
                code="https://github.com/ashdude14/disney-clone"
                demo="https://disney-clone-mu-three.vercel.app/"
                scrollY="0%"
                icon="📺"
              />    

  

               <ProBox
                title="NETFLIX UI "
                img = {netflix}
                date="(JUL 2023)"
                description="NetFlix clone using React,  Tailwind-CSS, FireBase.
                Componets that we completed -
                created a login/signup page to authenticate user with the help of
                fireBase. Created a Home page, Navigation bar, and dynamic 
                poster recommendations using TheMovieDB API endpoints."
                techno1="React & FireBase"
                techno2="Tailwind-CSS"
                code="https://github.com/ashdude14/netflix-clone"
                demo="https://react-netflix-7f8fe.web.app"
                scrollY="0%"
                icon="📺"
              />      
          
   
          <ProBox
                title="Short URL Generator"
                img = {url1}
                date="(DEC 2023)"
                description="
                URL shortener, comprises a backend server deployed on vercer and frontend. 
                The backend involves creating APIs for various HTTP requests. Backend functionalities include receiving long URLs and generating short ones.
                The frontend provides user interface. 
              "
                techno1="React, Tailwind-Css"
                techno2="NodeJS, MongoDb"
                code="https://github.com/ashdude14/urlShortener"
                demo="https://url-shortener-wwz6.vercel.app/"
                scrollY="-30%"
                icon="🌟"
              />   

        
          <ProBox
                title="DEPLOYMENT PIPELINE"
                img = {"img"}
                date="(DEC 2023)"
                description="This project is about creating deployment link of React
                project using AWS services like s3 for storing static file,
                ecr to register Docker container, ecs to spin the
                container using FARGATE
                Takes github repository url of react project
                and deploy it with url, user can access project using the
                url.
                "
                techno1="NodeJs & AWS"
                techno2="Docker, Redis & Kafka"
                code="https://github.com/ashdude14/deployment-pipeline-webapp"
                demo="https://github.com/ashdude14/deployment-pipeline-webapp"
                scrollY="-76%"
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
