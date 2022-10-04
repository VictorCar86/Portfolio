import React from 'react'

const ToolsDescription = ({ name = "", imgSrc, children }) => {
  return (
    <li className='w-full h-48 max-w-sm relative'>
        <div className='absolute right-2 bottom-2 pt-1 bg-white rounded-lg'>
            { children }
            <p className='mt-1 px-1 rounded-lg bg-cream-200'>{name}</p>
        </div>
        <img className='w-full h-full object-cover object-center' src={imgSrc} alt={`Monitor displaying lines of ${name} code`} />
    </li>
  )
}

export default ToolsDescription