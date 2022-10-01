import React, { useEffect, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoClose } from 'react-icons/io5'

const Navbar = () => {

    const [showNav, setShowNav] = useState("")

    const [expand, setExpand] = useState({
        button: false,
        navbar: "",
        list: "",
    })

    const toggleNavbar = () => {
        if (window.innerWidth <= 767){
            setExpand({
                button: !expand.button,
                navbar: expand.button ? "animate-navbar-close" : "animate-navbar-open bg-cream-700/95",
                list: expand.button ? "" : "!translate-y-0",
            })
        }
    }

    return (
        <nav className={`w-full h-14 bg-cream-700/75 fixed ${expand.navbar} ${showNav} transition-opacity duration-500 z-30`}>
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
                    <IoClose className='w-full h-full fill-amber-100' />
                    :
                    <AiOutlineMenu className='w-full h-full fill-amber-100' />
                }
            </button>
        </nav>
    )
}

export default Navbar