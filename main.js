song = "";

function preload()
{
    song = loadSounnd("Dead to Me.mp3")
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.create();

    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 600, 500);
}


function play()
{
    song.play();
}