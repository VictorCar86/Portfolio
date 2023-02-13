import React, { useEffect, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { ImCross } from 'react-icons/im'
import TextIncludes from '../utils/TextIncludes';

const Navbar = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [expand, setExpand] = useState({
        button: false,
        navbar: "",
        list: "",
    })

    const toggleNavbar = () => {
        if (window.innerWidth <= 767){
            setExpand({
                button: !expand.button,
                navbar: expand.button ? "animate-navbar-close" : "animate-navbar-open",
                list: expand.button ? "" : "!translate-y-0",
            })
        }
    }

    useEffect(() => {
        if (expand.button){
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        }
        return () => {
            document.getElementsByTagName('body')[0].style.overflow = 'auto';
        }
        // console.log(expand);
    }, [expand]);

    return (
        <nav className={`w-full h-14 bg-cream-700/95 fixed ${expand.navbar} ${scrollPosition <= 100 ? "-translate-y-14" : "translate-y-0"} duration-500 z-50`}>
            <ul className={`h-full px-[22%] flex -md:flex-col -md:justify-center -md:items-center -md:gap-[5%] -md:-translate-y-[1000px] md:justify-around md:items-center ${expand.list} transition-transform duration-1000 text-amber-100 -md:text-2xl text-lg italic font-bold`}>
                <li className='px-2 border-b-2 hover:border-b-2 md:hover:border-amber-100 border-transparent transition-all duration-500'>
                    <a onClick={toggleNavbar} href="#home">
                        <TextIncludes compare="en">
                            Home
                        </TextIncludes>

                        <TextIncludes compare="es">
                            Inicio
                        </TextIncludes>
                    </a>
                </li>
                <li className='px-2 border-b-2 hover:border-b-2 md:hover:border-amber-100 border-transparent transition-all duration-500'>
                    <a onClick={toggleNavbar} href="#about">
                        <TextIncludes compare="en">
                            About me
                        </TextIncludes>

                        <TextIncludes compare="es">
                            Sobre mí
                        </TextIncludes>
                    </a>
                </li>
                <li className='px-2 border-b-2 hover:border-b-2 md:hover:border-amber-100 border-transparent transition-all duration-500'>
                    <a onClick={toggleNavbar} href="#skills">
                        <TextIncludes compare="en">
                            Skills
                        </TextIncludes>
                        <TextIncludes compare="es">
                            Habilidades
                        </TextIncludes>
                    </a>
                </li>
                <li className='px-2 border-b-2 hover:border-b-2 md:hover:border-amber-100 border-transparent transition-all duration-500'>
                    <a onClick={toggleNavbar} href="#projects">
                        <TextIncludes compare="en">
                            Projects
                        </TextIncludes>

                        <TextIncludes compare="es">
                            Projectos
                        </TextIncludes>
                    </a>
                </li>
                <li className='px-2 border-b-2 hover:border-b-2 md:hover:border-amber-100 border-transparent transition-all duration-500'>
                    <a onClick={toggleNavbar} href="#contact">
                        <TextIncludes compare="en">
                            Contact
                        </TextIncludes>

                        <TextIncludes compare="es">
                            Contacto
                        </TextIncludes>
                    </a>
                </li>
            </ul>
            <button
                className='md:hidden w-9 h-9 absolute right-5 top-2.5 fill-amber-100 animate__animated active:animate__heartBeat'
                onClick={toggleNavbar}
                aria-label='Navigation menu'
                type='button'>
                {expand.button ?
                    <ImCross className='w-[80%] h-full mx-auto fill-amber-100' />
                    :
                    <AiOutlineMenu className='w-full h-full fill-amber-100' />
                }
            </button>
        </nav>
    )
}

export default Navbar