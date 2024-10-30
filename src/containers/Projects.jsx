import React from "react";
import climbingPlantImg from "../assets/images/climbing-plant.webp";
import InfoSection from "../components/InfoSection";
import ProjectsSlider from "../components/ProjectsSlider";
import projectsList from "../utils/projectsList";
import { CheckLanguage, GetByLanguage } from "../utils/languageTools";

const titleLanguage = CheckLanguage(["Projects 📚", "en"], ["Projectos 📚", "es"]);

const Projects = () => {
    return (
        <InfoSection title={titleLanguage} bgColor="bg-cream-400" customId="projects">
            <img
                className="absolute top-0 right-0 -translate-y-[10%] translate-x-[7%] h-min w-min select-none"
                src={climbingPlantImg}
                alt="Climbing plant decoration"
                draggable="false"
            />

            <p className="relative max-w-xl mb-5 shadow-[0px_0px_10px_4px_#ffffff] bg-white/80">
                <GetByLanguage lang="en-">
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
