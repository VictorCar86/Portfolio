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
      {/* <div className='grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 justify-around gap-2'> */}
        <div>

          <TextIncludes compare='en'>
            <p className='mb-1.5'>Hello! I'm Victor, a web developer with a passion for creating beautiful and easy-to-use user interfaces. I love working on challenging projects and finding creative solutions to complex problems.</p>
            <p className='mb-1.5'>With more than 1 year of experience in programming, I have built a wide variety of projects, acquiring very valuable experiences in the process, thus generating applications with greater added value.</p>
            <p className='mb-1.5'>In addition to being a developer, I am a person focused on teamwork and communication. Outside of work, I enjoy the landscapes, traveling a lot and skateboarding.</p>
          </TextIncludes>

          <TextIncludes compare='es'>
            <p className='mb-1.5'>¡Hola! Soy Victor, un desarrollador web apasionado por crear interfaces de usuario atractivas y fáciles de usar. Me encanta trabajar en proyectos desafiantes y encontrar soluciones creativas para problemas complejos.</p>
            <p className='mb-1.5'>Con más de 1 año de experiencia en programación, he construido una amplia variedad de proyectos, adquiriendo en el proceso experiencias muy valiosas generando así aplicaciones con mayor valor añadido.</p>
            <p className='mb-1.5'>Además de ser desarrollador, soy una persona enfocada en el trabajo en equipo y la comunicación. Fuera del trabajo, disfruto de los paisajes, viajar mucho y hacer skate.</p>
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