import React from 'react'
import InfoSection from '../components/InfoSection'
import {
    FaTwitter,
    FaGithub,
    FaLinkedin
} from 'react-icons/fa'
import currentLanguage from '../utils/currentLanguage';
import TextIncludes from '../utils/TextIncludes';

const Contact = () => {

    const buttonStyles = "block w-min h-min mx-auto mb-1 border-4 border-amber-900 rounded-full p-2 hover:scale-110 transition-transform ease-out";
    const svgStyles = "w-9 h-9";

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

                <div className='flex justify-evenly flex-wrap w-4/5 md:w-1/2 max-w-2xl -md:mt-5 -md:mx-auto font-bold'>
                    <a
                        className={buttonStyles}
                        aria-label="Link to Linkedin's profile"
                        href="https://www.linkedin.com/in/victorcar86/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className={svgStyles} />
                    </a>
                    <a
                        className={buttonStyles}
                        aria-label="Link to Github's profile"
                        href="https://github.com/VictorCar86"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className={svgStyles} />
                    </a>
                    <a
                        className={buttonStyles}
                        aria-label="Link to Twitter's profile"
                        href="https://twitter.com/victorcar86_"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter className={svgStyles} />
                    </a>
                </div>
            </div>
        </InfoSection>
    )
}

export default Contact