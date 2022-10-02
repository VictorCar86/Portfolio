import React from 'react'
import InfoSection from '../components/InfoSection'
import { SiCss3, SiHtml5, SiJavascript, SiReact, SiGit } from 'react-icons/si'
import HtmlImg from '../assets/images/html.webp'
import cssImg from '../assets/images/css.webp'
import jsImg from '../assets/images/js.webp'
import reactImg from '../assets/images/react.webp'
import gitImg from '../assets/images/git.webp'
import webpackImg from '../assets/images/webpack.webp'
import WebpackIcon from '../assets/images/webpack-icon.webp'
import UKFlagIcon from '../components/Icons/UKFlagIcon'
import SpainIcon from '../assets/images/spain.webp'

const Skills = () => {

  const svgStyles = "h-min w-14 lg:w-20 mx-auto animate__animated hover:animate__rubberBand"

  return (
    <InfoSection title='Skills 💻' bgColor='bg-cream-300' customId='skills'>
        <ul className='max-w-xl ml-4 list-disc'>
          <li>Through out last year I've discover a huge amount of technologies in order to create different kind of projects based on their complexity such as SASS, Vue or even Bootstrap.</li>
          <li>So this year I decided to focus my efforts on learning this six tools, but I'm currently learning how to use TailwindCSS and Three.js as well.</li>
          <li>I have been learning English since 2019, and recently I'm trying to improve with resources from Platzi.</li>
        </ul>
        <h3 className='text-xl font-bold my-3'>Tools:</h3>
        <div className='relative h-auto mx-auto my-6 font-bold md:text-xl text-center'>
          <ul className='grid sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 grid-cols-1 grid-rows-6 gap-4 justify-items-center items-center mt-7'>
            <li className='w-full h-48 max-w-sm relative'>
              <div className='absolute right-2 bottom-2 pt-1 bg-white rounded-lg'>
                <SiHtml5 className={`fill-orange-500 ${svgStyles}` }/>
                <p className='mt-1 rounded-lg bg-cream-200'>HTML</p>
              </div>
              <img className='w-full h-full object-cover object-center' src={HtmlImg} alt="Monitor displaying lines of HTML code" />
            </li>
            <li className='w-full h-48 max-w-sm relative'>
              <div className='absolute right-2 bottom-2 pt-1 bg-white rounded-lg'>
                <SiCss3 className={`fill-blue-600 ${svgStyles}` }/>
                <p className='mt-1 rounded-lg bg-cream-200'>CSS3</p>
              </div>
              <img className='w-full h-full object-cover object-center' src={cssImg} alt="Monitor displaying lines of CSS code" />
            </li>
            <li className='w-full h-48 max-w-sm relative'>
              <div className='absolute right-2 bottom-2 pt-1 bg-white rounded-lg'>
                <div className={`bg-black ${svgStyles}`}>
                  <SiJavascript className="w-full h-full fill-yellow-300"/>
                </div>
                <p className='mt-1 rounded-lg bg-cream-200'>JavaScript</p>
              </div>
              <img className='w-full h-full object-cover object-center' src={jsImg} alt="Monitor displaying lines of JavaScript code" />
            </li>
            <li className='w-full h-48 max-w-sm relative'>
              <div className='absolute right-2 bottom-2 pt-1 bg-white rounded-lg'>
                <SiReact className={`fill-blue-400 ${svgStyles}` }/>
                <p className='mt-1 rounded-lg bg-cream-200'>React</p>
              </div>
              <img className='w-full h-full object-cover object-center' src={reactImg} alt="Monitor displaying lines of React code" />
            </li>
            <li className='w-full h-48 max-w-sm relative'>
              <div className='absolute right-2 bottom-2 pt-1 bg-white rounded-lg'>
                <SiGit className={`fill-orange-600 ${svgStyles}` }/>
                <p className='mt-1 rounded-lg bg-cream-200'>Git</p>
              </div>
              <img className='w-full h-full object-cover object-center' src={gitImg} alt="Monitor displaying lines of Git code" />
            </li>
            <li className='w-full h-48 max-w-sm relative'>
              <div className='absolute right-2 bottom-2 pt-1 bg-white rounded-lg'>
                <img
                  className={`object-cover ${svgStyles}`}
                  src={WebpackIcon}
                  alt="Webpack icon"
                />
                <p className='mt-1 rounded-lg bg-cream-200'>Webpack</p>
              </div>
              <img className='w-full h-full object-cover object-center' src={webpackImg} alt="Monitor displaying lines of Webpack code" />
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