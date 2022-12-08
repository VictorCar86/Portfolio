import React from 'react'
import InfoSection from '../components/InfoSection'
import { SiCss3, SiHtml5, SiJavascript, SiReact, SiGit, /*SiSass,*/ SiTailwindcss, SiNodedotjs } from 'react-icons/si'
import ToolsDescription from '../components/ToolsDescription'
import htmlImg from '../assets/images/html.webp'
import cssImg from '../assets/images/css.webp'
import jsImg from '../assets/images/js.webp'
import reactImg from '../assets/images/react.webp'
import tailwindImg from '../assets/images/tailwind.webp'
// import sassImg from '../assets/images/sass.webp'
import gitImg from '../assets/images/git.webp'
import webpackImg from '../assets/images/webpack.webp'
import nodeImg from '../assets/images/node.webp'
import WebpackIcon from '../assets/images/webpack-icon.webp'
import UKFlagIcon from '../components/Icons/UKFlagIcon'
import SpainIcon from '../assets/images/spain.webp'
import currentLanguage from '../utils/currentLanguage'
import TextIncludes from '../utils/TextIncludes'

const Skills = () => {

  const svgStyles = "h-min w-14 lg:w-20 mx-auto animate__animated hover:animate__rubberBand";

  const titleLanguage = () => {
    if (currentLanguage.includes('en-')){
        return 'Skills 💻'
    }
    if (currentLanguage.includes('es-')){
        return 'Habilidades 💻'
    }
  }

  return (
    <InfoSection title={titleLanguage()} bgColor='bg-cream-300' customId='skills'>
      <p className='max-w-xl mb-1.5'>

        <TextIncludes compare="en-">
          The skills, technologies and tools I use to create products:
        </TextIncludes>

        <TextIncludes compare="es-">
          Las habilidades, tecnologías y herramientas que uso para crear productos:
        </TextIncludes>

      </p>
      <p className='max-w-xl mb-1.5'>

        <TextIncludes compare="en-">
          I'm also currently learning about Backend technologies and relational databases.
        </TextIncludes>

        <TextIncludes compare="es-">
          Actualmente también estoy aprendiendo sobre tecnologías Backend y Bases de Datos Relacionales.
        </TextIncludes>

      </p>
      <h3 className='text-xl font-bold my-3'>

        <TextIncludes compare="en-">
          Tools:
        </TextIncludes>

        <TextIncludes compare="es-">
          Herramientas:
        </TextIncludes>

      </h3>
      <div className='relative h-auto mx-auto my-6 font-bold md:text-xl text-center'>
        <ul className='grid sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-4 md:grid-rows-2 grid-cols-1 grid-rows-6 gap-1.5 justify-items-center items-center mt-7'>
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

          <ToolsDescription name='Tailwind' imgSrc={tailwindImg}>
            <SiTailwindcss className={`fill-teal-500 ${svgStyles}` }/>
          </ToolsDescription>

          {/* <ToolsDescription name='Sass' imgSrc={sassImg}>
            <SiSass className={`fill-pink-500 ${svgStyles}` }/>
          </ToolsDescription> */}

          <ToolsDescription name='Git' imgSrc={gitImg}>
            <SiGit className={`fill-orange-600 ${svgStyles}` }/>
          </ToolsDescription>

          <ToolsDescription name='Webpack' imgSrc={webpackImg}>
            <img
              className={`object-cover ${svgStyles}`}
              src={WebpackIcon}
              alt="Webpack icon"
            />
          </ToolsDescription>

          <ToolsDescription name='Node.js' imgSrc={nodeImg}>
            <SiNodedotjs className={`fill-green-700 ${svgStyles}` }/>
          </ToolsDescription>
        </ul>
      </div>
      <h3 className='text-xl font-bold my-3'>

        <TextIncludes compare="en-">
          Languages:
        </TextIncludes>

        <TextIncludes compare="es-">
          Lenguajes:
        </TextIncludes>

      </h3>
      <div className='my-5 font-bold'>
        <ul className='flex justify-evenly'>
          <li className='w-24 text-center'>
            <div className='w-9 md:w-14 lg:w-20 mx-auto animate__animated hover:animate__pulse'>
              <UKFlagIcon />
            </div>
            <p className='my-2'>

              <TextIncludes compare="en-">
                English
              </TextIncludes>

              <TextIncludes compare="es-">
                Inglés
              </TextIncludes>

            </p>
            <p className='italic text-amber-700'>

              <TextIncludes compare="en-">
                Intermediate
              </TextIncludes>

              <TextIncludes compare="es-">
                Intermedio
              </TextIncludes>

            </p>
          </li>
          <li className='w-24 text-center'>
            <div className='w-9 md:w-14 lg:w-20 mx-auto animate__animated hover:animate__pulse'>
              <img className='h-min w-full rounded-full' src={SpainIcon} alt="Spain flag" />
            </div>
            <p className='my-2'>

              <TextIncludes compare="en-">
                Spanish
              </TextIncludes>

              <TextIncludes compare="es-">
                Español
              </TextIncludes>

            </p>
            <p className='italic text-amber-700'>

              <TextIncludes compare="en-">
                Native
              </TextIncludes>

              <TextIncludes compare="es-">
                Nativo
              </TextIncludes>

            </p>
          </li>
        </ul>
      </div>
    </InfoSection>
  )
}

export default Skills