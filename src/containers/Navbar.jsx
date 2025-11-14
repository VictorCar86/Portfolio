import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { MdOutlineLanguage } from "react-icons/md";
import { GetByLanguage } from "../utils/languageTools";
import useLanguageStore from "../store/languageStore";

const routes = [
    {
        to: "#home",
        en: "Home",
        es: "Inicio",
    },
    {
        to: "#about",
        en: "About me",
        es: "Sobre mi",
    },
    {
        to: "#experience",
        en: "Experience",
        es: "Experiencia",
    },
    {
        to: "#projects",
        en: "Projects",
        es: "Proyectos",
    },
    {
        to: "#skills",
        en: "Skills",
        es: "Habilidades",
    },
    {
        to: "#contact",
        en: "Contact",
        es: "Contacto",
    },
];

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const lang = useLanguageStore((s) => s.lang);
    const toggleLang = useLanguageStore((s) => s.toggle);
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [expand, setExpand] = useState({
        button: false,
        navbar: "",
        list: "",
    });

    const toggleNavbar = () => {
        if (window.innerWidth <= 767) {
            setExpand({
                button: !expand.button,
                navbar: expand.button ? "animate-navbar-close" : "animate-navbar-open",
                list: expand.button ? "" : "!translate-y-0",
            });
        }
    };

    useEffect(() => {
        if (expand.button) {
            document.getElementsByTagName("body")[0].style.overflow = "hidden";
        }
        return () => {
            document.getElementsByTagName("body")[0].style.overflow = "auto";
        };
        // console.log(expand);
    }, [expand]);

    return (
        <nav
            className={`w-full h-14 bg-cream-700/95 fixed ${expand.navbar} ${scrollPosition <= 100 ? "-translate-y-14" : "translate-y-0"} duration-500 z-50`}
        >
            <ul
                className={`h-full px-[22%] flex -md:flex-col -md:justify-center -md:items-center -md:gap-[5%] -md:-translate-y-[1000px] md:justify-around md:items-center ${expand.list} transition-transform duration-1000 text-amber-100 -md:text-2xl text-lg italic font-bold`}
            >
                {routes.map((route, index) => (
                    <li
                        className="px-2 border-b-2 hover:border-b-2 md:hover:border-amber-100 border-transparent transition-all duration-500"
                        key={index}
                    >
                        <a onClick={toggleNavbar} href={route.to}>
                            <GetByLanguage lang="en">{route.en}</GetByLanguage>
                            <GetByLanguage lang="es">{route.es}</GetByLanguage>
                        </a>
                    </li>
                ))}
                <li className="px-2 transition-all duration-500">
                    <button
                        className="flex justify-between items-center w-[82px] px-2 py-0.5 rounded-md border-2 border-amber-100 hover:bg-amber-100 hover:text-cream-700 transition-all duration-300"
                        type="button"
                        aria-label="Language switcher"
                        onClick={toggleLang}
                    >
                        <MdOutlineLanguage className="w-6 h-6 inline-block mr-1 mt-0.5 text-inherit" />
                        <span className="inline-block w-[30px] mr-1 text-center">
                            {lang === "en" ? "ES" : "EN"}
                        </span>
                    </button>
                </li>
            </ul>
            <button
                className="md:hidden w-9 h-9 absolute right-5 top-2.5 fill-amber-100 animate__animated active:animate__heartBeat"
                onClick={toggleNavbar}
                aria-label="Navigation menu"
                type="button"
            >
                {expand.button ? (
                    <ImCross className="w-[80%] h-full mx-auto fill-amber-100" />
                ) : (
                    <AiOutlineMenu className="w-full h-full fill-amber-100" />
                )}
            </button>
        </nav>
    );
};

export default Navbar;
