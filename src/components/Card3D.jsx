import React, { useRef, useState } from "react";

const Card3D = ({ children = null, maxRotation = 30 }) => {
    const containerRef = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();

        // Calcula la posición relativa del cursor dentro de la card
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Convierte la posición a porcentajes (-50 a 50)
        const xPercent = ((x / rect.width) * 100 - 50) * 2;
        const yPercent = ((y / rect.height) * 100 - 50) * 2;

        // Aplica la rotación inversa
        const rotateX = (-yPercent * maxRotation) / 100;
        const rotateY = (xPercent * maxRotation) / 100;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };

    return (
        <div
            ref={containerRef}
            className="h-full w-full"
            style={{ perspective: "1000px" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="relative h-full w-full rounded-2xl shadow-[0_0_25px_#b19898]"
                style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                    transformStyle: "preserve-3d",
                    transition: "transform 0.1s ease",
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default Card3D;
