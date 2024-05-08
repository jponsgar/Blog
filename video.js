let videoActual = 1; // Variable video actual

function cambiarVideo() {

let video = document.getElementById("video-fondo");
    
// Cambiar video
if (videoActual == 1) {
    video.src = "video1.mp4";
    videoActual = 2;
} else {
    video.src = "video2.mp4";
    videoActual = 1;
}

}