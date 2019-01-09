$(document).ready(function(){
  
    var $randomnbr = $('.nbr');
    var $timer= 10;
    var $it;
    var $data = 0;
    var index;
    var change;
    var letters = ["C", "H", "A", "R", "L", "O", "T", "T", "E", ".", "D", "R", "I", "S", "C", "O", "L", "L"];
    
    $randomnbr.each(function(){
      change = Math.round(Math.random()*100);
      $(this).attr('data-change', change);
      
    });
    
    function random(){
      return Math.round(Math.random()*9);
    };
    
    function select(){
      return Math.round(Math.random()*$randomnbr.length+1);
    };
    
    function value(){
      $('.nbr:nth-child('+select()+')').html(''+random()+'');
      $('.nbr:nth-child('+select()+')').attr('data-number', $data);
      $data++;
      
      $randomnbr.each(function(){
          if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))){
            index = $('.ltr').index(this);
            $(this).html(letters[index]);
            $(this).removeClass('nbr');
          }
      });
      
    };
    
    $it = setInterval(value, $timer);
      
  });





  /* Bubbles */

  var canvas = document.querySelector('canvas')
var c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var speeds = [0.1, 0.15,0.2, 0.25,0.3,0.35,0.4]
var colors = ['#34738f', '#122f3d','#be3e2b','#ed8a45', '#f6de6c']
function rndArray(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function rndInt(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min  
}

function Bubble(x,y,radius,color, speed, moveSpeedX, moveSpeedY){
  this.x = x
  this.y = y
  this.radius = radius
  this.color = color
  this.speed = speed
  this.moveSpeedX = moveSpeedX
  this.moveSpeedY = moveSpeedY
  this.canShrink = true
  
  this.update = function(){
    this.show()
    this.radius += this.speed
    this.x += this.moveSpeedX
    this.y += this.moveSpeedY
    
    if(this.radius > radius){
      this.speed = -this.speed
    }
    
    if(this.radius < 2){
      //this.speed = rndArray(speeds) * -1
      this.speed = -this.speed
      /*this.moveSpeed = rndInt(-2,2)
      this.color = rndArray(colors)
      this.y = rndInt(0 + this.radius, canvas.height - this.radius)
      this.x = rndInt(0 + this.radius, canvas.width - this.radius)*/
    }
    
    if(this.x < 0 - this.radius){
      this.x = rndInt(0+this.radius, canvas.width - this.radius)
      this.moveSpeedX = rndInt(-2,2)
    }else if(this.x > canvas.width + this.radius){
      this.x = rndInt(0+this.radius, canvas.width - this.radius)
      this.moveSpeedX = rndInt(-2,2)
    }
    
    if(this.y < 0 - this.radius){
      this.y = rndInt(0 + this.radius, canvas.height - this.radius)
      this.moveSpeedY = rndInt(-2,2)
    }else if(this.y > canvas.height + this.radius){
      this.y = rndInt(0 + this.radius, canvas.height - this.radius)
      this.moveSpeedY = rndInt(-2,2)
    }
    
  }
  
  this.show = function(){
    c.beginPath()
    c.fillStyle = this.color
    c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
    c.fill()
    c.closePath()
  }
}


var bubbles = []

for(var i = 0; i < 100; i++){
  var radius = rndInt(10,20)
  var x = rndInt(0 + radius, canvas.width - radius)
  var y = rndInt(0 + radius, canvas.height - radius)
  var color = rndArray(colors)
  var speed = rndArray(speeds)
  var moveSpeedX = rndInt(-2,2)
  var moveSpeedY = rndInt(-2,2)
  bubbles.push(new Bubble(x,y,radius,color, speed, moveSpeedX, moveSpeedY))
}

var pX
var pX
function draw(){
  window.requestAnimationFrame(draw)
  c.fillStyle = 'white'
  c.fillRect(0,0,canvas.width,canvas.height)
  
  for(var i = 0; i < bubbles.length; i++){
    bubbles[i].update()
    if(bubbles[i].moveSpeedY == 0){
      bubbles[i].moveSpeedY = rndInt(-2,2)
    }
  }
}
draw()



/* CHART */

// var myDoughnutChart = new Chart(ctx, {
//     type: 'doughnut',
//     data: data,
//     options: options
// });