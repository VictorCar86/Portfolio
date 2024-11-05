import React, { useEffect, useRef, useState } from "react";
import fallImg from "../assets/images/fall.webp";
import clsx from "clsx";

const LeafFall = ({ className = "" }) => {
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const [isFalling, setIsFalling] = useState(false);

    const handleClick = () => {
        if (!isFalling) {
            canvasRef.current.style.cursor = "";
            setIsFalling(true);
        }
    };

    useEffect(() => {
        const setupCanvas = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext("2d", { willReadFrequently: true });
            ctxRef.current = ctx;

            const img = new Image();
            img.src = fallImg;
            img.onload = () => ctx.drawImage(img, 0, 0, 425, 535);
        };

        setupCanvas();
    }, []);

    const handleMouseMove = (e) => {
        if (isFalling) return;
        const canvas = canvasRef.current;
        const ctx = ctxRef.current;
        if (!canvas || !ctx) return;

        const x = Math.floor(e.nativeEvent.offsetX);
        const y = Math.floor(e.nativeEvent.offsetY);
        const pixel = ctx.getImageData(x, y, 1, 1).data;
        const isOpaque = pixel[3] > 0;

        canvas.classList.toggle("leafShadow", isOpaque);
        canvas.style.cursor = isOpaque ? "pointer" : "";
    };

    return (
        <canvas
            ref={canvasRef}
            className={clsx(`${className} transition-all`, { "animate-fall": isFalling })}
            width="425"
            height="535"
            onClick={handleClick}
            onMouseMove={handleMouseMove}
            onMouseOut={() => canvasRef.current?.classList.remove("leafShadow")}
        ></canvas>
    );
};

export default LeafFall;
