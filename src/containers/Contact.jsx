import React from 'react';
import InfoSection from '../components/InfoSection';
import {
    FaLinkedin,
    FaGithub,
    FaTwitter,
} from 'react-icons/fa';
import currentLanguage from '../utils/currentLanguage';
import TextIncludes from '../utils/TextIncludes';

const Contact = () => {
    const svgStyles = "w-9 h-9";
    const contactPages = [
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/victorcar86/",
            svg: <FaLinkedin className={svgStyles} />
        },
        {
            name: "Github",
            href: "https://github.com/VictorCar86",
            svg: <FaGithub className={svgStyles} />
        },
        {
            name: "Twitter",
            href: "https://twitter.com/victorcar86_",
            svg: <FaTwitter className={svgStyles} />
        },
    ];

    const titleLanguage = () => {
        if (currentLanguage.includes('en')){
            return 'Contact 📡'
        }
        if (currentLanguage.includes('es')){
            return 'Contacto 📡'
        }
    }

    return (
        <InfoSection title={titleLanguage()} bgColor='bg-cream-500' customId='contact'>
            <div className='flex flex-col md:flex-row'>
                <p className='max-w-xl'>
                    <TextIncludes compare='en'>
                        Let me know your ideas through any social media or ask me if we can build something together. 🥳
                    </TextIncludes>

                    <TextIncludes compare='es'>
                        Déjame saber tus ideas a través de cualquier red social o pregúntame si podemos construir algo en compañía. 🥳
                    </TextIncludes>
                </p>

                <div className='flex justify-evenly flex-wrap gap-[2%] w-4/5 md:w-1/2 max-w-2xl -md:mt-5 -md:mx-auto font-bold'>
                    {contactPages.map((page, index) => (
                        <a
                            className="block w-min h-min -md:mx-auto mb-1 border-4 border-amber-900 rounded-full p-2 hover:scale-110 transition-transform ease-out"
                            aria-label={`Link to ${page.name}'s profile`}
                            href={page.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                        >
                            { page.svg }
                        </a>
                    ))}
                </div>
            </div>
        </InfoSection>
    )
}

export default Contact;