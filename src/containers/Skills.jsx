import React from 'react'
import InfoSection from '../components/InfoSection'
import { SiCss3, SiHtml5, SiJavascript, SiReact, SiGit } from 'react-icons/si'
import ToolsDescription from '../components/toolsDescription'
import htmlImg from '../assets/images/html.webp'
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
          <li className='mb-1.5'>Through out last year I've discover a huge amount of technologies in order to create different kind of projects based on their complexity such as SASS, Vue or even Bootstrap.</li>
          <li className='mb-1.5'>So this year I decided to focus my efforts on learning this six tools, but I'm currently learning TailwindCSS and Three.js as well.</li>
          <li className='mb-1.5'>I have been learning English since 2019, and recently I'm trying to improve with resources from Platzi.</li>
        </ul>
        <h3 className='text-xl font-bold my-3'>Tools:</h3>
        <div className='relative h-auto mx-auto my-6 font-bold md:text-xl text-center'>
          <ul className='grid sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 grid-cols-1 grid-rows-6 gap-4 justify-items-center items-center mt-7'>
            <ToolsDescription name='HTML' imgSrc={htmlImg}>
              <SiHtml5 className={`fill-orange-500 ${svgStyles}` }/>
            </ToolsDescription>

            <ToolsDescription name='CSS3' imgSrc={cssImg}>
              <SiCss3 className={`fill-blue-600 ${svgStyles}` }/>
            </ToolsDescription>

            <ToolsDescription name='JavaScript' imgSrc={jsImg}>
              <div className={`bg-black ${svgStyles}`}>
                <SiJavascript className="w-full h-full fill-yellow-300"/>
              </div>
            </ToolsDescription>

            <ToolsDescription name='React' imgSrc={reactImg}>
              <SiReact className={`fill-blue-400 ${svgStyles}` }/>
            </ToolsDescription>

            <ToolsDescription name='Git' imgSrc={gitImg}>
              <SiGit className={`fill-orange-600 ${svgStyles}` }/>
            </ToolsDescription>

            <ToolsDescription name='Webpack' imgSrc={webpackImg}>
              <img
                className={`object-cover ${svgStyles}`}
                src={WebpackIcon}
                alt="Webpack icon"
              />
            </ToolsDescription>
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
              <p className='italic text-amber-700'>Intermediate</p>
            </li>
            <li className='w-24 text-center'>
              <div className='w-9 md:w-14 lg:w-20 mx-auto animate__animated hover:animate__pulse'>
                <img className='h-min w-full rounded-full' src={SpainIcon} alt="Spain flag" />
              </div>
              <p className='my-2'>Spanish</p>
              <p className='italic text-amber-700'>Native</p>
            </li>
          </ul>
        </div>
    </InfoSection>
  )
}

export default Skills