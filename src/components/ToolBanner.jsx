import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { confetti } from "@tsparticles/confetti";
import clsx from "clsx";

const ToolBanner = ({ icon: Icon, name = "", className = "", styles }) => {
    const showConfetti = () => {
        // Extract the SVG string from the Icon component
        const svgString = renderToStaticMarkup(
            <Icon className={className} style={styles} />,
        );
        const svg = new Blob([svgString], { type: "image/svg+xml" });
        const url = URL.createObjectURL(svg);
        confetti({
            zIndex: 9999,
            spread: 360,
            ticks: 200,
            gravity: 1,
            decay: 0.94,
            startVelocity: 30,
            particleCount: 50,
            scalar: 3,
            origin: { x: 0.5, y: 1 },
            shapes: ["image"],
            shapeOptions: {
                image: [
                    {
                        src: url,
                        width: 32,
                        height: 32,
                    },
                ],
            },
        });
    };

    return (
        <button
            className="group relative sm:flex items-center max-w-sm h-min cursor-pointer hover:scale-105 transition-transform select-none"
            onClick={showConfetti}
            type="button"
        >
            <Icon
                className={clsx(
                    "sm:inline-block h-min w-8 lg:w-12 mx-auto sm:mr-3 animate__animated group-hover:animate__rubberBand",
                    className,
                )}
            />
            <span className="mt-1 px-1 rounded-lg">{name}</span>
        </button>
    );
};

export default ToolBanner;
