var canvas = null
var context = null

var image = new Image()
image.src = "image/class.png"

var eventType, keyCode;
var playerX = 10,playerY = 10;

var keyArr = []

function init(){
  canvas = document.getElementById('gameCanvas')
  context = canvas.getContext('2d')
  requestAnimationFrame(update)

  for(let i = 0; i<256 ; i++)
      keyArr.push(false)
      //unshift, shift, pop, slice
}

function update(){
  context.clearRect(0,0,canvas.width,canvas.height)
  context.drawImage(image,playerX,playerY)

  if(keyArr[37]){
    playerX -= 10; //왼
  }

   if(keyArr[38]){
    playerY -= 10; //위
  }

   if(keyArr[39]){
    playerX += 10; //오
  }

   if(keyArr[40]){
    playerY += 10; //아래
  }

  requestAnimationFrame(update)
}

function onKeyDown(e)
{
  keyArr[e.keyCode] = true
}

function onKeyUp(e)
{
  keyArr[e.keyCode] = false
}

  window.addEventListener('load',init)
  window.addEventListener('keydown', onKeyDown)
  window.addEventListener('keyup', onKeyUp)
