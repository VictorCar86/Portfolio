import React from 'react'
import { FaRegEnvelope, FaMapMarkerAlt, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

const Home = () => {
  return (
        <section className='flex flex-col-reverse h-screen justify-center items-center gap-10 md:flex-row'>
            <div>
                <h1 className='text-4xl sm:text-5xl font-bold'>Victor Manuel Carreño Peña</h1>
                <h3 className='text-2xl sm:text-3xl my-4 font-bold'>Front-end Developer</h3>
                <p>
                    <FaRegEnvelope className='inline-block w-6 h-6 border-2 border-amber-900 rounded-md p-0.5 mr-3 my-1' />
                    vmanuelcar@hotmail.com
                </p>
                <p>
                    <FaMapMarkerAlt className='inline-block w-6 h-6 border-2 border-amber-900 rounded-md p-0.5 mr-3 my-1' />
                    Bogotá D.C, Colombia
                </p>
                <div className='w-52 mt-3 flex justify-around'>
                    <a href="https://twitter.com/victorcar86_">
                        <FaTwitter className='w-6 h-6 hover:scale-110 transition-transform ease-out' />
                    </a>
                    <a href="https://github.com/VictorCar86">
                        <FaGithub className='w-6 h-6 hover:scale-110 transition-transform ease-out' />
                    </a>
                    <a href="https://www.linkedin.com/in/victorcar86/">
                        <FaLinkedin className='w-6 h-6 hover:scale-110 transition-transform ease-out' />
                    </a>
                </div>
                <div className='ml-9 my-4'>
                    <a href="#">
                        <button className='text-amber-900 font-bold bg-amber-100 border-2 border-amber-600 rounded-2xl px-3 py-1 shadow-md active:scale-105 hover:scale-105 hover:shadow-lg transition-transform ease-out' type='button'>
                            Download CV
                        </button>
                    </a>
                </div>
            </div>
            <div className='w-64 md:w-auto'>
                <img
                    className='border-8 rounded-full border-amber-800 shadow-xl'
                    src="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/assets/images/hero.png"
                    alt="dummy"
                />
            </div>
        </section>
  )
}

export default Home