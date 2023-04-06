import React from 'react'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Project from './Project'
import Resume from './Resume'

const Middle = () => {
  return (
    <div className='bgColor'>
      <div id='Home'>
        <Home />
      </div>

      <div id='About'>
        <About />
      </div>

      <div id='Project'>
        <Project />
      </div>

      {/* <div id='Resume'>
        <Resume />
      </div> */}

      <div id='Contact'>
        <Contact />
      </div>
    </div>
  )
}

export default Middle
