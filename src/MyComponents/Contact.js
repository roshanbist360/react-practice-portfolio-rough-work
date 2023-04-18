import React from 'react'

export default function Contact() {
  let centerPlaceContents={
      height: "85vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
  }

  return (
    <div style={centerPlaceContents}>
       <section id="contact">
          <h1 id="contactHead">Contact ME</h1> 
          <div className="contact">          
            <div className="contactDiv" id="ctn1">
                <h2>Github & Social Medias:</h2>
                <div className="links" id="contactLinks">
                 <div className="myIcon"><a href="https://github.com/roshanbist360/" target="_blank"><i className="fa-brands fa-github" id="gthub"></i></a></div>
                 <div className="myIcon"><a href="https://twitter.com/RoshanBist900" target="_blank"><i className="fa-brands fa-twitter" id="twitter"></i></a></div>
                 <div className="myIcon"><a href="https://www.linkedin.com/in/roshan-bist-027b49177" target="_blank"><i className="fa-brands fa-linkedin" id="lnkdn"></i></a></div>
                 <div className="myIcon"><a href="https://www.facebook.com/roshanbist.roshanbist.3" target="_blank"><i className="fa-brands fa-facebook" id="fb"></i></a></div>
                </div>
            </div>
                
            <div className="contactDiv" id="contact2">
                <a href="tel:9806470952"> <i className="fas fa-phone-alt"></i> <br/>
                <p>9806470952</p> </a>
            </div>
                  
            <div className="contactDiv" id="contact2">
                <a href="mailto:roshanbist900@gmail.com">  <i className="fas fa-envelope"> </i> <br/>
                <p>roshanbist900@gmail.com</p>  </a>
            </div>
          </div>
      </section>
    </div>
  )
}
