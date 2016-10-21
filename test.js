var image = new Image()
image.src = "class.png"

var eventType, keyCode;
var playerX = 10,playerY = 10;
var mouseX,mouseY;
var IsDrag = false;

// setInterval
// requestAnimationFrame

//addEventListener("type")
image.addEventListener('load', render)

window.addEventListener('keydown', onKeyDown)
window.addEventListener('keyup', onKeyUp)

window.addEventListener('mousedown', onMouseDown)
window.addEventListener('mouseup', onMouseUp)
window.addEventListener('mousemove', onMouseMove)


function render()
{
  var canvas = document.getElementById('gameCanvas')
  var context = canvas.getContext('2d') // 3d = webgl

  canvas.width = 500;
  canvas.height = 500;

  context.drawImage(image,playerX,playerY)

  context.fillStyle = '#666'
  context.font = '12px Arial'
  context.textBaseline = 'top'
  context.fillText('keyCode is :'+keyCode,10,10)
  context.fillText('Event Type is : '+eventType,10,25)


}

function onKeyDown(e)
{
  keyCode = e.keyCode
  eventType = e.type

  if(e.keyCode == 37 ){
    playerX -= 10; //왼
  }

  else if(e.keyCode == 38 ){
    playerY -= 10; //위
  }

    else if(e.keyCode == 39 ){
      playerX += 10; //오
    }

    else if(e.keyCode == 40 ){
      playerY += 10; //아래
    }

  render()
}
// left = 37 , up = 38 , Right = 39 , Down = 40
function onKeyUp(e)
{
  keyCode = e.keyCode
  eventType = e.type
  render()
}

function onMouseDown(e)
{
  eventType = e.type

  IsDrag = true;

  render()
}

function onMouseUp(e)
{
  eventType = e.type

  IsDrag = false;

  render()
}

function onMouseMove(e)
{
  eventType = e.type
  mouseX = e.clientX
  mouseY = e.clientY

  if(IsDrag){
    playerX = mouseX
    playerY = mouseY
  }

  render()
}




































  //fillRect(시작x,시작y,width,height)
  //context.fillRect(10,50,100,40)사각형
  //context.moveTo(100,10)------
  //context.lineTo(50,50)     선
  //context.stroke();------------
  //context.beginPath();---------------------
  // arc(원의 중심x , 원의 중심y , 반지름 , 시작 각도 , 끝 각도)
  //context.arc(50,50,50,0,Math.PI * 2)          원
  //context.stroke()---------------------------------

  //context.font = "30px Arial" // 글자 폰트 설정
  //context.strokeText("꿍딲뿌뜌까뿌ㄸ까ㅜㅃ뚜ㅏ까",10,100) // 외곽선 stroke , 채우기 fill // 글자 출력


























/*
// 원시 자료형
arr = 1 // number, char , long , float , double
arr = true // boolean : bool , true / false
arr = null // NULL
arr = undefined

// 기본 자료형 ( 객체 )
arr = "a" // string , length , charAt(0)
arr = [] // array length [0]
arr = {} // object  가장 기본이 되는 객체
arr = function() {} // function(함수)

// first class object

Event =
load : 홈페이지 켜짐
*/
