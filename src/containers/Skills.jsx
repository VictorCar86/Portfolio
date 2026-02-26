import React, { Fragment as RF } from "react";
import InfoSection from "../components/InfoSection";
import ToolBanner from "../components/ToolBanner";
import mushroomImg from "../assets/images/mushroom.webp";
import UKFlagIcon from "../components/Icons/UKFlagIcon";
import SpainIcon from "../assets/images/spain.webp";
import { GetByLanguage } from "../utils/languageTools";
import { tools } from "../utils/toolsList";
import { separateItems } from "../utils/separateItems";
import confettiAtSides from "../utils/confettiAtSides";
import aestheticFlowers2Img from "../assets/images/aesthetic_flowers2.webp";
import aestheticBottomImg from "../assets/images/aesthetic_bottom.webp";
import clsx from "clsx";
// import Card3D from "../components/Card3D";

const frontendTools = separateItems(tools.frontend, 4);
const backendTools = separateItems(tools.backend, 4);

const ToolsList = (tools) => (
    <ul className="flex flex-col gap-y-3 sm:gap-y-6 lg:gap-x-2 justify-items-center items-center max-w-full mx-auto">
        {tools.map((items, i) => (
            <li
                className={clsx("flex justify-center gap-[5%] sm:gap-[6%] w-full", {
                    "sm:w-3/4": i === tools.length - 1,
                })}
                key={i}
            >
                {items.map((tool, j) => (
                    <RF key={j}>
                        <ToolBanner
                            className={tool.className}
                            icon={tool.icon}
                            name={tool.name}
                            styles={tool.styles}
                        />
                    </RF>
                ))}
            </li>
        ))}
    </ul>
);

const Skills = () => {
    return (
        <InfoSection
            title={
                <>
                    <GetByLanguage lang="en">Skills 💻</GetByLanguage>
                    <GetByLanguage lang="es">Habilidades 💻</GetByLanguage>
                </>
            }
            customId="skills"
        >
            <img
                className="absolute bottom-0 left-0 h-min w-64 rounded-bl-3xl select-none"
                src={aestheticFlowers2Img}
                alt="Aesthetic plant"
                draggable="false"
            />
            <img
                className="absolute -bottom-[29px] right-7 hidden md:block h-min w-64 rounded-bl-3xl -rotate-90 select-none"
                src={aestheticFlowers2Img}
                alt="Aesthetic plant"
                draggable="false"
            />
            <img
                className="absolute top-0 right-0 h-min w-[14vw] max-w-[208px] min-w-[148px] rounded-bl-3xl -rotate-180 select-none"
                src={aestheticBottomImg}
                alt="Aesthetic plant"
                draggable="false"
            />
            <button onClick={() => confettiAtSides(["🍄", "🍄‍🟫"])} type="button">
                <img
                    className="absolute top-5 -right-[0.45rem] w-[14vw] max-w-[140px] min-w-[110px] h-min select-none hover:scale-105 transition-transform"
                    draggable="false"
                    src={mushroomImg}
                    alt="Cartoon brown mushroom image"
                />
            </button>

            <p className="relative max-w-[75%] md:max-w-xl mb-1.5 shadowLight">
                <GetByLanguage lang="en">
                    Fundamental technologies and tools that I often use to design and
                    develop efficient and functional web applications.
                </GetByLanguage>
                <GetByLanguage lang="es">
                    Tecnologías y herramientas fundamentales que más suelo utilizar para
                    diseñar y desarrollar aplicaciones web eficientes y funcionales.
                </GetByLanguage>
            </p>

            <div className="relative flex flex-col justify-evenly mx-auto font-bold md:text-lg">
                <div>
                    <p className="w-max mx-auto text-2xl text-center font-bold my-5 shadowLight">
                        <span className="italic">Frontend</span> 💻
                    </p>
                    {ToolsList(frontendTools)}
                    <p className="w-max mx-auto text-2xl text-center font-bold my-5 shadowLight">
                        <span className="italic">Backend</span> 🤖
                    </p>
                    {ToolsList(backendTools)}
                </div>
                <div className="h-full">
                    <p className="w-max mx-auto text-2xl text-center font-bold my-5 shadowLight">
                        <span className="italic">
                            <GetByLanguage lang="en">Languages </GetByLanguage>
                            <GetByLanguage lang="es">Lenguajes </GetByLanguage>
                        </span>
                        🌎
                    </p>

                    <div className="h-4/5 mt-5 font-bold">
                        <ul className="flex justify-evenly">
                            <li className="group w-min h-min -sm:w-[45%] text-center sm:grid sm:grid-flow-col sm:gap-3 lg:gap-5">
                                <div className="w-12 lg:w-20 mx-auto rounded-full animate__animated group-hover:animate__pulse shadowLight">
                                    <UKFlagIcon />
                                </div>
                                <div className="sm:grid">
                                    <p className="w-min h-max mx-auto sm:self-end -sm:my-2 text-[22px] shadowLight z-20">
                                        <GetByLanguage lang="en">English</GetByLanguage>
                                        <GetByLanguage lang="es">Inglés</GetByLanguage>
                                    </p>
                                    <p className="w-min h-max mx-auto italic text-lg whitespace-nowrap text-amber-700 shadowLight">
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
                                <div className="w-12 lg:w-20 mx-auto rounded-full animate__animated group-hover:animate__pulse shadowLight">
                                    <img
                                        className="h-min w-full rounded-full select-none"
                                        draggable="false"
                                        src={SpainIcon}
                                        alt="Spain flag"
                                    />
                                </div>
                                <div className="sm:grid">
                                    <p className="w-min h-max mx-auto sm:self-end -sm:my-2 text-[22px] shadowLight z-20">
                                        <GetByLanguage lang="en">Spanish</GetByLanguage>
                                        <GetByLanguage lang="es">Español</GetByLanguage>
                                    </p>
                                    <p className="w-min h-max mx-auto italic text-lg text-amber-700 shadowLight">
                                        <GetByLanguage lang="en">Native</GetByLanguage>
                                        <GetByLanguage lang="es">Nativo</GetByLanguage>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </InfoSection>
    );
};

export default Skills;
