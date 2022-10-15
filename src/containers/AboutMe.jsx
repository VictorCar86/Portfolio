import React from 'react'
import InfoSection from '../components/InfoSection'
import mushroom3dImg from '../assets/images/mushroom-3d.webp'
import landscapeImg from '../assets/images/landscape.webp'
import skull3dImg from '../assets/images/skull-3d.webp'
import flowerImg from '../assets/images/flower.webp'

const AboutMe = () => {
  return (
    <InfoSection title="About me 👋" bgColor='bg-cream-200' customId='about'>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-around gap-6'>
        <div>
          <p className='mb-1.5'>I'm a frontend developer with one year building projects of all kinds, passionate about technology and learning.</p>
          <p className='mb-1.5'>My current knowledge was adquired by self-study reading blogs, watching videos and practicing while reading some books.</p>
          <p className='mb-1.5'>The future expectations that I have being a developer are to create great experiences for users, improving people's life solving their problems with technology and create products that can be valuable for clients.</p>
          <p className='mb-1.5'>My favorite hobbies in life are to hike through nature, observe landspaces and discover new places and people along I travel around the world.</p>
          <p className='mb-1.5'>When I have free time usually create 3D models with Blender, I'm not an expert but I enjoy every moment to imagine a curious object. As well as play video games and skate through the city where I live.</p>
        </div>
        <aside className='grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 gap-4 h-[600px] sm:h-96'>
          <img className='w-full h-full object-cover object-center hover:scale-105 transition-transform' src={mushroom3dImg} alt="" />
          <img className='w-full h-full object-cover object-center hover:scale-105 transition-transform' src={skull3dImg} alt="" />
          <img className='w-full h-full object-cover object-center hover:scale-105 transition-transform' src={landscapeImg} alt="" />
          <img className='w-full h-full object-cover object-center hover:scale-105 transition-transform' src={flowerImg} alt="" />
        </aside>
      </div>
    </InfoSection>
  )
}

export default AboutMe