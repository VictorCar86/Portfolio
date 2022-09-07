import React from 'react'
import { FaRegEnvelope, FaMapMarkerAlt, FaTwitter, FaGithub } from 'react-icons/fa'

const Home = () => {
  return (
        <section className='flex h-screen justify-center items-center gap-10'>
            <div>
                <h1 className='text-5xl font-bold'>Victor Manuel Carreño Peña</h1>
                <h3 className='text-3xl my-4 font-bold'>Front-end Developer</h3>
                <p>
                    <FaRegEnvelope className='inline-block w-6 h-6 border-2 rounded-md p-0.5 mr-3 my-1' />
                    vmanuelcar@hotmail.com
                </p>
                <p>
                    <FaMapMarkerAlt className='inline-block w-6 h-6 border-2 rounded-md p-0.5 mr-3 my-1' />
                    Bogotá D.C, Colombia
                </p>
                <a className='inline-block ml-12 mt-4' href="https://twitter.com/victorcar86_">
                    <FaTwitter className='w-6 h-6' />
                </a>
                <a className='inline-block ml-12 mt-4' href="https://github.com/VictorCar86">
                    <FaGithub className='w-6 h-6' />
                </a>
            </div>
            <div>
                <img
                    className='border-4 rounded-3xl'
                    src="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/assets/images/hero.png"
                    alt="dummy"
                />
            </div>
        </section>
  )
}

export default Home