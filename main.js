var canvas = new fabric.Canvas("canvas");
player_x = 0;
player_y = 50;
block_image_width = 25;
block_image_height = 25;
var player_object = "";
var block_image_object = "";
function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});

}
window.addEventListener("keydown", moverse);
function moverse (f){
var h = f.keyCode;
console.log(h);
if (f.shiftKey == true && h == "80"){
console.log ("p + shift");
block_image_height = block_image_height + 20;
block_image_width = block_image_width + 20;
}
if (f.shiftKey == true && h == "71"){
console.log ("g + shift");
block_image_height = block_image_height - 20;
block_image_width = block_image_width - 20;
}
if (h == "38"){
Arriba();
}
if (h == "40"){
Abajo();
}
if (h == "37"){
izquierda();
}
if (h == "39"){
Derecha();
}
if (h == "76"){
new_image("wall.jpg");
}
if (h == "77"){
new_image("ground.png");
}
if (h == "84"){
new_image("cloud.jpg");
}
if (h == "85"){
new_image("dark_green.png");
}
}
function Arriba(){
if(player_y > 0){
player_y = player_y - block_image_height;
canvas.remove(player_object);
player_update();
}

}
function Abajo(){
if(player_y < 700){
player_y = player_y + block_image_height;
canvas.remove(player_object);
player_update();
}
}
function izquierda(){
if(player_x > 0){
player_x = player_x - block_image_width;
canvas.remove(player_object);
player_update();
}
}
function Derecha(){
if(player_x < 500){
player_x = player_x + block_image_width;
canvas.remove(player_object);
player_update();
} 
}