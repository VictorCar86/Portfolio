import React, { useState } from 'react';
import {
    FaTwitter,
    FaGithub,
    FaLinkedin
} from 'react-icons/fa';
import landscapeImg from "../assets/images/main_landscape.webp";
import landscapeMobileImg from "../assets/images/main_landscape-mobile.webp";
import profileImg from "../assets/images/profile.webp";
import fallImg from "../assets/images/fall.webp";
import currentLanguage from '../utils/currentLanguage';

const Home = () => {
    const [fall, setFall] = useState("");

    return (
        <section className='relative min-h-[640px] h-screen w-full bg-cream-100'>
            <picture>
                <source media="(min-width: 640px)" srcSet={landscapeImg}/>
                <img
                    className='absolute h-screen w-screen object-cover object-bottom sepia mask-deg'
                    src={landscapeMobileImg}
                    alt="Huge landscape with a mountain in the middel and colorful with sepia tones"
                />
            </picture>

            <div className='min-h-[640px] h-screen w-full flex flex-col-reverse justify-center items-center gap-6 sm:gap-10 md:gap-[8%] xl:gap-10 md:flex-row px-[7%] thin-text bg-transparent animate__zoomIn animate__animated animate__delay' id="home">
                <div>
                    <h1 className='relative max-w-xs text-center font-bold text-[38px] leading-10 xl:max-w-none md:max-w-sm md:text-5xl md:text-left sm:max-w-none sm:text-[40px] z-10'>
                        Victor Manuel Carreño Peña
                    </h1>
                    <p className='text-2xl sm:text-3xl mb-1.5 mt-2.5 md:mt-3.5 font-bold text-center md:text-left'>
                        {currentLanguage.includes('en') && '💻 Web Developer'}
                        {currentLanguage.includes('es') && '💻 Desarrollador Web'}
                    </p>
                    <div className='flex gap-5 -sm:grid -sm:gap-0 w-max mx-auto md:mx-0 font-medium strong-shadow'>
                        <a
                            className='group block min-w-[106px] hover:font-bold tracking-wider hover:tracking-[0.028em]'
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
                        {/* <a
                            className='group block min-w-[106px] hover:font-bold tracking-wider hover:tracking-[0.0115em] '
                            aria-label="Link to Twitter's profile"
                            href="https://twitter.com/victorcar86_"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitter className='inline-block w-7 h-7 border-2 border-amber-900 rounded-md p-0.5 mr-3 my-1 bg-cream-100 group-hover:scale-110 transition-transform ease-out' />
                            <span className='align-middle'>Twitter</span>
                        </a> */}
                    </div>
                </div>
                <div className='relative w-64 -md:h-64 md:w-auto rounded-full z-0 backgroundMainImage'>
                    <img
                        className={`absolute top-0 rotate-45 -z-10 scale-[1.35] -translate-y-4 cursor-pointer select-none ${fall}`}
                        onClick={() => setFall("animate-fall")}
                        draggable="false"
                        src={fallImg}
                        alt="Plane image of an autumn leaf"
                    />
                    <img
                        className='h-[91.666667%] w-11/12 m-[4%] rounded-full shadow-xl select-none'
                        draggable="false"
                        src={profileImg}
                        alt="Profile picture of Victor Carreño"
                    />
                </div>
            </div>
        </section>
    )
}

export default Home