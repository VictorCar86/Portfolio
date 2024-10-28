import {
    SiCss3,
    SiHtml5,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNuxtdotjs,
    SiRedux,
    SiTailwindcss,
    SiSass,
    SiNodedotjs,
    SiExpress,
    SiDjango,
    SiFastapi,
    SiPostgresql,
    SiDocker,
} from "react-icons/si";
import { RiVuejsFill } from "react-icons/ri";
import PythonIcon from "../components/Icons/PythonIcon";

export const tools = {
    frontend: [
        {
            name: "HTML5",
            icon: SiHtml5,
            className: `fill-orange-500`,
        },
        {
            name: "CSS3",
            icon: SiCss3,
            className: `fill-blue-600`,
        },
        {
            name: "JavaScript",
            icon: SiJavascript,
            className: `fill-yellow-300 bg-black`,
        },
        {
            name: "TypeScript",
            icon: SiTypescript,
            className: `fill-blue-900`,
        },
        {
            name: "React",
            icon: SiReact,
            className: `fill-blue-400`,
        },
        {
            name: "Next.js",
            icon: SiNextdotjs,
            className: `fill-black`,
        },
        {
            name: "Vue",
            icon: RiVuejsFill,
            className: `fill-green-800`,
        },
        {
            name: "Nuxt.js",
            icon: SiNuxtdotjs,
            className: `fill-green-700`,
        },
        {
            name: "Redux",
            icon: SiRedux,
            className: `fill-purple-700`,
        },
        {
            name: "Tailwind",
            icon: SiTailwindcss,
            className: `fill-teal-500`,
        },
        {
            name: "SASS",
            icon: SiSass,
            className: `fill-pink-500`,
        },
    ],
    backend: [
        {
            name: "Node.js",
            icon: SiNodedotjs,
            className: `fill-green-700`,
        },
        {
            name: "Express",
            icon: SiExpress,
            className: `fill-black`,
        },
        {
            name: "Python",
            icon: PythonIcon,
        },
        {
            name: "FastAPI",
            icon: SiFastapi,
            className: `fill-emerald-800`,
        },
        {
            name: "Django",
            icon: SiDjango,
            className: `fill-emerald-800`,
        },
        {
            name: "PostgreSQL",
            icon: SiPostgresql,
            className: `fill-blue-500`,
        },
        {
            name: "Docker",
            icon: SiDocker,
            className: `fill-blue-500`,
        },
    ],
};
