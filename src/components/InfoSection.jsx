import React from 'react'

const InfoSection = ({ title = "", bgColor = "", customId = "", children }) => {
  return (
    <section className={`w-full h-max p-7 -sm:p-4 ${bgColor}`} id={customId}>
      <div className='relative max-w-5xl mx-auto p-7 -sm:py-5 -sm:px-[18px] bg-white rounded-3xl shadow-xl'>
        <span className='sticky inline-block border-l-4 border-amber-900 mb-4 pl-3 text-3xl font-bold z-30'>{title}</span>
        { children }
      </div>
    </section>
  )
}

export default InfoSection