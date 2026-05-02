import { useState } from "react";
import { getIsPlaying, toggleAudio } from "./audioManager";
import "./BackgroundMusic.css";

function BackgroundMusic() {
    const [isPlaying, setIsPlaying] = useState<boolean>(getIsPlaying());

    const handleClick = (): void => {
        const newState: boolean = toggleAudio();
        setIsPlaying(newState);
    };

    return (
        <button className="audio" onClick={handleClick}>
            {isPlaying ? "🔊 Musique ON" : "🔇 Musique OFF"}
        </button>
    );
}

export default BackgroundMusic;