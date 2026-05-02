const audio: HTMLAudioElement = new Audio(
    "/audios/Rosa Walton & Hallie Coggins - I Really Want to Stay at Your House  Cyberpunk 2077 OST.mp3"
);

audio.loop = true;
audio.volume = 0.1;

let isPlaying: boolean = false;

export function getIsPlaying(): boolean {
    return isPlaying;
}

export function toggleAudio(): boolean {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    } else {
        audio.play();
        isPlaying = true;
    }

    return isPlaying;
}