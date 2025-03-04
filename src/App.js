import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import MyNav from './components/MyNav'
import Home from './components/Home'
import Footer from './components/Footer'
import Project from './components/Project'
import About from './components/About'
import Middle from './components/Middle'
import TagManager from 'react-gtm-module'
import ReactGA from 'react-ga'
// const tagManagerArgs = {
//   gtmId: 'GTM-WBR4M452',
// }

// TagManager.initialize(tagManagerArgs)

function App() {
  // ReactGA.initialize('G-W7KWZ1ED18')

  ReactGA.initialize('G-W7KWZ1ED18')
  ReactGA.pageview(window.location.pathname + window.location.search)
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-WBR4M452',
    }
    TagManager.initialize(tagManagerArgs)
  }, [])
  return (
    <div className='App'>
      <div>
        <MyNav />

        <Middle />
        <Footer />
      </div>
    </div>
  )
}

export default App
