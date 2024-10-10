import React from "react";
import InfoSection from "../components/InfoSection";
// import WebpackIcon from "../components/Icons/WebpackIcon";
// import ladyBugImg from '../assets/images/ladybug.webp';
import ToolsDescription from "../components/ToolsDescription";
import mushroomImg from "../assets/images/mushroom.webp";
import UKFlagIcon from "../components/Icons/UKFlagIcon";
import SpainIcon from "../assets/images/spain.webp";
import currentLanguage from "../utils/currentLanguage";
import TextIncludes from "../utils/TextIncludes";
import { tools } from "../utils/toolsList";

const Skills = () => {
    const titleLanguage = () => {
        if (currentLanguage.includes("en")) {
            return "Skills 💻";
        }
        if (currentLanguage.includes("es")) {
            return "Habilidades 💻";
        }
    };

    return (
        <InfoSection title={titleLanguage()} bgColor="bg-cream-400" customId="skills">
            {/* <img
                className='absolute -top-8 w-10 h-min cursor-pointer select-none'
                draggable='false'
                src={ladyBugImg}
                alt='Little ladybug image'
            /> */}
            <img
                className="absolute top-7 -right-[0.45rem] w-[14vw] max-w-[140px] min-w-[110px] h-min select-none"
                draggable="false"
                src={mushroomImg}
                alt="Cute brown mushroom image"
            />

            <p className="relative max-w-xl mb-1.5 shadow-[0px_0px_10px_4px_#ffffff] bg-white/80">
                <TextIncludes compare="en">
                    The skills, technologies and tools I use to create products:
                </TextIncludes>
                <TextIncludes compare="es">
                    Las habilidades, tecnologías y herramientas que uso para crear
                    productos:
                </TextIncludes>
            </p>

            <p className="relative max-w-xl mb-1.5 shadow-[0px_0px_10px_4px_#ffffff] bg-white/80">
                <TextIncludes compare="en">
                    I'm also currently learning about Backend technologies and relational
                    databases.
                </TextIncludes>
                <TextIncludes compare="es">
                    Actualmente también estoy aprendiendo sobre tecnologías Backend y
                    Bases de Datos Relacionales.
                </TextIncludes>
            </p>

            <div className="relative flex flex-col md:flex-row justify-evenly md:h-80 lg:h-[400px] mx-auto my-6 font-bold md:text-lg">
                <aside>
                    <p className="text-2xl font-bold pl-3 my-4 border-amber-900 border-l-4">
                        <TextIncludes compare="en">Tools 🛠️</TextIncludes>
                        <TextIncludes compare="es">Herramientas 🛠️</TextIncludes>
                    </p>
                    <ul className="grid sm:grid-flow-col grid-cols-3 grid-rows-5 gap-y-3 sm:gap-y-6 lg:gap-x-2 justify-items-center sm:justify-items-start items-center max-w-sm sm:max-w-full mx-auto">
                        {tools.map((tool, index) => (
                            <ToolsDescription
                                key={index}
                                name={tool.name}
                                icon={tool.icon}
                                className={tool.className}
                            />
                        ))}
                    </ul>
                </aside>
                <aside className="h-full">
                    <p className="text-2xl font-bold pl-3 my-4 border-amber-900 border-l-4">
                        <TextIncludes compare="en">Languages 🌎</TextIncludes>
                        <TextIncludes compare="es">Lenguajes 🌎</TextIncludes>
                    </p>
                    <div className="h-4/5 mt-5 font-bold">
                        <ul className="flex flex-row md:flex-col justify-evenly items-center h-full">
                            <li className="group w-min h-min -sm:w-[45%] text-center sm:grid sm:grid-flow-col sm:gap-3 lg:gap-5">
                                <div className="w-12 lg:w-20 mx-auto animate__animated group-hover:animate__pulse">
                                    <UKFlagIcon />
                                </div>
                                <div className="sm:grid">
                                    <p className="sm:self-end -sm:my-2 text-[22px]">
                                        <TextIncludes compare="en">English</TextIncludes>
                                        <TextIncludes compare="es">Inglés</TextIncludes>
                                    </p>
                                    <p className="italic text-lg whitespace-nowrap text-amber-700">
                                        <TextIncludes compare="en">
                                            B2 Intermediate
                                        </TextIncludes>
                                        <TextIncludes compare="es">
                                            B2 Intermedio
                                        </TextIncludes>
                                    </p>
                                </div>
                            </li>
                            <li className="group w-min h-min -sm:w-[45%] text-center sm:grid sm:grid-flow-col sm:gap-3 lg:gap-5">
                                <div className="w-12 lg:w-20 mx-auto animate__animated group-hover:animate__pulse">
                                    <img
                                        className="h-min w-full rounded-full select-none"
                                        draggable="false"
                                        src={SpainIcon}
                                        alt="Spain flag"
                                    />
                                </div>
                                <div className="sm:grid">
                                    <p className="sm:self-end -sm:my-2 text-[22px]">
                                        <TextIncludes compare="en">Spanish</TextIncludes>
                                        <TextIncludes compare="es">Español</TextIncludes>
                                    </p>
                                    <p className="italic text-lg text-amber-700">
                                        <TextIncludes compare="en">Native</TextIncludes>
                                        <TextIncludes compare="es">Nativo</TextIncludes>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </InfoSection>
    );
};

export default Skills;
