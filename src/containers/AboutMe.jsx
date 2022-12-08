import React from 'react'
import InfoSection from '../components/InfoSection'
import mushroom3dImg from '../assets/images/mushroom-3d.webp'
import landscapeImg from '../assets/images/landscape.webp'
import skull3dImg from '../assets/images/skull-3d.webp'
import flowerImg from '../assets/images/flower.webp'
import currentLanguage from '../utils/currentLanguage'
import TextIncludes from '../utils/TextIncludes'

const AboutMe = () => {

  const titleLanguage = () => {
    if (currentLanguage.includes('en-')){
        return 'About me 👋'
    }
    if (currentLanguage.includes('es-')){
        return 'Sobre mí 👋'
    }
  }

  return (
    <InfoSection title={titleLanguage()} bgColor='bg-cream-200' customId='about'>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-around gap-6'>
        <div>

          <TextIncludes compare='en-'>
            <p className='mb-1.5'>Hi there, I'm Victor, a frontend developer with one year of experience building projects of all kinds in web technologies and infrastructure tools. As well as being able to speak intermediate English.</p>
            <p className='mb-1.5'>My favorite hobbies in life are to hike through nature and observe landscapes, discover new people and places, travel and enjoy around the world</p>
            <p className='mb-1.5'>When I have free time usually create 3D models with Blender, I'm not an expert but I enjoy every moment to imagine an interesting object. As well as play video games and skate through the city where I live.</p>
          </TextIncludes>

          <TextIncludes compare='es-'>
            <p className='mb-1.5'>Hola, soy Victor, desarrollador frontend con un año de experiencia construyendo proyectos de todo tipo en tecnologías web y herramientas de infraestructura. Además de poder hablar inglés intermedio.</p>
            <p className='mb-1.5'>Mis pasatiempos favoritos en la vida son caminar por la naturaleza y observar paisajes, descubrir nuevas personas y lugares, viajar y disfrutar alrededor del mundo.</p>
            <p className='mb-1.5'>Cuando tengo tiempo libre suelo crear modelos 3D con Blender, no soy un experto pero disfruto cada momento imaginando un objeto interesante. Además de jugar videojuegos y patinar por la ciudad donde vivo.</p>
          </TextIncludes>

        </div>
        <aside className='grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 gap-2 h-[600px] sm:h-80'>
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