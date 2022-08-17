import React from 'react'
import './Project.css'
import avatar from '../Components/avatar.jpeg'



function home() {
  return (
    
    <>
     <div className='title-header'>
        <h1>
          Hello I'm a fullstack developer based in Nigeria
          <h2>
        Hello I'm a fullstackdeveloper based in Nigeria
        </h2>
        </h1>
        <h2>
        Hello I'm a fullstack developer based in Nigeria
        </h2>
      </div>
      <img src={ avatar } className='dot-pic' alt=""/>
      <div className='heading'>
        <h2 className='bio-header'>Bio</h2>
        <div className='bd-container'>
          <span className='md1'>1992</span>
          Born in Lagos, Nigeria
        </div>
        <div className='bd-container'>
          <span className='md1'>2019</span>
          Graduated from the Federal University of Agriculture, Abeokuta with a degre in Forestr Rource Management
        </div>
        <div className='bd-container'>
          <span className='md1'>2020</span>
          Completed my youth Service Programme (NYSC)
        </div>
        <div className='bd-container'>
          <span className='md1'>2021</span>
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
        <a href='https://github.com/emarkees' target='_blank'>@emarkees</a>
        </li>
       
      </div>
     
    </>
     

    
    
  )
}

export default home