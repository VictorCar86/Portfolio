import React, { useRef, useState } from 'react';
import {FiGithub, FiExternalLink} from 'react-icons/fi'

const VideoSection = ({ sourceArray = [] }) => {

    const [timePreview, setTimePreview] = useState(null)
    const itemRef = useRef([])

    const previewVideo = (index) => {
        const video = itemRef.current[index];
        video.muted = true;
        video.currentTime = 1;
        video.playbackRate = 0.5;
        video.play();
    }

    const startPreview = (videoIndexRef) => {
        setTimePreview(setTimeout(() => previewVideo(videoIndexRef), 250))
    }

    const stopPreview = (videoIndexRef) => {
        clearTimeout(timePreview)
        const video = itemRef.current[videoIndexRef];
        video.currentTime = 0;
        video.playbackRate = 1;
        video.pause();
    }

    return (
        <ul className='grid md:grid-cols-2 grid-cols-1 mt-6 gap-6'>
            {sourceArray.map((video, index) => (
                <li
                    className="relative hover:scale-105 hover:mb-28 sm:hover:mb-0 transition-transform ease-out"
                    key={index}
                    onMouseEnter={() => startPreview(index)}
                    onMouseLeave={() => stopPreview(index)}>
                    <video
                        className='rounded-xl cursor-pointer'
                        src={video.src}
                        ref={refElm => itemRef.current[index] = refElm}
                    />
                    <div className='absolute -z-10 sm:z-0 sm:bottom-0 w-full rounded-bl-xl rounded-br-xl bg-gradient-to-t from-amber-900 to-transparent text-center'>
                        <p className='my-2 text-amber-100 text-lg font-bold'>{video.title}</p>
                        <button
                            className='bg-amber-100 w-9 h-9 mx-4 mb-2 border-amber-600 border-2 rounded-full hover:scale-110 transition-transform ease-out'
                            type='button'
                            title={`github repository of ${video.title}`}>
                            <a
                                className='inline-block w-full h-full p-1.5'
                                aria-label={`github repository of ${video.title}`}
                                href="">
                                <FiGithub className='svg'/>
                            </a>
                        </button>
                        <button
                            className='bg-amber-100 w-9 h-9 mx-4 mb-2 border-amber-600 border-2 rounded-full hover:scale-110 transition-transform ease-out'
                            type='button'
                            title={`online page of ${video.title}`}>
                            <a
                                className='inline-block w-full h-full p-1.5'
                                aria-label={`online page of ${video.title}`}
                                href="">
                                <FiExternalLink className='svg'/>
                            </a>
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default VideoSection