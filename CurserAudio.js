function playAudio(audioId) {
    var audio = document.getElementById(audioId);
    audio.play();
}

function pauseAudio(audioId) {
    var audio = document.getElementById(audioId);
    audio.pause();
    audio.currentTime = 0; // Reset audio to the beginning
}