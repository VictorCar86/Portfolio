import React from 'react'
import InfoSection from '../components/InfoSection'
import VideoSection from '../components/VideoSection'
import videoSources from '../utils/videoSources'

const Projects = () => {
  return (
    <InfoSection title='Projects 📑'>
      <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam amet architecto animi harum illo ea, fugit quam minima quia dolorem porro nulla voluptatum iste dignissimos, odit velit sunt earum numquam.
      </p>
      <VideoSection sourceArray={videoSources} />
    </InfoSection>
  )
}

export default Projects