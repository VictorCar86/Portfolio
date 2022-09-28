import React, { useRef, useState } from 'react';
import {FiGithub, FiExternalLink} from 'react-icons/fi'
import {AiFillPlayCircle} from 'react-icons/ai'

const VideoSection = ({ sourceArray = [] }) => {

    const [timePreview, setTimePreview] = useState(null)
    const itemRef = useRef([])

    const previewVideo = (index) => {
        const project = itemRef.current[index];
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
        const project = itemRef.current[videoIndexRef];
        project.currentTime = 0;
        project.playbackRate = 1;
        project.pause();
    }

    return (
        <ul className='grid grid-cols-1 mt-6 gap-6 even:animate__bounceInLeft odd:animate__bounceInRight'>
            {sourceArray.map((project, index) => (
                <li
                    className="md:flex transition-transform ease-out even:flex-row-reverse animate__animated"
                    key={index}>
                    <div className='group relative h-fit w-full md:w-1/2 rounded-xl hover:scale-105 transition-transform ease-out cursor-pointer z-10'>
                        <video
                            className='w-full -md:group-hover:rounded-b-xl rounded-xl -md:rounded-b-none border-amber-600 border-4'
                            src={project.videoSrc}
                            ref={refElm => itemRef.current[index] = refElm}
                            onMouseEnter={() => startPreview(index)}
                            onMouseLeave={() => stopPreview(index)}
                        />
                        <div className='group-hover:invisible absolute top-0 w-full h-full rounded-xl -md:rounded-b-none bg-black/30'>
                            <AiFillPlayCircle className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4 fill-amber-100' />
                        </div>
                    </div>
                    <div className='flow-root flex-col-reverse h-max w-full md:w-1/2 -md:rounded-b-xl md:rounded-xl bg-cream-600 text-center -z-10 sm:z-0'>
                        <p className='mt-4 mb-5 text-amber-100 text-xl sm:text-2xl font-bold'>{project.title}</p>
                        <div className='pb-5'>
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
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default VideoSection