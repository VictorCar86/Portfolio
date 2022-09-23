import React from 'react'
import {
    FaRegEnvelope,
    FaMapMarkerAlt,
    FaTwitter,
    FaGithub,
    FaLinkedin
} from 'react-icons/fa'
import profileImg from "../assets/images/profile.webp"

const Home = () => {
  return (
        <section className='flex flex-col-reverse h-screen justify-center items-center gap-10 md:flex-row'>
            <div>
                <h1 className='text-4xl sm:text-5xl font-bold text-center md:text-left'>Victor Manuel Carreño Peña</h1>
                <h3 className='text-2xl sm:text-3xl my-4 font-bold text-center md:text-left'>Front-end Developer</h3>
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
                <div className='ml-0 md:ml-9 my-4 text-center md:text-left'>
                    <a href="#">
                        <button className='text-amber-900 font-bold bg-amber-100 border-2 border-amber-600 rounded-2xl px-3 py-1 shadow-md active:scale-105 hover:scale-105 hover:shadow-lg transition-transform ease-out' type='button'>
                            Download CV
                        </button>
                    </a>
                </div>
            </div>
            <div className='relative w-64 md:w-auto rounded-full z-0 backgroundMainImage'>
                <img className='absolute top-0 rotate-45 -z-10 scale-[1.60]' src="https://imgs.search.brave.com/RX8vEePswpP6RnPLuls81TpLiAWgu_8IadXrkyfN6A8/rs:fit:1200:1200:1/g:ce/aHR0cDovL3B1cmVw/bmcuY29tL3B1Ymxp/Yy91cGxvYWRzL2xh/cmdlL3B1cmVwbmcu/Y29tLWF1dHVtbi1s/ZWFmbmF0dXJldHJl/ZWxlYWZsZWF2ZXNh/dXR1bW4tOTYxNTI0/Njc2ODU3cTVmdWou/cG5n" alt="xd" />
                <img
                    className='w-11/12 m-[4%] rounded-full shadow-xl'
                    src={profileImg}
                    alt="Profile picture of Victor Carreño"
                />
            </div>
        </section>
  )
}

export default Home