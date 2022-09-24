import React from 'react'
import InfoSection from '../components/InfoSection'
import { SiCss3, SiHtml5, SiJavascript, SiReact, SiGit } from 'react-icons/si'
import WebpackIcon from '../assets/images/webpack.webp'
import UKFlagIcon from '../components/Icons/UKFlagIcon'
import SpainIcon from '../assets/images/spain.webp'

const Skills = () => {

  const svgStyles = "h-min w-14 lg:w-20 mx-auto animate__animated hover:animate__rubberBand"

  return (
    <InfoSection title='Skills 💻'>
        <ul className='max-w-xl ml-4 list-disc'>
          <li>Through out last year I've discover a huge amount of technologies in order to create different kind of projects based on their complexity such as SASS, Vue or even Bootstrap.</li>
          <li>So this year I decided to focus my efforts on learning this six tools, but I'm currently learning how to use TailwindCSS and Three.js as well.</li>
          <li>I have been learning English since 2019, and recently I'm trying to improve with resources from Platzi.</li>
        </ul>
        <h3 className='text-xl font-bold my-3'>Tools:</h3>
        <div className='relative h-auto max-w-3xl mx-auto my-6 font-bold md:text-xl text-center'>
          <ul className='grid sm:grid-cols-3 sm:grid-rows-2 grid-cols-2 grid-rows-3 gap-x-4 gap-y-5 justify-items-center items-center mt-7'>
            <li>
              <SiHtml5 className={`fill-orange-500 ${svgStyles}` }/>
              <p>HTML</p>
            </li>
            <li>
              <SiCss3 className={`fill-blue-600 ${svgStyles}` }/>
              <p>CSS3</p>
            </li>
            <li>
              <div className={`bg-black ${svgStyles}`}>
                <SiJavascript className="w-full h-full fill-yellow-300"/>
              </div>
              <p>JavaScript</p>
            </li>
            <li>
              <SiReact className={`fill-blue-400 ${svgStyles}` }/>
              <p>React</p>
            </li>
            <li>
              <SiGit className={`fill-orange-600 ${svgStyles}` }/>
              <p>Git</p>
            </li>
            <li>
              <img
                className={`object-cover ${svgStyles}`}
                src={WebpackIcon}
                alt="Webpack icon"
              />
              <p>Webpack</p>
            </li>
          </ul>
        </div>
        <h3 className='text-xl font-bold my-3'>Languages:</h3>
        <div className='my-5 font-bold'>
          <ul className='flex justify-evenly'>
            <li className='w-24 text-center'>
              <div className='w-9 md:w-14 lg:w-20 mx-auto animate__animated hover:animate__pulse'>
                <UKFlagIcon />
              </div>
              <p className='my-2'>English</p>
              <p className='italic opacity-70'>Intermediate</p>
            </li>
            <li className='w-24 text-center'>
              <div className='w-9 md:w-14 lg:w-20 mx-auto animate__animated hover:animate__pulse'>
                <img className='h-min w-full rounded-full' src={SpainIcon} alt="Spain flag" />
              </div>
              <p className='my-2'>Spanish</p>
              <p className='italic opacity-70'>Native</p>
            </li>
          </ul>
        </div>
    </InfoSection>
  )
}

export default Skills