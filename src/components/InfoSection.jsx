import React from "react";

const InfoSection = ({
    title = "",
    maxWidth = "max-w-5xl",
    bgColor = "",
    noBackground = false,
    customId = "",
    children,
    ...props
}) => {
    return (
        <section className={`relative w-full h-max p-7 -sm:p-4 ${bgColor}`} {...props}>
            <div className="absolute -top-[50px]" id={customId} />
            <div
                className={`relative ${maxWidth} mx-auto p-7 -sm:py-5 -sm:px-[18px] rounded-3xl ${noBackground ? "" : "bg-cream-50 shadow-xl"}`}
            >
                <span className="sticky inline-block pl-3 pr-1.5 mb-4 border-l-4 rounded-r-xl border-amber-900 text-3xl font-bold shadowLight z-30">
                    {title}
                </span>
                {children}
            </div>
        </section>
    );
};

export default InfoSection;
