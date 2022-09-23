import React from 'react'
import Home from '../containers/Home'
import AboutMe from '../containers/AboutMe'
import Skills from '../containers/Skills'
import Projects from '../containers/Projects'

const MainPage = () => {
  return (
    <>
      <header></header>
      <main className='px-[7%] text-amber-900 bg-orange-100 overflow-hidden'>
          <Home />
          <AboutMe />
          <Skills />
          <Projects />
      </main>
      <footer></footer>
    </>
  )
}

export default MainPage