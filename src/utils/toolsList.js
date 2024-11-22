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
            styles: { fill: "#e34c26" },
        },
        {
            name: "CSS3",
            icon: SiCss3,
            className: `fill-blue-600`,
            styles: { fill: "#264de4" },
        },
        {
            name: "JavaScript",
            icon: SiJavascript,
            className: `fill-yellow-300 bg-black`,
            styles: { fill: "#f7df1e", background: "#000000" },
        },
        {
            name: "TypeScript",
            icon: SiTypescript,
            className: `fill-blue-900`,
            styles: { fill: "#1e3a8a", background: "#ffffff" },
        },
        {
            name: "React",
            icon: SiReact,
            className: `fill-blue-400`,
            styles: { fill: "#60a5fa" },
        },
        {
            name: "Next.js",
            icon: SiNextdotjs,
            className: `fill-black`,
            styles: { fill: "#000000" },
        },
        {
            name: "Vue",
            icon: RiVuejsFill,
            className: `fill-green-800`,
            styles: { fill: "#166534" },
        },
        {
            name: "Nuxt.js",
            icon: SiNuxtdotjs,
            className: `fill-green-700`,
            styles: { fill: "#15803d" },
        },
        {
            name: "Redux",
            icon: SiRedux,
            className: `fill-purple-700`,
            styles: { fill: "#7e22ce" },
        },
        {
            name: "Tailwind",
            icon: SiTailwindcss,
            className: `fill-teal-500`,
            styles: { fill: "#14b8a6" },
        },
        {
            name: "SASS",
            icon: SiSass,
            className: `fill-pink-500`,
            styles: { fill: "#ec4899" },
        },
    ],
    backend: [
        {
            name: "Node.js",
            icon: SiNodedotjs,
            className: `fill-green-700`,
            styles: { fill: "#15803d" },
        },
        {
            name: "Express",
            icon: SiExpress,
            className: `fill-black`,
            styles: { fill: "#000000" },
        },
        {
            name: "Python",
            icon: PythonIcon,
        },
        {
            name: "FastAPI",
            icon: SiFastapi,
            className: `fill-emerald-800`,
            styles: { fill: "#065f46" },
        },
        {
            name: "Django",
            icon: SiDjango,
            className: `fill-emerald-800`,
            styles: { fill: "#065f46" },
        },
        {
            name: "PostgreSQL",
            icon: SiPostgresql,
            className: `fill-blue-500`,
            styles: { fill: "#3b82f6" },
        },
        {
            name: "Docker",
            icon: SiDocker,
            className: `fill-blue-500`,
            styles: { fill: "#3b82f6" },
        },
    ],
};
