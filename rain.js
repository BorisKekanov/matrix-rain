var canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight
document.body.appendChild(canvas)


var ctx = canvas.getContext("2d")

var y = 0
const chars = "ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ";
function drow() {
    if (y>canvas.height) {
        y=0
    }
    y += 50
    blackTush()
    writeASimvol()
}

function writeASimvol(){
    ctx.fillStyle = "#0F0"
    ctx.font = "50px serif"
    ctx.fillText(randomMatrixSimbol(), 30, y);
}
function blackTush(){
ctx.fillStyle = "rgba(0,0,0,0.2)"
ctx.fillRect(0,0,canvas.width,canvas.height)
}

setInterval(drow,150)
function randomMatrixSimbol() {
   
    const randomCharsIndex = getRandomInt(chars.length)
    return chars[randomCharsIndex]
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}
console.log("hxsdw");