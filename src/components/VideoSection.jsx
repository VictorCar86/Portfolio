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
        project.playbackRate = 1;
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
        <ul className='grid md:grid-cols-2 grid-cols-1 mt-6 gap-6'>
            {sourceArray.map((project, index) => (
                <li
                    className="relative group hover:scale-105 transition-transform ease-out"
                    key={index}
                    onMouseEnter={() => startPreview(index)}
                    onMouseLeave={() => stopPreview(index)}>
                    <video
                        className='rounded-xl cursor-pointer group-hover:rounded-b-none sm:group-hover:rounded-b-xl border-amber-600 border-4'
                        src={project.videoSrc}
                        ref={refElm => itemRef.current[index] = refElm}
                    />
                    <div className='sm:absolute hidden group-hover:flex sm:visible sm:bottom-0 sm:flex justify-start items-center flex-col-reverse h-max sm:h-1/2 w-full rounded-b-xl bg-amber-800 sm:bg-transparent sm:bg-gradient-to-t from-amber-900 to-transparent text-center -z-10 sm:z-0 cursor-pointer'>
                        <p className='mt-2 mb-5 text-amber-100 text-lg font-bold'>{project.title}</p>
                        <div className='pt-5'>
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
                    <div className='sm:hidden group-hover:invisible absolute top-0 w-full h-full rounded-xl bg-black/30'>
                        <AiFillPlayCircle className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4 fill-amber-100' />
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default VideoSection