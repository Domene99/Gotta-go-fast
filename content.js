console.log("Estoy en youtube");
var inicial = 45, final = 106;

function updateSpeed(video) {
    if (video.currentTime >= inicial &&
        video.currentTime <= final) {
            video.playbackRate = 3.5;
    } else {
      video.playbackRate = 0.25;
    }
}

const videoCheck = setInterval(() => {
    const video = document.querySelector("video");
    if(video !== null) {
        updateSpeed(video);
    }else{
        console.log("video not found");
    }
}, 1000);
