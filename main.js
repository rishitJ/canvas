 canvas= document.getElementById("myCanvas");
 ctx= canvas.getContext("2d")
 color= "red"
linewidth= 2
var last_position_of_x,last_position_of_y
var mouseevent=""
var screen_width=screen.width
new_width=screen_width -70
new_height=screen.height -300

if(screen_width<992)
{

canvas.width=new_width
canvas.height=new_height
document.body.style.overflow="hidden"

}

canvas.addEventListener("touchstart",mytouchstart)
function mytouchstart(e)
{

    color=document.getElementById("color").value
    linewidth=document.getElementById("linewidth").value

    last_position_of_x= e.touches[0].clientX-canvas.offsetLeft
    last_position_of_y= e.touches[0].clientY-canvas.offsetTop
}
var current_position_of_x=""
var current_position_of_y=""

canvas.addEventListener("touchmove",mytouchmove)
function mytouchmove(e)
{
current_position_of_x= e.touches[0].clientX-canvas.offsetLeft
current_position_of_y= e.touches[0].clientY-canvas.offsetTop

ctx.beginPath()
ctx.strokeStyle=color
ctx.linwidth=linewidth
ctx.moveTo(last_position_of_x,last_position_of_y)
ctx.lineTo(current_position_of_x,current_position_of_y)
ctx.stroke()

last_position_of_x=current_position_of_x
last_position_of_y=current_position_of_y
}
canvas.addEventListener("mousedown",mymousedown)
function mymousedown(e)
            {
 mouseevent="mousedown"
                color=document.getElementById("color").value
                linewidth=document.getElementById("linewidth").value
            }

            
canvas.addEventListener("mouseup",mymouseup)
function mymouseup(e)
{
mouseevent="mouseup"
}
canvas.addEventListener("mouseleave",mymouseleave)
function mymouseleave(e)
{
mouseevent="mouseleave"
}

                
canvas.addEventListener("mousemove",mymousemove)
function mymousemove(e)
{
current_x= e.clientX - canvas.offsetLeft
current_y= e.clientY - canvas.offsetTop

if(mouseevent=="mousedown")
{
ctx.beginPath()
ctx.strokeStyle=color
ctx.linewidth=linewidth
ctx.moveTo(last_position_of_x,last_position_of_y)
ctx.lineTo(current_x,current_y)
ctx.stroke()
}
                    last_position_of_x=current_x
                    last_position_of_y=current_y
                }