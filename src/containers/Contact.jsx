import React from 'react'
import InfoSection from '../components/InfoSection'
import {
    FaRegEnvelope,
    FaTwitter,
    FaGithub,
    FaLinkedin
} from 'react-icons/fa'

const Contact = () => {

    const buttonStyles = "block w-min h-min mx-auto mb-1 border-4 border-amber-900 rounded-full p-2 hover:scale-110 transition-transform ease-out";
    const svgStyles = "w-9 h-9";

    return (
        <InfoSection title='Contact 📡' bgColor='bg-cream-500' customId='contact'>
            <p className='max-w-xl'>
                Send me an email to say g'day, let me know your ideas through any social media or ask me if we can build something together. 🥳
            </p>
            <div className='flex justify-evenly flex-wrap max-w-2xl mt-5 mx-auto font-bold'>
                <a
                    className={buttonStyles}
                    aria-label="Link to send me an email! 😉"
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