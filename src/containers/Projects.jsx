import React from 'react'
import InfoSection from '../components/InfoSection'
import VideoSection from '../components/VideoSection'
import videoSources from '../utils/videoSources'

const Projects = () => {
  return (
    <InfoSection title='Projects 📑'>
      <ul className='max-w-xl ml-4 list-disc'>
        <li>I've created at least 21 projects from little experiments to more complex webpage with a lot of features, but in this section I'll show you, in my opinion, the most complete of them.</li>
        <li>If you are curious, check out my Github's profile where I usually post my recent projects.</li>
      </ul>
      <VideoSection sourceArray={videoSources} />
    </InfoSection>
  )
}

export default Projects