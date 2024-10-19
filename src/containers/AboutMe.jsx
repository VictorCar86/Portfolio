import React from "react";
import InfoSection from "../components/InfoSection";
import aestheticPlantImg from "../assets/images/aesthetic_plant.webp";
import aestheticFlowersImg from "../assets/images/aesthetic_flowers.webp";
import projectScreenImg from "../assets/images/project_screen.webp";
import templatesImg from "../assets/images/templates.webp";
import teamworkImg from "../assets/images/teamwork.webp";
import { CheckLanguage, GetByLanguage } from "../utils/languageTools";

const titleLanguage = CheckLanguage(["About me 👋", "en"], ["Sobre mi 👋", "es"]);
const imagesStyle =
    "w-3/4 h-full mx-auto rounded-md object-cover object-center aspect-video hover:scale-105 transition-transform shadow-[1px_2px_6px_#868686]";

const AboutMe = () => {
    return (
        <InfoSection title={titleLanguage} bgColor="bg-cream-200" customId="about">
            <img
                className="absolute top-0 right-0 h-min w-36 rounded-tr-3xl select-none"
                src={aestheticPlantImg}
                alt="Aesthetic plant"
            />
            <img
                className="absolute bottom-0 left-0 h-min w-64 rounded-bl-3xl select-none"
                src={aestheticFlowersImg}
                alt="Aesthetic plant"
            />
            <img
                className="absolute -bottom-[29px] right-7 hidden md:block h-min w-64 rounded-bl-3xl -rotate-90 select-none"
                src={aestheticFlowersImg}
                alt="Aesthetic plant"
            />
            <div className="relative grid grid-cols-1 md:grid-cols-2 justify-around items-center gap-y-6 md:gap-y-6 lg:gap-y-3 w-full lg:w-[87%] mx-auto text-center">
                <>
                    <GetByLanguage lang="en">
                        <p className="mb-1.5 shadow-[0px_0px_10px_4px_#ffffff] bg-white/80">
                            Hello! I'm Victor, Web Developer with a passion for creating
                            high-impact applications with intuitive, easy-to-use user
                            interfaces. I love working on challenging projects and finding
                            creative solutions to complex problems.
                        </p>
                    </GetByLanguage>
                    <GetByLanguage lang="es">
                        <p className="mb-1.5 shadow-[0px_0px_10px_4px_#ffffff] bg-white/80">
                            ¡Hola! Soy Victor, un desarrollador web apasionado por la
                            creación de aplicaciones de gran impacto e interfaces de
                            usuario intuituvas y fáciles de usar. Me encanta trabajar en
                            proyectos desafiantes y encontrar soluciones creativas a
                            problemas complejos.
                        </p>
                    </GetByLanguage>

                    <img className={imagesStyle} src={projectScreenImg} alt="" />
                </>

                <>
                    <img
                        className={`hidden md:block ${imagesStyle}`}
                        src={templatesImg}
                        alt=""
                    />

                    <GetByLanguage lang="en">
                        <p className="mb-1.5 shadow-[0px_0px_10px_4px_#ffffff] bg-white/80">
                            With more than 2 years of experience in programming, I have
                            built a wide variety of projects, acquiring very valuable
                            experiences in the process, thus generating applications with
                            greater added value.
                        </p>
                    </GetByLanguage>
                    <GetByLanguage lang="es">
                        <p className="mb-1.5 shadow-[0px_0px_10px_4px_#ffffff] bg-white/80">
                            Con más de 2 años de experiencia en programación, he
                            construido una amplia variedad de proyectos, adquiriendo en el
                            proceso experiencias muy valiosas generando así aplicaciones
                            con mayor valor añadido.
                        </p>
                    </GetByLanguage>

                    <img
                        className={`block md:hidden ${imagesStyle}`}
                        src={templatesImg}
                        alt=""
                    />
                </>

                <>
                    <GetByLanguage lang="en">
                        <p className="mb-1.5 shadow-[0px_0px_10px_4px_#ffffff] bg-white/80">
                            In addition to being a developer, I am a person focused on
                            teamwork and communication. Outside of work, I enjoy the
                            landscapes, traveling and listen to music.
                        </p>
                    </GetByLanguage>
                    <GetByLanguage lang="es">
                        <p className="mb-1.5 shadow-[0px_0px_10px_4px_#ffffff] bg-white/80">
                            Además de ser desarrollador, soy una persona enfocada en el
                            trabajo en equipo y la comunicación. Fuera del trabajo,
                            disfruto de los paisajes, viajar mucho y escuchar música.
                        </p>
                    </GetByLanguage>

                    <img className={imagesStyle} src={teamworkImg} alt="" />
                </>
            </div>
        </InfoSection>
    );
};

export default AboutMe;
