import React from 'react'

const InfoSection = ({ title = "", bgColor = "", children }) => {
  return (
    <section className={`w-full h-max p-7 ${bgColor}`}>
      <div className='max-w-5xl mx-auto p-7 bg-white rounded-3xl shadow-xl'>
        <h2 className='border-l-4 border-amber-900 mb-4 pl-3 text-3xl font-bold'>{title}</h2>
        { children }
      </div>
    </section>
  )
}

export default InfoSection