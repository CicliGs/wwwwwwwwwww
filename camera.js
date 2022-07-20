var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var video = document.getElementById('video');

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true}).then((stream) => {
        video.srcObject = stream;
        video.play();
    });
}

document.getElementById("snap").addEventListener("click", () => {
    document.getElementById("video").style.display = 'none';
    document.getElementById("snap").style.display = 'none';
    ctx.drawImage(video, 0, 0, 1920, 1080 );
})

