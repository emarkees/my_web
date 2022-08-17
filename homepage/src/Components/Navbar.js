import React, { useState}from 'react';
import { Link } from 'react-router-dom';
import avatar from '../Components/avatar.jpeg'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import mypng from '../Components/mypng.png'
function Navbar() {
  return ( 
    <>
      <nav className='navbar'>
     
      <img src={avatar} className='dot' alt="" />
          <Link to='/#' className='nav-title'>
              Adeyemi Emmanuel Olusola
          </Link>
        
          <Link to='/#' className='nav-link'>
              Home<i class="fa fa-home"></i>
              
          </Link>
          <Link to='/Projects' className='nav-link'> Projects
          </Link>
         
      </nav>
      <container className= 'nav-header'>
      <div className='game' >
      <img src={ mypng } alt=""/> 
      </div>
      

        <div className='title-header'>
            <p>
              Hello I'm a fullstack developer based in Nigeria
            </p>              
        </div>
      
          <div className='title-img'>
            <div className='header-li' >
              <div className='head-li1'>
                <h1 >
                  Adeyemi Emmanuel Olusola 
                </h1>
                <p>
                  Digital Visionary ( Developer / Illustrator )
                </p> 
              </div> 
              <img src={ avatar } className='profile-pix' alt=""/>     
            </div>
            <div className='intro'>
              <h3>
                Work
              </h3>
              <p>
              Hello, Adeyemi Emmanuel Olusola. Welcome to my website, I'm a freelance, fullstack developer and "illustrator" based in Lagos, Nigeria. Illustrator is double quoted because I haven't been drawing much lately. I am passionate about problem-solving and design-thinking. When not online, I love to play Football, Watch Soccer.
              </p>
            </div>     


          <img src={ avatar } className='dot-pic' alt=""/>
          <div className='heading'>
            <h2 className='bio-header'>Bio</h2>
            <div className='bd-container'>
              <span className='md1'>1992: </span>
              Born in Lagos, Nigeria
            </div>
          <div className='bd-container'>
            <span className='md1'>2019: </span>
            Graduated from the Federal University of Agriculture, Abeokuta with a degre in Forestr Rource Management
          </div>
          <div className='bd-container'>
            <span className='md1'>2020:</span>
            Completed my youth Service Programme (NYSC)
          </div>
          <div className='bd-container'>
            <p className='md1'>2021:</p>
            Start my first j0b as an Office Assistance  also as an Operation Officer at Bridge Credit Ltd.
          </div>
          <div className='bd-container'>
            <span className='md1'>2022</span>
            Start a career in the Tech World, attending ELEV8 Education which was Sponsored by MicroSoft. 
            Earn a Certificate and a badge as a Software Engineer.
          </div>
          </div>
          </div>
          <div className='heading'>
            <h2 className='bio-header'>Bio</h2>
            <div className='bd-container'>
              <span className='md1'>1992: </span>
              Born in Lagos, Nigeria
            </div>
          <div className='bd-container'>
            <span className='md1'>2019: </span>
            Graduated from the Federal University of Agriculture, Abeokuta with a degre in Forestr Rource Management
          </div>
          <div className='bd-container'>
            <span className='md1'>2020:</span>
            Completed my youth Service Programme (NYSC)
          </div>
          <div className='bd-container'>
            <p className='md1'>2021:</p>
            Start my first j0b as an Office Assistance  also as an Operation Officer at Bridge Credit Ltd.
          </div>
          <div className='bd-container'>
            <span className='md1'>2022</span>
            Start a career in the Tech World, attending ELEV8 Education which was Sponsored by MicroSoft. 
            Earn a Certificate and a badge as a Software Engineer.
          </div>
        </div>
        <div>
          <li className='site'>
          <a href='https://github.com/emarkees' className='fa fa-github' target='_blank'>  @emarkees</a>
          </li>
          <li className='site'>
          <a href='https://facebook.com/holusolah'  className='fa fa-facebook' target='_blank'>  @Holusolah</a>
          </li>
          <li className='site'>
          <a href='https://twitter.com/McMarkees'  className='fa fa-twitter'target='_blank'>  @McMarkees</a>
          </li>
        </div>
      </container>
      
    </>
  )
}

export default Navbar