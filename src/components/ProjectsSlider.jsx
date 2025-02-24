import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import VideoPlayer from "./VideoPlayer";
import useModalStore from "../store/modalStore";
import Modal from "./Modal";
import ImagePlaceholder from "../assets/images/image-placeholder.webp";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./../styles/CustomPagination.css";

const ProjectsSlider = ({ projects = [] }) => {
    const [slidesPerView, setSlidesPerView] = useState(window.innerWidth <= 768 ? 1 : 2);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setSlidesPerView(1);
            } else {
                setSlidesPerView(2);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const openModal = useModalStore((state) => state.openModal);
    // const isModalOpen = useModalStore((state) => state.isOpen);

    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={slidesPerView}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation
        >
            {projects.map((project, index) => (
                <SwiperSlide key={index}>
                    <section className="group relative h-fit w-full rounded-xl rounded-b-none z-10">
                        {project.videoSrc && <VideoPlayer src={project.videoSrc} />}
                        {!project.videoSrc && (
                            <>
                                <img
                                    className="w-full rounded-xl rounded-b-none border-amber-600 border-4 aspect-[16/9.1] cursor-pointer object-cover object-top"
                                    src={project.imageSrc || ImagePlaceholder}
                                    alt={project.title}
                                    onClick={
                                        project.imageSrc
                                            ? () => openModal(project.title)
                                            : null
                                    }
                                />
                                <Modal id={project.title} title={project.title}>
                                    <img
                                        className="h-full w-full"
                                        src={project.imageSrc}
                                        alt={project.title}
                                    />
                                </Modal>
                            </>
                        )}
                    </section>
                    <section className="flow-root flex-col-reverse h-max w-full rounded-b-xl text-center mainBackground overflow-hidden -z-10 sm:z-0">
                        <p className="mt-4 mb-5 mx-4 text-amber-100 text-xl sm:text-2xl md:responsiveFontSize font-bold overflow-hidden text-ellipsis whitespace-nowrap">
                            {project.title}
                        </p>
                        <div className="pb-3">
                            <a
                                className="inline-flex items-center gap-1.5 mx-4 font-medium hover:scale-110 transition-transform ease-out"
                                aria-label={`Github repository of ${project.title}`}
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button
                                    className="inline-block w-9 h-9 p-1.5 border-2 border-amber-600 rounded-full bg-amber-100"
                                    title={`Github repository of ${project.title}`}
                                    type="button"
                                >
                                    <FiGithub className="svg" />
                                </button>
                                <span className="text-amber-100">Source Code</span>
                            </a>

                            <a
                                className="inline-flex items-center gap-1.5 mx-4 font-medium hover:scale-110 transition-transform ease-out"
                                aria-label={`Online page of ${project.title}`}
                                href={project.page}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button
                                    className="inline-block w-9 h-9 p-1.5 border-2 border-amber-600 rounded-full bg-amber-100"
                                    title={`Online page of ${project.title}`}
                                    type="button"
                                >
                                    <FiExternalLink className="svg" />
                                </button>
                                <span className="text-amber-100">See Live</span>
                            </a>
                        </div>
                        {/* <div className='h-full p-3 rounded-b-xl bg-cream-200'>
                            <p>{project.description}</p>
                        </div> */}
                    </section>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ProjectsSlider;
