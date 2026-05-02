import { useRef, useState } from "react";
import "./BackgroundMusic.css";

function BackgroundMusic() {
    const audio = useRef(
        new Audio("/audios/Rosa Walton & Hallie Coggins - I Really Want to Stay at Your House  Cyberpunk 2077 OST.mp3")
    );

    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        audio.current.loop = true;
        audio.current.volume = 0.1;

        if (isPlaying) {
            audio.current.pause();
        } else {
            audio.current.play();
        }

        setIsPlaying(!isPlaying);
    };

    return (
        <button className="audio" onClick={togglePlay}>
            {isPlaying ? "🔊 Musique ON" : "🔇 Musique OFF"}
        </button>
    );
}

export default BackgroundMusic;