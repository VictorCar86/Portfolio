import React from 'react'
import InfoSection from '../components/InfoSection'
import { SiCss3, SiHtml5, SiJavascript, SiReact, SiRedux, /*SiGit,*/ /*SiSass,*/ SiTailwindcss, SiNodedotjs } from 'react-icons/si'
import WebpackIcon from '../components/Icons/WebpackIcon'
import ToolsDescription from '../components/ToolsDescription'
import climbingPlantImg from '../assets/images/climbing-plant.webp'
import htmlImg from '../assets/images/html.webp'
import cssImg from '../assets/images/css.webp'
import jsImg from '../assets/images/js.webp'
import reactImg from '../assets/images/react.webp'
import reduxImg from '../assets/images/redux.webp'
import tailwindImg from '../assets/images/tailwind.webp'
// import sassImg from '../assets/images/sass.webp'
// import gitImg from '../assets/images/git.webp'
import webpackImg from '../assets/images/webpack.webp'
import nodeImg from '../assets/images/node.webp'
import UKFlagIcon from '../components/Icons/UKFlagIcon'
import SpainIcon from '../assets/images/spain.webp'
import currentLanguage from '../utils/currentLanguage'
import TextIncludes from '../utils/TextIncludes'

const Skills = () => {

  const svgStyles = "h-min w-14 lg:w-20 mx-auto animate__animated group-hover:animate__rubberBand";

  const titleLanguage = () => {
    if (currentLanguage.includes('en')){
        return 'Skills 💻'
    }
    if (currentLanguage.includes('es')){
        return 'Habilidades 💻'
    }
  }

  return (
    <InfoSection title={titleLanguage()} bgColor='bg-cream-300' customId='skills'>
      <img className='absolute top-0 right-0 -translate-y-[10%] translate-x-[7%] h-min w-min select-none' draggable='false' src={climbingPlantImg} alt="Climbing plant decoration" />

      <p className='relative max-w-xl mb-1.5 shadow-[0px_0px_10px_4px_#ffffff] bg-white/80'>

        <TextIncludes compare="en">
          The skills, technologies and tools I use to create products:
        </TextIncludes>

        <TextIncludes compare="es">
          Las habilidades, tecnologías y herramientas que uso para crear productos:
        </TextIncludes>

      </p>
      <p className='relative max-w-xl mb-1.5 shadow-[0px_0px_10px_4px_#ffffff] bg-white/80'>

        <TextIncludes compare="en">
          I'm also currently learning about Backend technologies and relational databases.
        </TextIncludes>

        <TextIncludes compare="es">
          Actualmente también estoy aprendiendo sobre tecnologías Backend y Bases de Datos Relacionales.
        </TextIncludes>

      </p>
      <p className='text-2xl font-bold my-3'>

        <TextIncludes compare="en">
          Tools:
        </TextIncludes>

        <TextIncludes compare="es">
          Herramientas:
        </TextIncludes>

      </p>
      <div className='relative h-auto mx-auto my-6 font-bold md:text-lg text-center'>
        <ul className='grid sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-4 md:grid-rows-2 grid-cols-1 grid-rows-6 gap-2 justify-items-center items-center mt-7'>
          <ToolsDescription name='HTML' imgSrc={htmlImg}>
            <SiHtml5 className={`fill-orange-500 ${svgStyles}` }/>
          </ToolsDescription>

          <ToolsDescription name='CSS3' imgSrc={cssImg}>
            <SiCss3 className={`fill-blue-600 ${svgStyles}` }/>
          </ToolsDescription>

          <ToolsDescription name='JavaScript' imgSrc={jsImg}>
            <div className={`bg-black ${svgStyles}`}>
              <SiJavascript className="w-full h-full fill-yellow-300"/>
            </div>
          </ToolsDescription>

          <ToolsDescription name='React' imgSrc={reactImg}>
            <SiReact className={`fill-blue-400 ${svgStyles}` }/>
          </ToolsDescription>

          <ToolsDescription name='Redux' imgSrc={reduxImg}>
            <SiRedux className={`fill-purple-700 ${svgStyles}` }/>
          </ToolsDescription>

          <ToolsDescription name='Tailwind' imgSrc={tailwindImg}>
            <SiTailwindcss className={`fill-teal-500 ${svgStyles}` }/>
          </ToolsDescription>

          {/* <ToolsDescription name='Sass' imgSrc={sassImg}>
            <SiSass className={`fill-pink-500 ${svgStyles}` }/>
          </ToolsDescription> */}

          {/* <ToolsDescription name='Git' imgSrc={gitImg}>
            <SiGit className={`fill-orange-600 ${svgStyles}` }/>
          </ToolsDescription> */}

          <ToolsDescription name='Webpack' imgSrc={webpackImg}>
            <WebpackIcon className={svgStyles} />
          </ToolsDescription>

          <ToolsDescription name='Node.js' imgSrc={nodeImg}>
            <SiNodedotjs className={`fill-green-700 ${svgStyles}` }/>
          </ToolsDescription>
        </ul>
      </div>
      <p className='text-2xl font-bold my-3'>

        <TextIncludes compare="en">
          Languages:
        </TextIncludes>

        <TextIncludes compare="es">
          Lenguajes:
        </TextIncludes>

      </p>
      <div className='mt-5 font-bold'>
        <ul className='flex justify-evenly'>
          <li className='group w-min h-min -sm:w-[45%] text-center sm:grid sm:grid-flow-col sm:gap-5'>
            <div className='w-14 sm:w-20 mx-auto animate__animated group-hover:animate__pulse'>
              <UKFlagIcon />
            </div>
            <div className='sm:grid'>
              <p className='sm:self-end -sm:my-2 text-[22px]'>

                <TextIncludes compare="en">
                  English
                </TextIncludes>

                <TextIncludes compare="es">
                  Inglés
                </TextIncludes>

              </p>
              <p className='italic text-lg text-amber-700'>

                <TextIncludes compare="en">
                  Intermediate
                </TextIncludes>

                <TextIncludes compare="es">
                  Intermedio
                </TextIncludes>

              </p>
            </div>
          </li>
          <li className='group w-min h-min -sm:w-[45%] text-center sm:grid sm:grid-flow-col sm:gap-5'>
            <div className='w-14 sm:w-20 mx-auto animate__animated group-hover:animate__pulse'>
              <img className='h-min w-full rounded-full' src={SpainIcon} alt="Spain flag" />
            </div>
            <div className='sm:grid'>

              <p className='sm:self-end -sm:my-2 text-[22px]'>
                <TextIncludes compare="en">
                  Spanish
                </TextIncludes>

                <TextIncludes compare="es">
                  Español
                </TextIncludes>
              </p>

              <p className='italic text-lg text-amber-700'>
                <TextIncludes compare="en">
                  Native
                </TextIncludes>

                <TextIncludes compare="es">
                  Nativo
                </TextIncludes>
              </p>

            </div>
          </li>
        </ul>
      </div>
    </InfoSection>
  )
}

export default Skills