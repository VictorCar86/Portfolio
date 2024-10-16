import React, { useEffect, useRef, useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { AiFillPlayCircle } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./../styles/CustomPagination.css";

const VideoSection = ({ sourceArray = [], itemsRef }) => {
    const [timePreview, setTimePreview] = useState(null);
    const liRef = useRef([]);
    const videoRef = useRef([]);

    const previewVideo = (index) => {
        const project = videoRef.current[index];
        project.muted = true;
        project.currentTime = 1;
        project.playbackRate = 1.5;
        project.play();
    };

    const startPreview = (videoIndexRef) => {
        setTimePreview(setTimeout(() => previewVideo(videoIndexRef), 250));
    };

    const stopPreview = (videoIndexRef) => {
        clearTimeout(timePreview);
        const project = videoRef.current[videoIndexRef];
        project.currentTime = 0;
        project.playbackRate = 1;
        project.pause();
    };

    useEffect(() => itemsRef(liRef.current), [liRef]);

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

    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={slidesPerView}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
        >
            {sourceArray.map((project, index) => (
                <SwiperSlide
                    // className="rounded-xl transition-transform ease-out animate__animated opacity-0 shadow-[1px_2px_6px_#868686]"
                    ref={(refElm) => (liRef.current[index] = refElm)}
                    key={index}
                >
                    <section className="group relative h-fit w-full rounded-xl rounded-b-none z-10">
                        {project.videoSrc && (
                            <>
                                <video
                                    className="w-full rounded-xl rounded-b-none border-amber-600 border-4 aspect-[16/9.1] object-cover object-top"
                                    src={project.videoSrc}
                                    ref={(refElm) => (videoRef.current[index] = refElm)}
                                    onMouseEnter={() => startPreview(index)}
                                    onMouseLeave={() => stopPreview(index)}
                                />
                                <div
                                    className={
                                        "group-hover:invisible absolute top-0 w-full h-full rounded-xl rounded-b-none bg-black/30"
                                    }
                                >
                                    <AiFillPlayCircle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4 fill-amber-100" />
                                </div>
                            </>
                        )}
                        {!project.videoSrc && (
                            <img
                                className="w-full rounded-xl rounded-b-none border-amber-600 border-4 aspect-[16/9.1] object-cover object-top"
                                src={
                                    project.imageSrc ||
                                    "https://engineeredsys.com/wp-content/uploads/2019/08/download.png"
                                }
                                alt={project.title}
                            />
                        )}
                    </section>
                    <section className="flow-root flex-col-reverse h-max w-full rounded-b-xl text-center mainBackground overflow-hidden -z-10 sm:z-0">
                        <p className="mt-4 mb-5 mx-2.5 text-amber-100 text-xl sm:text-2xl md:responsiveFontSize font-bold">
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

export default VideoSection;
