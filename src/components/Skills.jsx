import React from 'react'
import { SiCss3, SiHtml5, SiJavascript, SiReact, SiTailwindcss } from 'react-icons/si'
import UKFlagIcon from './Icons/UKFlagIcon'
import WebpackIcon from '../assets/webpack.webp'

const Skills = () => {
  return (
    <section className='relative my-7 p-7 bg-white rounded-3xl shadow-xl'>
        <h2 className='text-3xl font-bold mb-4'>Skills</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum veniam fugit harum at eius doloribus dolore aut laudantium ut fugiat consequatur dolor, ex possimus consequuntur quis earum unde reiciendis magnam.
            Earum similique quos dolore obcaecati. Ad saepe tenetur, quo molestias quis rerum pariatur enim nemo rem sapiente officia adipisci harum consectetur quasi et ea explicabo eveniet neque id sit fugit.
        </p>
        <div className='relative h-96 w-full mt-6'>
          <ul className='grid grid-flow-col justify-items-center font-bold'>
            <li>
              <SiHtml5 className='w-9 h-9 fill-orange-500' />
              <p>HTML</p>
            </li>
            <li>
              <SiCss3 className='w-9 h-9 fill-blue-600' />
              <p>CSS3</p>
            </li>
            <li>
              <div className='w-9 h-9 mx-auto bg-black'>
                <SiJavascript className='w-full h-full fill-yellow-300' />
              </div>
              <p>JavaScript</p>
            </li>
            <li>
              <SiReact className='w-9 h-9 fill-blue-400' />
              <p>React</p>
            </li>
            <li>
              <SiTailwindcss className='w-9 h-9 mx-auto fill-teal-500' />
              <p>TailwindCSS</p>
            </li>
            <li>
              <img
                className='w-10 h-9 object-cover mx-auto'
                src={WebpackIcon}
                alt="Webpack icon"
              />
              <p>Webpack</p>
            </li>
            <li>
              <div className='w-9 mx-auto'>
                <UKFlagIcon />
              </div>
              <p>English - B2</p>
            </li>
          </ul>
        </div>
    </section>
  )
}

export default Skills