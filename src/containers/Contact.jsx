import React from 'react'
import InfoSection from '../components/InfoSection'
import {
    FaRegEnvelope,
    FaTwitter,
    FaGithub,
    FaLinkedin
} from 'react-icons/fa'

const Contact = () => {

    const buttonStyles = "border-4 border-amber-900 rounded-full p-2 hover:scale-110 transition-transform ease-out";
    const svgStyles = "w-12 h-12";

    return (
        <InfoSection title='Contact 📧' bgColor='bg-cream-500'>
            <div className='flex justify-evenly my-5'>
                <a
                    className={buttonStyles}
                    aria-label="Link to write me an email! 😉"
                    href="mailto:vmanuelcar@hotmail.com"
                >
                    <FaRegEnvelope className={svgStyles} />
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
                    aria-label="Link to Linkedin's profile"
                    href="https://www.linkedin.com/in/victorcar86/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin className={svgStyles} />
                </a>
            </div>
        </InfoSection>
    )
}

export default Contact