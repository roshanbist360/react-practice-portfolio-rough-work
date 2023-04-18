import React from 'react'

export default function About() {
  return (
    <div>
       <section className="setionAbout" id="about">
          <div className="about">
              <div className="aboutContent">
                   <div className="icon">
                       <img src="icons/education.png" alt="education icon"/>
                   </div>

                   <div className="aboutText">
                       <h2>My Education:</h2>
                       <p>Bsc.CSIT running at Siddhanath Science Campus, TU<br/>
                          +2 science was from Radiant Higher Secondry School.</p>
                   </div>
              </div>

              <div className="aboutContent">
                   <div className="icon">
                       <img src="icons/experience.png" alt="experience icon"/>
                   </div>

                   <div className="aboutText">
                       <h2>My Experience:</h2>
                       <p>Done internship of 3 months as front end developer.<br/>
                          Completed some projcts during internship and later.</p>
                   </div>
              </div>

              <div className="aboutContent">
                   <div className="icon" id="icon3">
                       <img src="icons/working.png" alt="expertise icon"/>
                   </div>

                   <div className="aboutText">
                       <h2>My Expertise:</h2>
                       <p>I can convert any design or any other design to<br/>
                         clean, responsive and fast HTML, CSS, JS code.</p>
                   </div>
              </div>

              <div className="aboutContent">
                   <div className="icon" id="icon3">
                       <img src="icons/brain.png" alt="my nature icon"/>
                   </div>

                   <div className="aboutText">
                       <h2>My Nature:</h2>
                       <p>I take some more time to complete any project <br/>
                          but try to give best project not just good one.</p>
                   </div>
              </div>
          </div>
      </section>
    </div>
  )
}
