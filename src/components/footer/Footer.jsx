import React from 'react'
import './Footer.css'
import git from '../../images/github.png';
import email from '../../images/email.png';
import linkd from '../../images/linkedin.png';
import quat from '../../images/ArrowSquareOut.png';

// Name
const Name = "John Doe";

//Enter your social media links here
const SocialLinks = [
  {
    linkedin: " ", 
    Github: " ",
    emailID: "mailto: "
  }
]

export default function Footer() {
  return (
    <div className='contact-section outer1'>
        <div className='first1'>
            <a className='links' rel='noreferrer' target='_blank' href={SocialLinks[0].linkedin}> <img className='logos' src={linkd} alt="" /> <span className='link-span'> Linkedin</span></a>
            <a className='links' rel='noreferrer' target='_blank' href={SocialLinks[0].Github}> <img className='logos' src={git} alt="" /> <span className='link-span'>Github</span></a>
            <a className='links' rel='noreferrer' target='_blank' href={SocialLinks[0].emailID}> <img className='logos' src={email}  alt="" /> <span className='link-span'> Email</span></a>
        </div>
        <div className="line"></div>
        <div className='second1'>
            <div className='rights'>
            © Copyright 2023 by {Name} All rights reserved <span className='footer-slash'> |</span>&nbsp;<a className='quatro' href="https://www.quatro.in/"> Created by quatro <img className='quatro-link' src={quat} alt="" /> </a> 
            </div>
        </div>
    </div>
  )
}
