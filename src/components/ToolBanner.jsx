import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { confetti } from "@tsparticles/confetti";
import clsx from "clsx";
import "../styles/Confetti.css";

const showConfetti = ({ Icon, className, styles }) => {
    // Extract the SVG string from the Icon component
    const svgString = renderToStaticMarkup(<Icon className={className} style={styles} />);
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

const ToolBanner = ({ icon: Icon, name = "", className = "", styles }) => {
    return (
        <button
            className="group relative md:flex items-center max-w-sm h-min px-1 md:px-3 py-2 rounded-xl text-cream-800 cursor-pointer hover:scale-105 transition-transform select-none shadow-[0px_0px_6px_2px_#bd9a7a] bg-cream-100/80"
            onClick={() => showConfetti({ Icon, className, styles })}
            type="button"
        >
            <Icon
                className={clsx(
                    "md:inline-block h-min w-8 lg:w-12 mx-auto md:mr-2 animate__animated group-hover:animate__rubberBand",
                    className,
                )}
            />
            <span className="mt-1 px-1 rounded-lg -sm:text-sm">{name}</span>
        </button>
    );
};

export default ToolBanner;
