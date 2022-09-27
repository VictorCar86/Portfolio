import React from 'react'
import Home from '../containers/Home'
import AboutMe from '../containers/AboutMe'
import Skills from '../containers/Skills'
import Projects from '../containers/Projects'
import Contact from '../containers/Contact'

const MainPage = () => {
  return (
    <>
      <header></header>
      <main className='text-amber-900 bg-cream-100 overflow-hidden'>
          <Home />
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
      </main>
      <footer></footer>
    </>
  )
}

export default MainPage