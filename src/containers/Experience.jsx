import React, { useMemo } from "react";
import InfoSection from "../components/InfoSection";
import WorkIcon from "../components/Icons/WorkIcon";
import { previousJobs } from "../utils/previousJobs";
import { CheckLanguage, GetByLanguage } from "../utils/languageTools";

const titleLanguage = CheckLanguage(["Experience 💼", "en"], ["Experiencia 💼", "es"]);

const getMonthName = (dateStr = "") => {
    const date = new Date(dateStr);
    const monthDayName = CheckLanguage(
        [date.toLocaleString("en-US", { month: "long" }), "en"],
        [date.toLocaleString("es-ES", { month: "long" }), "es"],
    );
    return `${monthDayName} ${date.getFullYear()}`;
};

const Experience = () => {
    return (
        <InfoSection title={titleLanguage} bgColor="bg-cream-300" customId="experience">
            <ul className="pl-[46px]">
                {previousJobs.map((job, index) => (
                    <li className="relative" key={index}>
                        <aside className="absolute top-0.5 -left-11 flex flex-col items-center h-full">
                            <i className="inline-block rounded-full border-[3px] border-amber-900 shadow-[0px_0px_4px_0px] shadow-amber-900">
                                <WorkIcon className="w-6 h-max p-[3px] fill-amber-900" />
                            </i>
                            <div className="h-full w-[3px] mainBackground"></div>
                        </aside>
                        <GetByLanguage lang="en">
                            <p className="text-2xl font-bold mb-1.5">{job.en.title}</p>
                            <p className="mb-1.5">{job.en.description}</p>
                        </GetByLanguage>
                        <GetByLanguage lang="es">
                            <p className="text-2xl font-bold mb-1.5">{job.es.title}</p>
                            <p className="mb-1.5">{job.es.description}</p>
                        </GetByLanguage>
                        <p className="mb-1.5 italic">{job.company}</p>
                        <p className="mb-1.5 capitalize">
                            {getMonthName(job.dates[0])} - {getMonthName(job.dates[1])}
                        </p>
                    </li>
                ))}
            </ul>
        </InfoSection>
    );
};

export default Experience;
