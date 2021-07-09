var a = prompt('Enter the first variable: ');
var b = prompt("Enter second number")
function setup(){
  var b2 = createButton("click here to Swap");
b2.mousePressed(swap)
  }
function swap (){
  [a,b] = [b,a]
  console.log("new value of a"+a)
  console.log("new value of b"+b)
}

function draw()
{
}
