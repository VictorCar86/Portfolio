import React from 'react'
import Navbar from '../containers/Navbar'
import Home from '../containers/Home'
import AboutMe from '../containers/AboutMe'
import Skills from '../containers/Skills'
import Projects from '../containers/Projects'
import Contact from '../containers/Contact'

const MainPage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='text-amber-900 overflow-hidden'>
          <Home />
          <AboutMe />
          <Skills />
          <Projects />
      </main>
      <footer className='text-amber-900'>
          <Contact />
      </footer>
    </>
  )
}

export default MainPage