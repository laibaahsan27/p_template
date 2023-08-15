import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from "react-scroll";
import './navbar.css'
import robot from '../../images/robot logo.png'
import dot from '../../images/DotsThreeOutline.svg'
import mail from '../../images/mail.svg'
import github from '../../images/github.svg'
import linkedin from '../../images/linkedin.svg'
import Hero from '../hero/Hero'

//Enter your resume link here
const ResumeLink = " "

//Enter your social links here
const SocialLinks = [
  {
    linkedin: " ", 
    Github: " ",
    emailID: "mailto: "
  }
]


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    {menuOpen && <div className="overlay"></div>}
      <nav>
        <Link to="/">
          <img src={robot} className='title' alt="" />
        </Link>
        <div className={`menu ${menuOpen ? "rotate-90" : ""}`} 
        onClick={() => setMenuOpen(!menuOpen)}
        >
          <img className='dots' src={dot} alt=""/>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li style={{zIndex: 10}}>
          <ScrollLink
              className='link-spann'
              to="projects-section"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </ScrollLink>
          </li>
          <li>
          <ScrollLink
              className='link-spann'
              to="contact-section"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)} // Close the menu after clicking the link
            >
              Contact
            </ScrollLink>
          </li>
          <li>
            <a className='resumeA' rel='noreferrer' target='_blank' href={ResumeLink}> <button className="resume"> Resume</button></a>
          </li>
          {menuOpen && (
            <li>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
                <a className="openItems" rel='noreferrer' href={SocialLinks[0].linkedin}><img src={linkedin} alt="" /></a> 
                <a className="openItems" rel='noreferrer' href={SocialLinks[0].Github}><img src={github} alt="" /></a> 
                <a className="openItems" rel='noreferrer' href={SocialLinks[0].emailID}><img src={mail} alt="" /></a> 
              </div>
            </li>
            )}
        </ul>
      </nav>
      <Hero menuOpen = {menuOpen}/>
    </>
  );
}

export default Navbar;
