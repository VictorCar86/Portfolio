import React, { useState } from 'react'
import InfoSection from '../components/InfoSection'
import VideoSection from '../components/VideoSection'
import videoSources from '../utils/videoSources'
import useIntersection from '../hooks/useIntersection';
import currentLanguage from '../utils/currentLanguage';
import TextIncludes from '../utils/TextIncludes';

const Projects = () => {

  const [itemsRef, setItemsRef] = useState([])
  itemsRef.forEach(elm => useIntersection(["animate__bounceIn"]).observe(elm))

  const titleLanguage = () => {
    if (currentLanguage.includes('en')){
        return 'Projects 📚'
    }
    if (currentLanguage.includes('es')){
        return 'Projectos 📚'
    }
}

  return (
    <InfoSection title={titleLanguage()} bgColor='bg-cream-400' customId='projects'>
      <p className='max-w-xl mb-1.5'>

        <TextIncludes compare='en-'>
          I've created a lot of projects from little experiments to more complex webpages. If you are curious, check out my Github's profile where I post my most recent projects.
        </TextIncludes>

        <TextIncludes compare='es'>
          He creado muchos proyectos, desde pequeños experimentos hasta páginas web más complejas. Si desea puede consultar mi perfil de Github donde publico mis proyectos más recientes.
        </TextIncludes>

      </p>
      <VideoSection sourceArray={videoSources} itemsRef={setItemsRef} />
    </InfoSection>
  )
}

export default Projects