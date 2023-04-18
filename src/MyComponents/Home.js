import React from 'react'

export default function Home() {
  return (
    <div>
         <div className="myInfo">
      			<div className="myInfoText">
      				<div className="texts">
      					<span className="text1">Hello I am</span>
      					<span className="text2">Roshan Bist</span>
      					<span className="text3"> <span className="text31">Frontend Developer</span></span> 
      				</div> 
      				<div  id="cvButton"><a href="https://drive.google.com/uc?export=download&id=1naloVo5-jC9K3nExDrMVL7wXBgBZxqff">
                    Download CV</a></div>
      			</div>

      			<div className="myImage">
      				 <img src="roshan.png" alt="My_Image"/>
      			</div>
      		</div>

      		<div className="links">
      			 <div className="myIcon"><a href="https://github.com/roshanbist360/" target="_blank"><i className="fa-brands fa-github"></i></a></div>
      			 <div className="myIcon"><a href="https://twitter.com/RoshanBist900" target="_blank"><i className="fa-brands fa-twitter"></i></a></div>
      			 <div className="myIcon"><a href="https://www.linkedin.com/in/roshan-bist-027b49177" target="_blank"><i className="fa-brands fa-linkedin"></i></a></div>
      			 <div className="myIcon"><a href="https://www.facebook.com/roshanbist.roshanbist.3" target="_blank"><i className="fa-brands fa-facebook"></i></a></div>
      		</div>
    </div>
  )
}