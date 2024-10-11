import React, { useState } from "react";
import climbingPlantImg from "../assets/images/climbing-plant.webp";
import InfoSection from "../components/InfoSection";
import VideoSection from "../components/VideoSection";
import videoSources from "../utils/videoSources";
import useIntersection from "../hooks/useIntersection";
import currentLanguage from "../utils/currentLanguage";
import TextIncludes from "../utils/TextIncludes";

const Projects = () => {
    const [itemsRef, setItemsRef] = useState([]);
    itemsRef.forEach((elm) => useIntersection(["animate__bounceIn"]).observe(elm));

    const titleLanguage = () => {
        if (currentLanguage.includes("en")) {
            return "Projects 📚";
        }
        if (currentLanguage.includes("es")) {
            return "Projectos 📚";
        }
    };

    return (
        <InfoSection title={titleLanguage()} bgColor="bg-cream-300" customId="projects">
            <img
                className="absolute top-0 right-0 -translate-y-[10%] translate-x-[7%] h-min w-min select-none"
                src={climbingPlantImg}
                alt="Climbing plant decoration"
                draggable="false"
            />

            <p className="relative max-w-xl mb-5 shadow-[0px_0px_10px_4px_#ffffff] bg-white/80">
                <TextIncludes compare="en-">
                    I've built various projects, each designed to address specific
                    challenges. Here, I aim to reflect my skills as a developer and my
                    commitment to quality and innovation at every stage of development.
                </TextIncludes>
                <TextIncludes compare="es">
                    He construido diversos proyectos, cada uno diseñado para resolver
                    desafíos específicos. Aquí se busca reflejar mi habilidad como
                    desarrollador y mi compromiso con la calidad y la innovación en cada
                    etapa del desarrollo.
                </TextIncludes>
            </p>

            <VideoSection sourceArray={videoSources} itemsRef={setItemsRef} />
        </InfoSection>
    );
};

export default Projects;
