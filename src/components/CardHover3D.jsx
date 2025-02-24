import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import "../styles/CardHover3D.css";

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const timeout = setTimeout(() => {
                    entry.target.classList.add("force-hover");
                }, 500);
                return () => clearTimeout(timeout);
            } else {
                entry.target.classList.remove("force-hover");
            }
        });
    },
    { threshold: 1.0 },
);

const CardHover3D = ({ className = "", titleImg, bannerImg, bgImg }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        if (card) {
            observer.observe(card);
        }
        return () => {
            if (card) {
                observer.unobserve(card);
            }
        };
    }, []);

    return (
        <div ref={cardRef} className={clsx("card", className)}>
            <div className="wrapper">
                <img src={bgImg} className={clsx("cover-image", className)} />
            </div>
            {titleImg && <img src={titleImg} className="title" />}
            {bannerImg && <img src={bannerImg} className="banner" />}
        </div>
    );
};

export default CardHover3D;
