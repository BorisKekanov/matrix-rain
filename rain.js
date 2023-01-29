var canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight
document.body.appendChild(canvas)


var ctx = canvas.getContext("2d")


const chars = "ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ";
const cellSizeInPx = 35;
const columsCount = canvas.width/cellSizeInPx
const rowsCount =canvas.height/cellSizeInPx

    const cols=[];
    for (let col = 0; col < columsCount; col+=1) {
        let randomRow = getRandomInt(rowsCount);
        cols.push(randomRow)
    }


function drow() {
   
    blackTush()
    for (let colIndex = 0; colIndex < cols.length; colIndex+=1) {
      if (cols[colIndex]>rowsCount) {
        cols[colIndex]=0
      }
      cols[colIndex]+=1
      writeASimvol(colIndex*cellSizeInPx,cols[colIndex]*cellSizeInPx)
    }
    
}

function writeASimvol(x,y) {
    ctx.fillStyle = "#0F0"
    ctx.font = `${cellSizeInPx * 1.4}px serif`;
    ctx.fillText(randomMatrixSimbol(), x, y);
}
function blackTush() {
    ctx.fillStyle = "rgba(0,0,0,0.15)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

setInterval(drow, 200)
function randomMatrixSimbol() {

    const randomCharsIndex = getRandomInt(chars.length)
    return chars[randomCharsIndex]
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}
console.log("hxsdw");