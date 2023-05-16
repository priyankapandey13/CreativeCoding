const canvas = document.getElementById('mainCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.radius = 2;
    }
    
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}


//triangle top
const triangleTop = new Point(window.innerWidth / 2, 50);
triangleTop.draw();

//triangle Bottom left
const triangleBottom = new Point(50, window.innerHeight - 50);
triangleBottom.draw();

//triangle Bottom right
const triangleBottomRight = new Point(window.innerWidth - 50, window.innerHeight - 50);
triangleBottomRight.draw();

const triangle = [triangleTop, triangleBottom, triangleBottomRight];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function drawRest(prevpoint) {
    // pick random corner
    let randomCorner, middlePoint;
    for (let i = 0; i < 100000; i++) {
        randomCorner = triangle[getRandomInt(0, 3)]
        // find middle point
        middlePoint = new Point((prevpoint.x + randomCorner.x) / 2, (prevpoint.y + randomCorner.y) / 2  )
        middlePoint.draw();
        prevpoint = middlePoint;
    }
}

canvas.addEventListener('click', function (e) {
    const firstpoint = new Point(e.x, e.y);
    firstpoint.draw();
    drawRest(firstpoint);
},{once : true});