import React from "react";
import clsx from "clsx";
import "../styles/CardHover3D.css";

const CardHover3D = ({ className = "", titleImg, bannerImg, bgImg }) => {
    return (
        <div className={clsx("card", className)}>
            <div className="wrapper">
                <img src={bgImg} className={clsx("cover-image", className)} />
            </div>
            {titleImg && <img src={titleImg} className="title" />}
            {bannerImg && <img src={bannerImg} className="banner" />}
        </div>
    );
};

export default CardHover3D;
