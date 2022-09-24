import React from 'react'
import InfoSection from '../components/InfoSection'
import mushroomImg from '../assets/images/mushroom.webp'

const AboutMe = () => {
  return (
    <InfoSection title="About me 👋">
      <div className='grid grid-cols-1 md:grid-cols-2 justify-around gap-6'>
        <ul className='ml-4 list-disc'>
            <li>I'm a frontend developer with one year building projects of all kinds, passionate about technology and learning.</li>
            <li>My current knowledge was adquired by self-study reading blogs, watching videos and practicing while reading some books.</li>
            <li>My expectations being a developer are to create great experiences for users, improving people's life solving their problems with technology and create products that can be valuable for clients.</li>
            <li>My passions in life are to hike through nature, observe landspaces and discover new places and people along I travel around the World.</li>
        </ul>
        <img className='mx-auto' src={mushroomImg} alt="Orange tall mushroom" />
      </div>
    </InfoSection>
  )
}

export default AboutMe