import React, { useEffect, useRef, useState } from 'react';
import {FiGithub, FiExternalLink} from 'react-icons/fi'
import {AiFillPlayCircle} from 'react-icons/ai'

const VideoSection = ({ sourceArray = [], itemsRef }) => {

    const [timePreview, setTimePreview] = useState(null)
    const liRef = useRef([])
    const videoRef = useRef([])

    const previewVideo = (index) => {
        const project = videoRef.current[index];
        project.muted = true;
        project.currentTime = 1;
        project.playbackRate = 1.5;
        project.play();
    }

    const startPreview = (videoIndexRef) => {
        setTimePreview(setTimeout(() => previewVideo(videoIndexRef), 250))
    }

    const stopPreview = (videoIndexRef) => {
        clearTimeout(timePreview)
        const project = videoRef.current[videoIndexRef];
        project.currentTime = 0;
        project.playbackRate = 1;
        project.pause();
    }

    useEffect(() => itemsRef(liRef.current), [liRef])

    return (
        <ul className='grid grid-cols-1 md:grid-cols-2 mt-6 gap-4'>
            {sourceArray.map((project, index) => (
                <li
                    className="transition-transform ease-out animate__animated opacity-0"
                    ref={refElm => liRef.current[index] = refElm}
                    key={index}>
                    <section className='group relative h-fit w-full rounded-xl rounded-b-none hover:scale-105 transition-transform ease-out z-10'>
                        <video
                            className='w-full rounded-xl rounded-b-none group-hover:rounded-b-xl border-amber-600 border-4'
                            src={project.videoSrc}
                            ref={refElm => videoRef.current[index] = refElm}
                            onMouseEnter={() => startPreview(index)}
                            onMouseLeave={() => stopPreview(index)}
                        />
                        <div className='group-hover:invisible absolute top-0 w-full h-full rounded-xl rounded-b-none bg-black/30'>
                            <AiFillPlayCircle className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4 fill-amber-100' />
                        </div>
                    </section>
                    <section className='flow-root flex-col-reverse h-max w-full rounded-b-xl bg-cream-600 text-center overflow-hidden -z-10 sm:z-0'>
                        <p className='mt-4 mb-5 mx-2.5 text-amber-100 text-xl sm:text-2xl md:responsiveFontSize font-bold'>{project.title}</p>
                        <div className='pb-3'>
                            <button
                                className='bg-amber-100 w-9 h-9 mx-4 border-amber-600 border-2 rounded-full hover:scale-110 transition-transform ease-out'
                                type='button'
                                title={`github repository of ${project.title}`}>
                                <a
                                    className='inline-block w-full h-full p-1.5'
                                    aria-label={`Github repository of ${project.title}`}
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FiGithub className='svg'/>
                                </a>
                            </button>
                            <button
                                className='bg-amber-100 w-9 h-9 mx-4 border-amber-600 border-2 rounded-full hover:scale-110 transition-transform ease-out'
                                type='button'
                                title={`online page of ${project.title}`}>
                                <a
                                    className='inline-block w-full h-full p-1.5'
                                    aria-label={`Online page of ${project.title}`}
                                    href={project.page}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FiExternalLink className='svg'/>
                                </a>
                            </button>
                        </div>
                        {/* <div className='h-full p-3 rounded-b-xl bg-cream-200'>
                            <p>{project.description}</p>
                        </div> */}
                    </section>
                </li>
            ))}
        </ul>
    )
}

export default VideoSection