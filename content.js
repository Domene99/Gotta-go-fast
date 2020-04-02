console.log("Estoy en coursera o youtube");
var inicial = 45,
  final = 106,
  slow = 1.5,
  fast = 3;
var preprocessed = false;

function updateSpeed(video) {
  video.playbackRate =
    video.currentTime >= inicial && video.currentTime <= final ? fast : slow;
}

function process(video) {
  var mp4 = video.children[1].src;

  preprocessed = true;
}

const videoCheck = setInterval(() => {
  const video = document.querySelector("video");
  if (video !== null) {
    if (preprocessed) updateSpeed(video);
    else process(video);
  } else {
    console.log("video not found");
  }
}, 1000);
