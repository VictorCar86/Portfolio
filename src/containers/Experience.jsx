import React from "react";
import InfoSection from "../components/InfoSection";
import WorkIcon from "../components/Icons/WorkIcon";
import Modal from "../components/Modal";
import useModalStore from "../store/modalStore";
import { IoMdTime } from "react-icons/io";
import { FaRegBuilding } from "react-icons/fa";
import { previousJobs } from "../utils/previousJobs";
import { GetByLanguage } from "../utils/languageTools";
import clsx from "clsx";

const getMonthName = (dateStr = "", lang = "en") => {
    if (!dateStr) return "";
    if (dateStr.toLowerCase() === "present") {
        return lang === "en" ? "Present" : "Presente";
    }
    const date = new Date(dateStr);
    const wordLength = window.innerWidth >= 768 ? "long" : "short";
    const monthDayName =
        lang === "en"
            ? date.toLocaleString("en-US", { month: wordLength })
            : date.toLocaleString("es-ES", { month: wordLength });
    return `${monthDayName} ${date.getFullYear()}`;
};

const Experience = () => {
    const openModal = useModalStore((state) => state.openModal);

    return (
        <InfoSection
            title={
                <>
                    <GetByLanguage lang="en">Experience 💼</GetByLanguage>
                    <GetByLanguage lang="es">Experiencia 💼</GetByLanguage>
                </>
            }
            bgColor="bg-cream-300"
            customId="experience"
        >
            <ul className="pl-7 md:pl-[46px]">
                {previousJobs.map((job, index) => (
                    <li className="relative" key={index}>
                        <aside className="absolute top-0.5 -left-9 md:-left-11 flex flex-col items-center h-full">
                            <i className="inline-block rounded-full border-[3px] border-amber-900 shadow-[0px_0px_4px_0px] shadow-amber-900">
                                <WorkIcon className="w-6 h-max p-[3px] fill-amber-900" />
                            </i>
                            <div className="h-full w-[3px] mainBackground"></div>
                        </aside>
                        <article
                            className={clsx("md:grid grid-cols-2 items-center gap-5", {
                                "pb-3.5": index !== previousJobs.length - 1,
                            })}
                        >
                            <div className="h-max mb-4 md:m-0">
                                <p className="text-2xl font-bold mb-2">
                                    <GetByLanguage lang="en">
                                        {job.en.title}
                                    </GetByLanguage>
                                    <GetByLanguage lang="es">
                                        {job.es.title}
                                    </GetByLanguage>
                                </p>
                                <p className="mb-1.5">
                                    <GetByLanguage lang="en">
                                        {job.en.description}
                                    </GetByLanguage>
                                    <GetByLanguage lang="es">
                                        {job.es.description}
                                    </GetByLanguage>
                                </p>
                                <p className="flex items-center gap-1.5 mb-1.5 italic">
                                    <FaRegBuilding />
                                    <span>
                                        <a
                                            className="text-lg font-bold border-b-2 border-amber-900"
                                            href={job.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {job.company}
                                        </a>
                                    </span>
                                </p>
                                <p className="flex items-center gap-1.5 mb-1.5 capitalize">
                                    <IoMdTime className="scale-105" />
                                    <span>
                                        <GetByLanguage lang="en">
                                            {getMonthName(job.dates[0], "en")} -{" "}
                                            {getMonthName(job.dates[1], "en")}
                                        </GetByLanguage>
                                        <GetByLanguage lang="es">
                                            {getMonthName(job.dates[0], "es")} -{" "}
                                            {getMonthName(job.dates[1], "es")}
                                        </GetByLanguage>
                                    </span>
                                </p>
                            </div>
                            <ul
                                className={`grid grid-cols-2 justify-items-center gap-1.5 p-1.5 rounded-lg mainBackground`}
                                style={{ gridAutoRows: "minmax(0, 116px)" }}
                            >
                                {job.images.map((image, index) => (
                                    <li
                                        className={clsx("w-full h-full", {
                                            "col-span-2": image.expanded,
                                        })}
                                        key={index}
                                    >
                                        <img
                                            className={clsx(
                                                "h-full w-full transition-transform hover:scale-105 select-none object-cover",
                                                {
                                                    "cursor-pointer": image.choosable,
                                                    "object-top": image.expanded,
                                                },
                                            )}
                                            src={image.src}
                                            alt={image.title}
                                            draggable="false"
                                            onClick={
                                                image.choosable
                                                    ? () => openModal(image.title)
                                                    : null
                                            }
                                        />
                                        {image.choosable && (
                                            <Modal id={image.title} title={image.title}>
                                                <img
                                                    className="w-full select-none"
                                                    src={image.src}
                                                    alt={image.title}
                                                    draggable="false"
                                                />
                                            </Modal>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </li>
                ))}
            </ul>
        </InfoSection>
    );
};

export default Experience;
