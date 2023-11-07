//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const app = document.getElementById("app");
    const video = document.getElementById("meditation-video");
    const audio = document.getElementById("meditation-audio");
    const soundA = document.getElementById("soundA");
    const soundB = document.getElementById("soundB");
    const smallerMins = document.getElementById("smaller-mins");
    const mediumMins = document.getElementById("medium-mins");
    const longMins = document.getElementById("long-mins");
    const timeDisplay = document.querySelector(".time-display");
    const playPause = document.getElementById("play-pause");

    let isPlaying = false;
    let selectedSound = "beach.mp3";

    soundA.addEventListener("click", function () {
        selectedSound = "beach.mp3";
        audio.src = `Sounds/${selectedSound}`;
    });

    soundB.addEventListener("click", function () {
        selectedSound = "rain.mp3";
        audio.src = `Sounds/${selectedSound}`;
    });

    smallerMins.addEventListener("click", function () {
        updateTimeDisplay(2);
    });

    mediumMins.addEventListener("click", function () {
        updateTimeDisplay(5);
    });

    longMins.addEventListener("click", function () {
        updateTimeDisplay(10);
    });

    playPause.addEventListener("click", function () {
        if (isPlaying) {
            audio.pause();
            video.pause();
            playPause.innerText = "Play";
        } else {
            audio.play();
            video.play();
            playPause.innerText = "Pause";
        }
        isPlaying = !isPlaying;
    });

    function updateTimeDisplay(minutes) {
        const seconds = minutes * 60;
        timeDisplay.innerText = `${minutes}:00`;
    }
});
