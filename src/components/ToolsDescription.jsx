import React from "react";

const svgStyles =
    "sm:inline-block h-min w-8 lg:w-12 mx-auto sm:mr-3 animate__animated group-hover:animate__rubberBand";
const ToolsDescription = ({ name = "", icon: Icon, className = "" }) => {
    return (
        <li className="group relative max-w-sm h-min hover:scale-105 transition-transform select-none">
            <Icon className={`${svgStyles} ${className}`} />
            <span className="mt-1 px-1 rounded-lg">{name}</span>
        </li>
    );
};

export default ToolsDescription;
