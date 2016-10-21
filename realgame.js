var canvas = null
var context = null

class GameObject {
  constructor(src) {
    this.x = 0
    this.y = 0
    this.width = 0
    this.height = 0
    this.image = new Image()



    this.image.addEventListener('load', () => {
      this.width = this.image.width;
      this.height = this.image.height;
    });

    this.image.src = src
  }
}
//문제점 있음
//   onImageLoad() {
//     this.width = this.image.width
//     this.height = this.image.height
//   }
// }
class Ball extends GameObject {
  constructor() {
    super('image/ball.png')

    this.speed = {x:5, y:-5}
  }
}

var objectList = []
var ballList = []
var brickList = []

var clicked = false


function init(){
  canvas = document.getElementById('gameCanvas')
  context = canvas.getContext('2d')

  create('ball', 260, 250)
  create('ball', 50, 50)
  create('ball', 500, 50)

  create('brick', 200, 50)

  requestAnimationFrame(update)
}

function create(id,x,y) {
  var obj;
  switch (id) {
  case 'ball':
    obj = new Ball()

    ballList.push(obj)
    break;
  case 'brick':
    obj = new GameObject('image/brick.png')
    brickList.push(obj)
    break;
  default:
    return null
  }
  obj.x = x
  obj.y = y
  objectList.push(obj)
  return obj
}

function update(){
  context.clearRect(0,0,canvas.width,canvas.height)

  for (var o of objectList) {
    context.drawImage(o.image, o.x, o.y)
  }



  for (var ball of ballList) {
    for (var brick of brickList) {
      //AABB충돌

      if(brick.x + brick.width > ball.x && brick.x < ball.x + ball.width &&
         brick.y + brick.height > ball.y && brick.y < ball.y + ball.height) {
        ball.speed.x *= -1;
      }
      else if((brick.y == ball.y+ball.height || brick.y+brick.height == ball.y)&&
      brick.x + brick.width > ball.x && brick.x < ball.x + ball.width)
      {
        ball.speed.y *= -1;
      }

      // if(brick.y + brick.height > ball.y && brick.y < ball.y + ball.height &&
      // brick.x + brick.width > ball.x && brick.x < ball.x + ball.width)
      //   ball.speed.y *= -1;


    }



    if(clicked){
      ball.x += ball.speed.x;
      ball.y += ball.speed.y;
    }

    if(ball.x < 0 || ball.x + ball.width > canvas.width)
      ball.speed.x *= -1;
    else if(ball.y < 0 || ball.y + ball.height > canvas.height )
      ball.speed.y *= -1;

  }


  requestAnimationFrame(update)
}

function onClick()
{
  clicked = true
}

window.addEventListener('click', onClick)
window.addEventListener('load',init)
