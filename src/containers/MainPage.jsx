import React from 'react'
import Home from '../components/Home'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'

const MainPage = () => {
  return (
    <>
        <header></header>
        <main className='px-[7%] lg:px-[14%] bg-orange-100'>
            <Home />
            <AboutMe />
            <Skills />
        </main>
        <footer></footer>
    </>
  )
}

export default MainPage