import React from 'react';
import InfoSection from '../components/InfoSection';
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiRedux,
  /*SiGit,*/
  /*SiSass,*/
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiFastapi,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiTypescript,
  SiAngular,
} from 'react-icons/si';
import WebpackIcon from '../components/Icons/WebpackIcon';
import JWTIcon from '../components/Icons/JWTIcon';
import ToolsDescription from '../components/ToolsDescription';
// import ladyBugImg from '../assets/images/ladybug.webp';
import mushroomImg from '../assets/images/mushroom.webp';
import UKFlagIcon from '../components/Icons/UKFlagIcon';
import SpainIcon from '../assets/images/spain.webp';
import currentLanguage from '../utils/currentLanguage';
import TextIncludes from '../utils/TextIncludes';
import PythonIcon from '../components/Icons/PythonIcon';

const svgStyles = 'h-min w-14 lg:w-20 mx-auto animate__animated group-hover:animate__rubberBand';
const pythonStyles = {
  'background-color': '#80C7FF',
  '-webkit-box-shadow': 'inset -14px -20px 0px 0px #FFE488, inset 10px 10px 0px 20px #71addd, inset 5px 5px 15px 5px rgba(0,0,0,0)',
  'box-shadow': 'inset -14px -20px 0px 0px #FFE488, inset 10px 10px 0px 20px #71addd, inset 5px 5px 15px 5px rgba(0,0,0,0)'
};

const Skills = () => {

  const titleLanguage = () => {
    if (currentLanguage.includes('en')){
        return 'Skills 💻'
    }
    if (currentLanguage.includes('es')){
        return 'Habilidades 💻'
    }
  }

  return (
    <InfoSection title={titleLanguage()} bgColor='bg-cream-400' customId='skills'>
      {/* <img
        className='absolute -top-8 w-10 h-min cursor-pointer select-none'
        draggable='false'
        src={ladyBugImg}
        alt='Little ladybug image'
      /> */}
      <img
        className='absolute top-7 -right-[0.45rem] w-[14vw] max-w-[140px] min-w-[110px] h-min select-none'
        draggable='false'
        src={mushroomImg}
        alt='Cute brown mushroom image'
      />

      <p className='relative max-w-xl mb-1.5 shadow-[0px_0px_10px_4px_#ffffff] bg-white/80'>

        <TextIncludes compare='en'>
          The skills, technologies and tools I use to create products:
        </TextIncludes>

        <TextIncludes compare='es'>
          Las habilidades, tecnologías y herramientas que uso para crear productos:
        </TextIncludes>

      </p>
      <p className='relative max-w-xl mb-1.5 shadow-[0px_0px_10px_4px_#ffffff] bg-white/80'>

        <TextIncludes compare='en'>
          I'm also currently learning about Backend technologies and relational databases.
        </TextIncludes>

        <TextIncludes compare='es'>
          Actualmente también estoy aprendiendo sobre tecnologías Backend y Bases de Datos Relacionales.
        </TextIncludes>

      </p>
      <p className='text-2xl font-bold my-3'>

        <TextIncludes compare='en'>
          Tools:
        </TextIncludes>

        <TextIncludes compare='es'>
          Herramientas:
        </TextIncludes>

      </p>
      <div className='relative h-auto mx-auto my-6 font-bold md:text-lg text-center'>
        <ul className='grid grid-cols-3 grid-rows-5 md:grid-cols-5 md:grid-rows-3 gap-y-6 gap-x-2 justify-items-center items-center mt-7'>
          <ToolsDescription name='HTML'>
            <SiHtml5 className={`fill-orange-500 ${svgStyles}`}/>
          </ToolsDescription>

          <ToolsDescription name='CSS3'>
            <SiCss3 className={`fill-blue-600 ${svgStyles}`}/>
          </ToolsDescription>

          <ToolsDescription name='JavaScript'>
            <div className={`bg-black ${svgStyles}`}>
              <SiJavascript className='w-full h-full fill-yellow-300'/>
            </div>
          </ToolsDescription>

          <ToolsDescription name='TypeScript'>
            <SiTypescript className={`fill-blue-900 ${svgStyles}`}/>
          </ToolsDescription>

          <ToolsDescription name='Angular'>
            <SiAngular className={`fill-red-500 ${svgStyles}`}/>
          </ToolsDescription>

          <ToolsDescription name='React'>
            <SiReact className={`fill-blue-400 ${svgStyles}`}/>
          </ToolsDescription>

          <ToolsDescription name='Redux'>
            <SiRedux className={`fill-purple-700 ${svgStyles}`}/>
          </ToolsDescription>

          <ToolsDescription name='Tailwind'>
            <SiTailwindcss className={`fill-teal-500 ${svgStyles}`}/>
          </ToolsDescription>

          {/* <ToolsDescription name='Sass'>
            <SiSass className={`fill-pink-500 ${svgStyles}`}/>
          </ToolsDescription> */}

          {/* <ToolsDescription name='Git'>
            <SiGit className={`fill-orange-600 ${svgStyles}`}/>
          </ToolsDescription> */}

          {/* <ToolsDescription name='Webpack'>
            <WebpackIcon className={svgStyles} />
          </ToolsDescription> */}

          <ToolsDescription name='JWT'>
            <JWTIcon className={`fill-white stroke-slate-600 stroke-[1%] ${svgStyles}`}/>
          </ToolsDescription>

          <ToolsDescription name='Node.js'>
            <SiNodedotjs className={`fill-green-700 ${svgStyles}`}/>
          </ToolsDescription>

          <ToolsDescription name='Express.js'>
            <SiExpress className={`fill-black ${svgStyles}`}/>
          </ToolsDescription>

          <ToolsDescription name='Python'>
            <PythonIcon className={svgStyles}/>
          </ToolsDescription>

          <ToolsDescription name='FastAPI'>
            <SiFastapi className={`fill-emerald-800 ${svgStyles}`}/>
          </ToolsDescription>

          <ToolsDescription name='PostgreSQL'>
            <SiPostgresql className={`fill-blue-500 ${svgStyles}`}/>
          </ToolsDescription>

          <ToolsDescription name='MongoDB'>
            <SiMongodb className={`fill-green-600 ${svgStyles}`}/>
          </ToolsDescription>
        </ul>
      </div>
      <p className='text-2xl font-bold my-3'>

        <TextIncludes compare='en'>
          Languages:
        </TextIncludes>

        <TextIncludes compare='es'>
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

                <TextIncludes compare='en'>
                  English
                </TextIncludes>

                <TextIncludes compare='es'>
                  Inglés
                </TextIncludes>

              </p>
              <p className='italic text-lg text-amber-700'>

                <TextIncludes compare='en'>
                  Intermediate
                </TextIncludes>

                <TextIncludes compare='es'>
                  Intermedio
                </TextIncludes>

              </p>
            </div>
          </li>
          <li className='group w-min h-min -sm:w-[45%] text-center sm:grid sm:grid-flow-col sm:gap-5'>
            <div className='w-14 sm:w-20 mx-auto animate__animated group-hover:animate__pulse'>
              <img className='h-min w-full rounded-full select-none' draggable='false' src={SpainIcon} alt='Spain flag' />
            </div>
            <div className='sm:grid'>

              <p className='sm:self-end -sm:my-2 text-[22px]'>
                <TextIncludes compare='en'>
                  Spanish
                </TextIncludes>

                <TextIncludes compare='es'>
                  Español
                </TextIncludes>
              </p>

              <p className='italic text-lg text-amber-700'>
                <TextIncludes compare='en'>
                  Native
                </TextIncludes>

                <TextIncludes compare='es'>
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