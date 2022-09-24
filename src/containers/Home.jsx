import React, { useState } from 'react'
import {
    FaRegEnvelope,
    FaMapMarkerAlt,
    FaTwitter,
    FaGithub,
    FaLinkedin
} from 'react-icons/fa'
import profileImg from "../assets/images/profile.webp"
import fallImg from "../assets/images/fall.webp"
import cvPdf from '../assets/files/CV - Victor Carreño.pdf'

const Home = () => {
    const [fall, setFall] = useState("")

  return (
        <section className='flex flex-col-reverse h-screen justify-center items-center gap-6 sm:gap-10 md:flex-row'>
            <div>
                <h1 className='text-4xl sm:text-5xl font-bold text-center md:text-left'>Victor Manuel Carreño Peña</h1>
                <h2 className='text-2xl sm:text-3xl my-4 font-bold text-center md:text-left'>Frontend Developer</h2>
                <div className='w-max mx-auto md:mx-0'>
                    <p>
                        <FaRegEnvelope className='inline-block w-6 h-6 border-2 border-amber-900 rounded-md p-0.5 mr-3 my-1' />
                        vmanuelcar@hotmail.com
                    </p>
                    <p>
                        <FaMapMarkerAlt className='inline-block w-6 h-6 border-2 border-amber-900 rounded-md p-0.5 mr-3 my-1' />
                        Bogotá D.C, Colombia
                    </p>
                </div>
                <div className='w-52 mt-3 flex justify-around mx-auto md:mx-0'>
                    <a
                        aria-label="Link to Twitter's profile"
                        href="https://twitter.com/victorcar86_"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter className='w-6 h-6 hover:scale-110 transition-transform ease-out' />
                    </a>
                    <a
                        aria-label="Link to Github's profile"
                        href="https://github.com/VictorCar86"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className='w-6 h-6 hover:scale-110 transition-transform ease-out' />
                    </a>
                    <a
                        aria-label="Link to Linkedin's profile"
                        href="https://www.linkedin.com/in/victorcar86/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className='w-6 h-6 hover:scale-110 transition-transform ease-out' />
                    </a>
                </div>
                <div className='ml-0 md:ml-9 my-4 text-center md:text-left'>
                    <a href={cvPdf} download>
                        <button className='text-amber-900 font-bold bg-amber-100 border-2 border-amber-600 rounded-2xl px-3 py-1 shadow-md active:scale-105 hover:scale-105 hover:shadow-lg transition-transform ease-out' type='button'>
                            Download CV
                        </button>
                    </a>
                </div>
            </div>
            <div className='relative w-64 md:w-auto rounded-full z-0 backgroundMainImage'>
                <img
                    className={`absolute top-0 rotate-45 -z-10 scale-[1.35] -translate-y-4 cursor-pointer ${fall}`}
                    src={fallImg}
                    alt="xd"
                    onClick={() => setFall("animate-fall")}
                />
                <img
                    className='h-[91.666667%] w-11/12 m-[4%] rounded-full shadow-xl'
                    src={profileImg}
                    alt="Profile picture of Victor Carreño"
                />
            </div>
        </section>
  )
}

export default Home