import React, { useState } from 'react'
import InfoSection from '../components/InfoSection'
import VideoSection from '../components/VideoSection'
import videoSources from '../utils/videoSources'
import useIntersection from '../hooks/useIntersection';

const Projects = () => {

  const [itemsRef, setItemsRef] = useState([])
  itemsRef.forEach(elm => useIntersection(["animate__bounceInDown"]).observe(elm))

  return (
    <InfoSection title='Projects 📚' bgColor='bg-cream-400'>
      <ul className='max-w-xl ml-4 list-disc'>
        <li>I've created at least 21 projects from little experiments to more complex webpage with a lot of features, but in this section I'll show you, in my opinion, the most complete of them.</li>
        <li>If you are curious, check out my Github's profile where I usually post my recent projects.</li>
      </ul>
      <VideoSection sourceArray={videoSources} itemsRef={setItemsRef} />
    </InfoSection>
  )
}

export default Projects