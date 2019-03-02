const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = videoContainer.querySelector("video");
const playBtn = document.getElementById("jsPlayButton");

function handlePlayClick() {
    if (videoPlayer.paused) {
        videoPlayer.play();
    } else {
        videoPlayer.pause();
    }
}

function init() {
    playBtn.addEventListener("click", handlePlayClick);
}

if(videoContainer) {
    init();
}