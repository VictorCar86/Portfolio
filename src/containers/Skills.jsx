import React from 'react'
import { SiCss3, SiHtml5, SiJavascript, SiReact, SiGit } from 'react-icons/si'
import WebpackIcon from '../assets/images/webpack.png'
import UKFlagIcon from '../components/Icons/UKFlagIcon'
import SpainIcon from '../assets/images/spain.png'
import InfoSection from '../components/InfoSection'

const Skills = () => {
  return (
    <InfoSection title='Skills 👨‍💻'>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum veniam fugit harum at eius doloribus dolore aut laudantium ut fugiat consequatur dolor, ex possimus consequuntur quis earum unde reiciendis magnam.
        </p>
        <h3 className='text-xl font-bold my-3'>Tools:</h3>
        <div className='relative h-auto max-w-3xl mx-auto my-6 font-bold md:text-xl text-center'>
          <ul className='grid sm:grid-cols-3 sm:grid-rows-2 grid-cols-2 grid-rows-3 gap-x-4 gap-y-5 justify-items-center mt-7'>
            <li>
              <SiHtml5 className='w-14 lg:w-20 h-auto mx-auto fill-orange-500' />
              <p>HTML</p>
            </li>
            <li>
              <SiCss3 className='w-14 lg:w-20 h-auto fill-blue-600' />
              <p>CSS3</p>
            </li>
            <li>
              <div className='w-14 lg:w-20 h-auto mx-auto bg-black'>
                <SiJavascript className='w-full h-full fill-yellow-300' />
              </div>
              <p>JavaScript</p>
            </li>
            <li>
              <SiReact className='w-14 lg:w-20 h-auto mx-auto fill-blue-400' />
              <p>React</p>
            </li>
            <li>
              <SiGit className='w-14 lg:w-20 h-auto mx-auto fill-orange-600' />
              <p>Git</p>
            </li>
            <li>
              <img
                className='w-14 lg:w-20 h-auto object-cover mx-auto'
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
            <li className='text-center'>
              <div className='w-9 md:w-14 lg:w-20 mx-auto'>
                <UKFlagIcon />
              </div>
              <p className=' my-2'>English</p>
              <p className='italic text-gray-600'>Intermediate</p>
            </li>
            <li className='text-center'>
              <div className='w-9 md:w-14 lg:w-20 mx-auto'>
                <img className='rounded-full' src={SpainIcon} alt="Spain flag" />
              </div>
              <p className=' my-2'>Spanish</p>
              <p className='italic text-gray-600'>Native</p>
            </li>
          </ul>
        </div>
    </InfoSection>
  )
}

export default Skills