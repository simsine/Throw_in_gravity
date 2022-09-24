const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.lineWidth = 5;

function calculateX(v_0_x, t) {
    return v_0_x * t + x_0;
}
function calculateY(v_0_y, t, g) {
    return -(v_0_y * t - (1 / 2 * g * t ** 2)) + y_0;
}

// Horizontal and vertical start velocity
let v_0_x = VX.value;
let v_0_y = VY.value;
// Function to update VX&Y values + clear the screen
function updateVXY(vx, vy) {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    t = 0;
    v_0_x = vx;
    v_0_y = vy;
}
function reset() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    t = 0;
}

function clear(){
    ctx.clearRect(0, 0, innerWidth, innerHeight);
}

// Start coordinates
let x_0 = 0;
let y_0 = window.innerHeight;

let t = 0;
const stepSize = 0.05;
const g = 9.81;

let fps = 144;

function draw() {

    setTimeout(function() {
        requestAnimationFrame(draw);

        // DRAWING

        if (showPath.checked !== true){
            clear();
        }

        // Draw vector
        ctx.beginPath();
        ctx.moveTo(x_0, y_0);
        ctx.lineTo(x_0 + v_0_x, y_0 -v_0_y);
        ctx.stroke();

        x = calculateX(v_0_x, t);
        y = calculateY(v_0_y, t, g);
        ctx.fillRect(x, y, 7.5, 7.5);

        // Iterate time
        t += stepSize;

        // Debug
        // console.log(Math.floor(t), Math.floor(x), Math.floor(y));
 
    }, 1000 / fps);
}

function reSize() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}
window.onload = function () {
    reSize();
    // setInterval(draw, 16.7);
    // draw();
};

draw();

canvas.addEventListener("click", function (evt) {
    var mousePos = getMousePos(canvas, evt);
    updateVXY(mousePos.x, -mousePos.y + window.innerHeight);
    console.log(mousePos.x, -mousePos.y + window.innerHeight);
}, false);

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function handleInputFields() {
    updateVXY(VX.value, VY.value);
}
