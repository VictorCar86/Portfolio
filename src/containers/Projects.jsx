import React from "react";
import climbingPlantImg from "../assets/images/climbing-plant.webp";
import InfoSection from "../components/InfoSection";
import ProjectsSlider from "../components/ProjectsSlider";
import projectsList from "../utils/projectsList";
import { GetByLanguage } from "../utils/languageTools";

const Projects = () => {
    return (
        <InfoSection
            title={
                <>
                    <GetByLanguage lang="en">Projects 📚</GetByLanguage>
                    <GetByLanguage lang="es">Projectos 📚</GetByLanguage>
                </>
            }
            bgColor="bg-cream-400"
            customId="projects"
        >
            <img
                className="absolute top-0 right-0 -translate-y-[10%] translate-x-[7%] h-min w-min select-none"
                src={climbingPlantImg}
                alt="Climbing plant decoration"
                draggable="false"
            />

            <p className="relative max-w-xl mb-5 shadowLight">
                <GetByLanguage lang="en">
                    I've built various projects, each designed to address specific
                    challenges. Here, I aim to reflect my skills as a developer and my
                    commitment to quality and innovation at every stage of development.
                </GetByLanguage>
                <GetByLanguage lang="es">
                    He construido diversos proyectos, cada uno diseñado para resolver
                    desafíos específicos. Aquí se busca reflejar mi habilidad como
                    desarrollador y mi compromiso con la calidad y la innovación en cada
                    etapa del desarrollo.
                </GetByLanguage>
            </p>

            <ProjectsSlider projects={projectsList} />
        </InfoSection>
    );
};

export default Projects;
