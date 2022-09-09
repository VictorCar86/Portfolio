import React from 'react'
import { SiCss3, SiHtml5, SiJavascript, SiReact, SiTailwindcss } from 'react-icons/si'
import UKFlagIcon from './Icons/UKFlagIcon'

const Skills = () => {
  return (
    <section className='relative my-7 p-7 bg-white rounded-3xl shadow-xl'>
        <h2 className='text-3xl font-bold mb-4'>Skills</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum veniam fugit harum at eius doloribus dolore aut laudantium ut fugiat consequatur dolor, ex possimus consequuntur quis earum unde reiciendis magnam.
            Earum similique quos dolore obcaecati. Ad saepe tenetur, quo molestias quis rerum pariatur enim nemo rem sapiente officia adipisci harum consectetur quasi et ea explicabo eveniet neque id sit fugit.
        </p>
        <div className='grid grid-cols-3 justify-items-center relative h-96 w-full mt-6 animate-[spin_3s_linear_infinite]'>
            <div className='w-1/4 h-48 animate-[minus-spin_3s_linear_infinite]'>
              <SiHtml5 className='h-full w-full fill-orange-500' />
            </div>
            <div className='w-1/4 h-48 animate-[minus-spin_3s_linear_infinite]'>
              <SiCss3 className='h-full w-full fill-blue-600' />
            </div>
            <div className='w-1/4 h-48 animate-[minus-spin_3s_linear_infinite]'>
              <SiJavascript className='h-full w-full fill-yellow-300' />
            </div>
            <div className='w-1/4 h-48 animate-[minus-spin_3s_linear_infinite]'>
              <SiReact className='h-full w-full fill-blue-400' />
            </div>
            <div className='w-1/4 h-48 animate-[minus-spin_3s_linear_infinite]'>
              <SiTailwindcss className='h-full w-full fill-teal-500' />
            </div>
            <div className='relative w-1/4 h-48 text-center animate-[minus-spin_3s_linear_infinite]'>
              <UKFlagIcon />
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-1 rounded-lg text-white font-bold bg-blue-900'>
                <p>English</p>
                <p>B2</p>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Skills