import React from "react";
import InfoSection from "../components/InfoSection";
// import WebpackIcon from "../components/Icons/WebpackIcon";
// import ladyBugImg from '../assets/images/ladybug.webp';
import ToolsDescription from "../components/ToolsDescription";
import mushroomImg from "../assets/images/mushroom.webp";
import UKFlagIcon from "../components/Icons/UKFlagIcon";
import SpainIcon from "../assets/images/spain.webp";
import { CheckLanguage, GetByLanguage } from "../utils/languageTools";
import { tools } from "../utils/toolsList";

const titleLanguage = CheckLanguage(["Skills 💻", "en"], ["Habilidades 💻", "es"]);

const Skills = () => {
    return (
        <InfoSection title={titleLanguage} bgColor="bg-cream-500" customId="skills">
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
                <GetByLanguage lang="en">
                    Fundamental technologies and tools that I often use to design and
                    develop efficient and functional web applications.
                </GetByLanguage>
                <GetByLanguage lang="es">
                    Tecnologías y herramientas fundamentales que más suelo utilizar para
                    diseñar y desarrollar aplicaciones web eficientes y funcionales.
                </GetByLanguage>
            </p>

            <div className="relative flex flex-col md:flex-row justify-evenly md:h-80 lg:h-[400px] mx-auto font-bold md:text-lg">
                <aside>
                    <p className="text-2xl font-bold my-4">
                        <GetByLanguage lang="en">Tools 🛠️</GetByLanguage>
                        <GetByLanguage lang="es">Herramientas 🛠️</GetByLanguage>
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
                    <p className="text-2xl font-bold my-4">
                        <GetByLanguage lang="en">Languages 🌎</GetByLanguage>
                        <GetByLanguage lang="es">Lenguajes 🌎</GetByLanguage>
                    </p>
                    <div className="h-4/5 mt-5 font-bold">
                        <ul className="flex flex-row md:flex-col justify-evenly items-center h-full">
                            <li className="group w-min h-min -sm:w-[45%] text-center sm:grid sm:grid-flow-col sm:gap-3 lg:gap-5">
                                <div className="w-12 lg:w-20 mx-auto animate__animated group-hover:animate__pulse">
                                    <UKFlagIcon />
                                </div>
                                <div className="sm:grid">
                                    <p className="sm:self-end -sm:my-2 text-[22px]">
                                        <GetByLanguage lang="en">English</GetByLanguage>
                                        <GetByLanguage lang="es">Inglés</GetByLanguage>
                                    </p>
                                    <p className="italic text-lg whitespace-nowrap text-amber-700">
                                        <GetByLanguage lang="en">
                                            B2 Intermediate
                                        </GetByLanguage>
                                        <GetByLanguage lang="es">
                                            B2 Intermedio
                                        </GetByLanguage>
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
                                        <GetByLanguage lang="en">Spanish</GetByLanguage>
                                        <GetByLanguage lang="es">Español</GetByLanguage>
                                    </p>
                                    <p className="italic text-lg text-amber-700">
                                        <GetByLanguage lang="en">Native</GetByLanguage>
                                        <GetByLanguage lang="es">Nativo</GetByLanguage>
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
