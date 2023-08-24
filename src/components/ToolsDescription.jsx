import React from 'react'

const ToolsDescription = ({ name = "", children }) => {
  return (
    <li className='group relative w-min max-w-sm h-min hover:scale-105 transition-transform select-none'>
        { children }
        <p className='mt-1 px-1 rounded-lg bg-cream-200'>{name}</p>
    </li>
  )
}

export default ToolsDescription