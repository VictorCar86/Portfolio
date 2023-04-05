import React, { useState } from 'react'
import {
    FaTwitter,
    FaGithub,
    FaLinkedin
} from 'react-icons/fa'
import { SiReact } from 'react-icons/si'
import landscapeImg from "../assets/images/main_landscape.webp"
import profileImg from "../assets/images/profile.webp"
import fallImg from "../assets/images/fall.webp"
import englishCvPdf from '../assets/files/Victor Carreno - Frontend CV - English.pdf'
import spanishCvPdf from '../assets/files/Victor Carreno - Frontend CV - Espanol.pdf'
import currentLanguage from '../utils/currentLanguage'

const Home = () => {
    const [fall, setFall] = useState("");

    return (
        <section className='relative min-h-[640px] h-screen w-full bg-cream-100'>
            <img className='absolute h-screen w-screen object-cover object-bottom sepia mask-deg' src={landscapeImg} alt="Landscape" />
            <div className='min-h-[640px] h-screen w-full flex flex-col-reverse justify-center items-center gap-6 sm:gap-10 md:gap-[8%] xl:gap-10 md:flex-row px-[7%] thin-text bg-transparent animate__zoomIn animate__animated animate__delay' id="home">
                <div>
                    <h1 className='max-w-xs text-center font-bold text-[38px] leading-10 xl:max-w-none md:max-w-sm md:text-5xl md:text-left sm:max-w-none sm:text-[40px]'>Victor Manuel Carreño Peña</h1>
                    <p className='text-2xl sm:text-3xl mb-1.5 mt-2.5 md:mt-3.5 font-bold text-center md:text-left'>
                        {currentLanguage.includes('en') && '💻 Frontend Developer'}
                        {currentLanguage.includes('es') && '💻 Desarrollador Frontend'}
                    </p>
                    <p className='flex items-center gap-2 h-max w-max mx-auto text-2xl text-center font-bold md:mx-0 sm:text-3xl mb-3 md:mb-4 md:text-left'>

                        <SiReact className='inline-block align-bottom p-0.5 rounded-full fill-blue-400 bg-blue-900'/>

                        {currentLanguage.includes('en') && (
                            <span>React Developer</span>
                        )}
                        {currentLanguage.includes('es') && (
                            <span>Desarrollador React</span>
                        )}
                    </p>
                    <div className='flex gap-5 -sm:grid -sm:gap-0 w-max mx-auto md:mx-0 font-medium strong-shadow'>
                        <a
                            className='group block min-w-[106px] hover:font-bold tracking-wider hover:tracking-wide'
                            aria-label="Link to Linkedin's profile"
                            href="https://www.linkedin.com/in/victorcar86/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin className='inline-block w-7 h-7 border-2 border-amber-900 rounded-md p-0.5 mr-3 my-1 bg-cream-100 group-hover:scale-110 transition-transform ease-out' />
                            <span className='align-middle'>LinkedIn</span>
                        </a>
                        <a
                            className='group block min-w-[106px] hover:font-bold tracking-wider hover:tracking-wide'
                            aria-label="Link to Github's profile"
                            href="https://github.com/VictorCar86"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub className='inline-block w-7 h-7 border-2 border-amber-900 rounded-md p-0.5 mr-3 my-1 bg-cream-100 group-hover:scale-110 transition-transform ease-out' />
                            <span className='align-middle'>Github</span>
                        </a>
                        <a
                            className='group block min-w-[106px] hover:font-bold tracking-wider hover:tracking-[0.0115em] '
                            aria-label="Link to Twitter's profile"
                            href="https://twitter.com/victorcar86_"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitter className='inline-block w-7 h-7 border-2 border-amber-900 rounded-md p-0.5 mr-3 my-1 bg-cream-100 group-hover:scale-110 transition-transform ease-out' />
                            <span className='align-middle'>Twitter</span>
                        </a>
                    </div>
                    <a className='md:inline-block table my-4 mx-auto' href={currentLanguage.includes('en') ? englishCvPdf : spanishCvPdf} download>
                        <button className='text-amber-900 font-bold bg-amber-100 border-2 border-amber-600 rounded-2xl px-3 py-1 shadow-md active:scale-105 hover:scale-105 hover:shadow-lg transition-transform ease-out' type='button'>
                            {currentLanguage.includes('en') && 'Download CV'}
                            {currentLanguage.includes('es') && 'Descargar CV'}
                        </button>
                    </a>
                </div>
                <div className='relative w-64 -md:h-64 md:w-auto rounded-full z-0 backgroundMainImage'>
                    <img
                        className={`absolute top-0 rotate-45 -z-10 scale-[1.35] -translate-y-4 cursor-pointer ${fall}`}
                        src={fallImg}
                        alt="Plane image of an autumn leaf"
                        onClick={() => setFall("animate-fall")}
                    />
                    <img
                        className='h-[91.666667%] w-11/12 m-[4%] rounded-full shadow-xl'
                        src={profileImg}
                        alt="Profile picture of Victor Carreño"
                    />
                </div>
            </div>
        </section>
    )
}

export default Home