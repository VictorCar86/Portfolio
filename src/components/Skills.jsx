import React from 'react'
import { SiCss3, SiHtml5, SiJavascript, SiReact, SiTailwindcss } from 'react-icons/si'

const Skills = () => {
  return (
    <section className='my-7 p-7 bg-white rounded-3xl shadow-xl'>
        <h2 className='text-3xl font-bold mb-4'>Skills</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum veniam fugit harum at eius doloribus dolore aut laudantium ut fugiat consequatur dolor, ex possimus consequuntur quis earum unde reiciendis magnam.
            Earum similique quos dolore obcaecati. Ad saepe tenetur, quo molestias quis rerum pariatur enim nemo rem sapiente officia adipisci harum consectetur quasi et ea explicabo eveniet neque id sit fugit.
        </p>
        <div>
            <SiHtml5 className='inline-block w-48 h-48 fill-orange-500' />
            <SiCss3 className='inline-block w-48 h-48 fill-blue-600' />
            <SiJavascript className='inline-block w-48 h-48 fill-yellow-300 bg-black' />
            <SiReact className='inline-block w-48 h-48 fill-blue-400' />
            <SiTailwindcss className='inline-block w-48 h-48 fill-teal-500' />
        </div>
    </section>
  )
}

export default Skills