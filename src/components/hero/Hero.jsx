import React, { useEffect, useState } from 'react';
import './hero.css';
import Lottie from 'lottie-react'; 
import animationData from '../../images/pratik - scroll[1446].json';
import line from '../../images/Line 3.png';
import linee from '../../images/Line 2.png';
import lineePhoneL from '../../images/Line 3.svg';
import lineePhoneR from '../../images/Line 4.svg';

// enter your name here
const Name = 'John Doe'

// enter your current company here
const CurrCompany = 'Microsoft'

// enter your previous company here
const PrevCompany = 'Google'

const bgData= [
  {
    designation: { // Enter your designation here
      p1: 'Software',
      p2: 'Developer'
    }
  }
]

const Hero = ({ menuOpen }) => {
  
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 480);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <div className="hero-container">
      <h1 className='hero-main'>{bgData[0].designation.p1} <br /> {bgData[0].designation.p2}</h1>
        <div>
        {isMobile && !menuOpen ? ( 
          <p className='hero-sub1 p1'>
            Hi ! I'm<br />
            <span style={{ fontWeight: 'bold' }}>{Name}</span><br /> from
            <span className='fontg' style={{ color: '#0CA4E6' }}> {CurrCompany}</span>
          </p>
        ) : (
          !isMobile && !menuOpen && (
            <p className='hero-sub1 p1'>
              Hi ! my name is <span style={{ fontWeight: "bold" }}>{Name}</span>. I am a {bgData[0].designation.p1 +" "+ bgData[0].designation.p2 } at <span  className='fontg'  style={{ color: '#0CA4E6' }}>@{CurrCompany}</span>
            </p>
          )
        )}
        {!menuOpen && (
          <p className='hero-sub1 p2'>
            Previously <span  className='fontg' style={{ color: '#0CA4E6' }}>Interned <br />@{PrevCompany}</span>
          </p>
          
        )}
        </div>
      </div>
      <div className="hero-container2">
        <div>
          <img className='linee' src={isMobile ? lineePhoneL : line} alt="" />
        </div>
        <div>
          <Lottie className='lottie' animationData={animationData} />
        </div> 
        <div>
          <img className='linee' src={isMobile ? lineePhoneR : linee} alt="" />
        </div>
      </div>
    
    </>
  )
}

export default Hero;
