var video = document.querySelector("#video");

video.addEventListener("click", playVideo)

function playVideo() {
  if (video.paused) {
    video.play();
   
  } else {
    video.pause();
  
  }
}