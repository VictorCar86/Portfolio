import React, { useState, useRef } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import clsx from "clsx";

const VideoPlayer = ({ className = "", src }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const startVideo = () => {
        const video = videoRef.current;
        video.muted = true;
        video.currentTime = 1;
        video.playbackRate = 1.5;
        video.play();
        setIsPlaying(true);
    };

    return (
        <div className="relative h-fit w-full rounded-xl rounded-b-none z-10">
            <video
                className={clsx(
                    "w-full rounded-xl rounded-b-none border-amber-600 border-4 aspect-[16/9.1] object-cover object-top select-none",
                    className,
                )}
                muted
                src={src}
                ref={videoRef}
                controls={isPlaying}
                controlsList="nodownload"
                disablePictureInPicture
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
            />
            <div
                className={clsx(
                    "absolute top-0 w-full h-full rounded-xl rounded-b-none cursor-pointer bg-black/30",
                    { invisible: isPlaying },
                )}
                onClick={startVideo}
            >
                <AiFillPlayCircle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4 fill-amber-100" />
            </div>
        </div>
    );
};

export default VideoPlayer;
