import React from "react";
import InfoSection from "../components/InfoSection";
import CardHover3D from "../components/CardHover3D";
import aestheticPlantImg from "../assets/images/aesthetic_plant.webp";
import aestheticFlowersImg from "../assets/images/aesthetic_flowers.webp";
import { GetByLanguage } from "../utils/languageTools";
import { aboutInfo } from "../utils/aboutInfo";
import clsx from "clsx";

const AboutMe = () => {
    return (
        <InfoSection
            title={
                <>
                    <GetByLanguage lang="en">About me 👋</GetByLanguage>
                    <GetByLanguage lang="es">Sobre mi 👋</GetByLanguage>
                </>
            }
            bgColor="bg-cream-200"
            customId="about"
        >
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

            <div className="relative flex flex-col justify-around items-center gap-y-6 md:gap-y-6 lg:gap-y-3 w-full lg:w-[87%] mx-auto text-center">
                {aboutInfo.map((info, index) => (
                    <div
                        className={clsx("flex items-center -md:flex-col -md:gap-3", {
                            "flex-row-reverse": index % 2 === 1,
                        })}
                        key={index}
                    >
                        <GetByLanguage lang="en">
                            <p className="mb-1.5 shadowLight">{info.en}</p>
                        </GetByLanguage>
                        <GetByLanguage lang="es">
                            <p className="mb-1.5 shadowLight">{info.es}</p>
                        </GetByLanguage>

                        <CardHover3D
                            className="max-w-[300px] max-h-[200px] object-cover object-center aspect-video"
                            bannerImg={info.banner}
                            bgImg={info.image}
                        />
                    </div>
                ))}
            </div>
        </InfoSection>
    );
};

export default AboutMe;
