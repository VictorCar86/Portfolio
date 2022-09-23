import React from 'react'

const InfoSection = ({ title = "", children }) => {
  return (
    <section className='max-w-5xl mx-auto my-7 p-7 bg-white rounded-3xl shadow-xl'>
      <h2 className='border-l-4 border-amber-900 mb-4 pl-3 text-3xl font-bold'>{title}</h2>
      { children }
    </section>
  )
}

export default InfoSection