import React, { useEffect, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { ImCross } from 'react-icons/im'

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
                navbar: expand.button ? "animate-navbar-close" : "animate-navbar-open bg-cream-700/90",
                list: expand.button ? "" : "!translate-y-0",
            })
        }
    }

    return (
        <nav className={`w-full h-14 bg-cream-700/75 fixed ${expand.navbar} ${scrollPosition <= 100 ? "-translate-y-14" : "translate-y-0"} duration-500 z-30`}>
            <ul className={`h-full px-[22%] flex -md:flex-col -md:justify-center -md:items-center -md:gap-[5%] -md:-translate-y-[1000px] md:justify-around md:items-center ${expand.list} transition-transform duration-1000 text-amber-100 -md:text-2xl text-lg italic font-bold`}>
                <li>
                    <a onClick={toggleNavbar} href="#home">Home</a>
                </li>
                <li>
                    <a onClick={toggleNavbar} href="#about">About me</a>
                </li>
                <li>
                    <a onClick={toggleNavbar} href="#skills">Skills</a>
                </li>
                <li>
                    <a onClick={toggleNavbar} href="#projects">Projects</a>
                </li>
                <li>
                    <a onClick={toggleNavbar} href="#contact">Contact</a>
                </li>
            </ul>
            <button
                className='md:hidden w-9 h-9 absolute right-5 top-2.5 fill-amber-100 animate__animated active:animate__heartBeat'
                onClick={toggleNavbar}
                name='Navigation menu'
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