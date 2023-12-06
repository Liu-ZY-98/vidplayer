document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById('video');
    var playPauseButton = document.getElementById('play-pause');
    var resetButton = document.getElementById('reset');

    // Function to extract query parameters from the URL
    function getQueryParam(param) {
        var searchParams = new URLSearchParams(window.location.search);
        return searchParams.get(param);
    }

    // Retrieve video source and start time from query parameters
    var videoSource = getQueryParam('video'); // e.g., "video=example_video.mp4"
    console.log(videoSource);
    var startTime = getQueryParam('start'); // e.g., "start=120"

    if (videoSource) {
        video.src = videoSource;
        video.load();
    }

    if (startTime) {
        video.currentTime = parseFloat(startTime) / 30.0;
    }

    playPauseButton.addEventListener('click', function() {
        if (video.paused || video.ended) {
            playPauseButton.textContent = 'Pause';
            video.play();
        } else {
            playPauseButton.textContent = 'Play';
            video.pause();
        }
    });

    resetButton.addEventListener('click', function() {
        video.currentTime = 0; // Reset to the very start of the video
        video.pause();
        playPauseButton.textContent = 'Play';
    });
});
