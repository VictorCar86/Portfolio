import React from 'react'

const ToolsDescription = ({ name = "", imgSrc, children }) => {
  return (
    <li className='group relative w-full max-w-sm h-48 hover:scale-105 transition-transform select-none'>
        <div className='absolute right-2 bottom-2 lg:min-w-[104px] min-w-[84px] pt-1 rounded-lg bg-white/90'>
            { children }
            <p className='mt-1 px-1 rounded-lg bg-cream-200'>{name}</p>
        </div>
        <img className='w-full h-full rounded-md object-cover object-center shadow-[1px_2px_6px_#868686] select-none'
          draggable='false'
          src={imgSrc}
          alt={`Monitor displaying lines of ${name} code`}
        />
    </li>
  )
}

export default ToolsDescription