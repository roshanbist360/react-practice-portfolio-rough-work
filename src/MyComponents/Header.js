import React from 'react'
import {Link} from 'react-router-dom'

export default function Header(props) {         
  return (
    <>
      <section className="sectionHome" id="home">
      	<div className="main">
      		<div className="header">
      			<div className="portfolio_logo">
                    <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-portfolio-web-development-flaticons-flat-flat-icons.png" alt='logo'/>
      				<span>Portfolio</span>
      			</div>

      			<div className="menus">
              <Link to="/">Home </Link>
      			  <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
      			</div>
               
               {/* <!--======== mobile responsive menu starts==========--> */}
               <div className="menuBar" onClick={props.menuControl}>
                    <div className="bar1" id="bar1"></div> <div className="bar2" id="bar2"></div> 
                    <div className="bar3" id="bar3"></div>
               </div>

                <div id="mobileMenu" onClick={props.menuControl}>
                    <div className="menus portfolio_logo" id="mobMenuList">
                        <div className="logo2">
                            <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-portfolio-web-development-flaticons-flat-flat-icons.png" alt='logo2'/>
                        </div>
    
      			    	<Link to="/"><img src="https://img.icons8.com/material-outlined/20/ffffff/home--v2.png" alt='home-icon'/> Home</Link>

      			      <Link to="/about"><img src="https://img.icons8.com/material-outlined/20/ffffff/about.png" alt='about-icon'/> About</Link>

                  <Link to="/projects"><img src="https://img.icons8.com/material-outlined/20/ffffff/project.png" alt='projects-icon'/> Projects</Link>

                  <Link to="/contact"><img src="https://img.icons8.com/material-outlined/20/ffffff/contact-card.png" alt='contact-icon'/> Contact</Link>
      			    </div>
      		    </div>
      		</div>
            {/* <!-- =======end of mobile responsive menu========== --> */}

      	</div>
      </section>

    </>
  )
}
