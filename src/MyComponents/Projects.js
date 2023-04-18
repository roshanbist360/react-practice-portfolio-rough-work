import React from 'react'

export default function Projects() {
  return (
    <div>
       <section className="myProjects" id="myProjects">
          <div className="projects">
              <div className="project">
                  <div className="projectLogo">
                       <img src="projectLogos/logo2.png" alt="Helloprogrammers Logo"/>
                  </div>
                  <div className="projectInfo">
                       <h3 className="projectText1">Hello Programmers</h3>
                       <p className="projectText2">The Simple Note based personal website design practice.</p>
                       <a href="https://roshanbist360.github.io/hepropro/" target="_blank"><span>View Project</span></a>
                  </div>
              </div>

              <div className="project">
                  <div className="projectLogo">
                       <img src="projectLogos/logoJC.png" alt="JC Logo"/>
                  </div>
                  <div className="projectInfo">
                       <h3 className="projectText1">J&C Enterprise</h3>
                       <p className="projectText2">Second Practice Project during internship adding some bootstrap.</p>
                       <a href="https://roshanbist360.github.io/AutoTech/" target="_blank"><span>View Project</span></a>
                  </div>
              </div>
              
              <div className="project">
                  <div className="projectLogo">
                       <img src="projectLogos/icon.png" alt="Note Junction Logo"/>
                  </div>
                  <div className="projectInfo">
                       <h3 className="projectText1">Note Junction</h3>
                       <p className="projectText2">Personal website hello programmers modified to Note Junction.</p>
                       <a href="https://roshanbist360.github.io/NoteJunction/" target="_blank"><span>View Project</span></a>
                  </div>
              </div>

              <div className="project">
                  <div className="projectLogo">
                       <img src="projectLogos/XeOne.jpeg" alt="XeOne Logo"/>
                  </div>
                  <div className="projectInfo">
                       <h3 className="projectText1">XeOne</h3>
                       <p className="projectText2">The XeOne theme found online was cloned using html css js and bootstrap.</p>
                       <a href="https://roshanbist360.github.io/XeOne/" target="_blank"><span>View Project</span></a>
                  </div>
              </div>

              <div className="project">
                  <div className="projectLogo">
                       <img src="projectLogos/fbImg.svg" alt="Facebook Logo"/>
                  </div>
                  <div className="projectInfo">
                       <h3 className="projectText1">FB Login Clone</h3>
                       <p className="projectText2">Facebook login page cloned with view hide functionality in input field.</p>
                       <a href="https://roshanbist360.github.io/fbLoginClone/" target="_blank"><span>View Project</span></a>
                  </div>
              </div>

              <div className="project">
                  <div className="projectLogo">
                       <img src="projectLogos/alpha.png" alt="Alpha Logo"/>
                  </div>
                  <div className="projectInfo">
                       <h3 className="projectText1">Alpha</h3>
                       <p className="projectText2">My first paid real world live front end project with html css and js.</p>
                       <a href="https://alpha.com.np/" target="_blank"><span>View Project</span></a>
                  </div>
              </div>
          </div>
      </section>
    </div>
  )
}
