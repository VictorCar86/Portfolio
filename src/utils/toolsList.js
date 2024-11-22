import {
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
    SiDocker,
} from "react-icons/si";
import HTML5Icon from "../components/Icons/HTML5Icon";
import CSS3Icon from "../components/Icons/CSS3Icon";
import VuejsIcon from "../components/Icons/VuejsIcon";
import PythonIcon from "../components/Icons/PythonIcon";
import PostgresIcon from "../components/Icons/PostgresIcon";

export const tools = {
    frontend: [
        {
            name: "HTML5",
            icon: HTML5Icon,
        },
        {
            name: "CSS3",
            icon: CSS3Icon,
            className: `-sm:mx-1.5`,
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
            className: `fill-blue-900 bg-white`,
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
            className: `fill-black bg-white rounded-full`,
            styles: { fill: "#000000" },
        },
        {
            name: "Vue",
            icon: VuejsIcon,
            className: `-sm:mx-1.5`,
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
            className: `fill-pink-500 bg-white rounded-full -sm:mx-1.5`,
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
            className: `fill-teal-500 bg-white rounded-full`,
            styles: { fill: "#14b8a6" },
        },
        {
            name: "Django",
            icon: SiDjango,
            className: `fill-emerald-800`,
            styles: { fill: "#065f46" },
        },
        {
            name: "PostgreSQL",
            icon: PostgresIcon,
        },
        {
            name: "Docker",
            icon: SiDocker,
            className: `fill-blue-500`,
            styles: { fill: "#3b82f6" },
        },
    ],
};
