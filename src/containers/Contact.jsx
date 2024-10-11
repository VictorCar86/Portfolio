import React from "react";
import InfoSection from "../components/InfoSection";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import currentLanguage from "../utils/currentLanguage";
import TextIncludes from "../utils/TextIncludes";

const Contact = () => {
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
        // {
        //     name: "Twitter",
        //     href: "https://twitter.com/victorcar86_",
        //     svg: <FaTwitter className={svgStyles} />
        // },
    ];

    const titleLanguage = () => {
        if (currentLanguage.includes("en")) {
            return "Contact 📡";
        }
        if (currentLanguage.includes("es")) {
            return "Contacto 📡";
        }
    };

    return (
        <InfoSection
            title={titleLanguage()}
            maxWidth="max-w-[450px]"
            bgColor="bg-cream-500"
            customId="contact"
        >
            <div className="sticky sm:absolute top-[23%] right-5 flex justify-between items-center gap-5 max-w-[200px] sm:max-w-none mx-auto font-bold">
                {contactPages.map((page, index) => (
                    <a
                        className="block w-min h-min -md:mx-auto mb-1 border-4 border-amber-900 rounded-full p-2 hover:scale-110 transition-transform ease-out"
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
