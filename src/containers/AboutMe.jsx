import React from 'react';
import InfoSection from '../components/InfoSection';
import mushroom3dImg from '../assets/images/mushroom-3d.webp';
import landscapeImg from '../assets/images/landscape.webp';
import skull3dImg from '../assets/images/skull-3d.webp';
import flowerImg from '../assets/images/flower.webp';
import currentLanguage from '../utils/currentLanguage';
import TextIncludes from '../utils/TextIncludes';

const AboutMe = () => {

  const titleLanguage = () => {
    if (currentLanguage.includes('en')){
        return 'About me 👋'
    }
    if (currentLanguage.includes('es')){
        return 'Sobre mí 👋'
    }
  }

  return (
    <InfoSection title={titleLanguage()} bgColor='bg-cream-200' customId='about'>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-around gap-6'>
        <div>

          <TextIncludes compare='en'>
            <p className='mb-1.5'>Hi, I'm Victor, a frontend developer with a year of experience in web technologies. Continuously enhancing my skills through self-study and online resources such as blogs, videos, and books.</p>
            <p className='mb-1.5'>Additionally, I'm proficient in English with a intermediate B2 level and actively working to improve it further.</p>
            <p className='mb-1.5'>My favorite hobbies in life are to hike through nature and observe landscapes, discover new people and places, as well as play video games and skate through the city where I live.</p>
          </TextIncludes>

          <TextIncludes compare='es'>
            <p className='mb-1.5'>Hola, soy Victor, un desarrollador frontend con un año de experiencia en tecnologías web. Mejorando continuamente mis habilidades a través del autoaprendizaje y recursos en línea como blogs, videos y libros.</p>
            <p className='mb-1.5'>Además, soy competente en inglés con un nivel B2 intermedio y estoy trabajando activamente para mejorarlo aún más.</p>
            <p className='mb-1.5'>Mis pasatiempos favoritos en la vida son caminar por la naturaleza y observar paisajes, descubrir nuevas personas y lugares, así como jugar videojuegos y patinar por la ciudad donde vivo.</p>
          </TextIncludes>

        </div>
        <aside className='grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 gap-2 h-[600px] sm:h-80'>
          <img className='w-full h-full rounded-md object-cover object-center hover:scale-105 transition-transform shadow-[1px_2px_6px_#868686]' src={mushroom3dImg} alt="" />
          <img className='w-full h-full rounded-md object-cover object-center hover:scale-105 transition-transform shadow-[1px_2px_6px_#868686]' src={skull3dImg} alt="" />
          <img className='w-full h-full rounded-md object-cover object-center hover:scale-105 transition-transform shadow-[1px_2px_6px_#868686]' src={landscapeImg} alt="" />
          <img className='w-full h-full rounded-md object-cover object-center hover:scale-105 transition-transform shadow-[1px_2px_6px_#868686]' src={flowerImg} alt="" />
        </aside>
      </div>
    </InfoSection>
  )
}

export default AboutMe;