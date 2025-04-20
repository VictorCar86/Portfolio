import React from "react";
import InfoSection from "../components/InfoSection";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CheckLanguage } from "../utils/languageTools";
import FooterGrassGif from "../assets/images/footer-ghibli-grass.gif";

const titleLanguage = CheckLanguage(["Contact 📡", "en"], ["Contacto 📡", "es"]);
const svgStyles = "w-9 h-9";
const contactPages = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/victorcar86/",
        svg: <FaLinkedin className={svgStyles} />,
    },
    {
        name: "Github",
        href: "https://github.com/VictorCar86",
        svg: <FaGithub className={svgStyles} />,
    },
];

const Contact = () => {
    return (
        <InfoSection
            title={titleLanguage}
            maxWidth="max-w-[450px]"
            bgColor="bg-cream-600"
            noBackground
            customId="contact"
            style={{
                backgroundImage: `url(${FooterGrassGif})`,
                backgroundSize: "600px 250px",
                backgroundPositionY: "bottom",
                backgroundPositionX: "right",
            }}
        >
            <div className="absolute top-[20%] sm:top-[23%] right-5 flex justify-between items-center gap-2 sm:gap-5 max-w-[200px] sm:max-w-none mx-auto font-bold">
                {contactPages.map((page, index) => (
                    <a
                        className="block w-min h-min -md:mx-auto mb-1 border-4 border-amber-900 rounded-full p-2 hover:scale-110 transition-transform ease-out shadowLight"
                        aria-label={`Link to ${page.name}'s profile`}
                        href={page.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                    >
                        {page.svg}
                    </a>
                ))}
            </div>
        </InfoSection>
    );
};

export default Contact;
