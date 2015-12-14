var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.lineWidth = 5;
var down = false;


canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mousedown',function()
    {
    down = true;
    context.beginPath();
    context.moveTo(xPos,yPos);
    canvas.addEventListener("mousemove",draw)
});
                        
                        
                        
canvas.addEventListener('mouseup',function() {down = false;});

function draw(e)
{
    
    xPos =e.clientX - canvas.offsetLeft;
    yPos =e.clientY - canvas.offsetTop;
    
    if(down==true)
        {
            
            context.lineTo(xPos,yPos);
            context.stroke();
        }
   
    
}


function changeColor(color){context.strokeStyle = color; context.fillStyle = color;}
function clearCanvas() {context.clearRect(0,0,canvas.width,canvasHeight);}
function changeBrushSize(size){context.lineWidth =size;}
function fillCanvas(){context.fillRect(0,0,canvas.width,canvas.height);}
function changeBrushStyle(brushStyle){context.lineCap =brushStyle;}

 
                        






