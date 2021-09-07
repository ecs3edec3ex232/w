canavs = document.getElementById("myCanvas");
ctx = canavs.getContext("2d"); 

g_c_w=100;
g_c_h=75;



g_c_y=255;
g_c_x=5;

function add() {
	background_imgtag = new Image();
    background_imgtag.onload = uploadBackground;
	background_imgtag.src = "parkingLot.jpg";

	greencar_imgtag = new Image();
    greencar_imgtag.onload = uploadgreencar;
	greencar_imgtag.src = "car2.png";
}

function uploadBackground() {
	ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgtag,g_c_x,g_c_y,g_c_w,g_c_h);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if( g_c_y >= 0){
		g_c_y = g_c_y - 10;
		console.log("When up arrow is pressed, x = " + g_c_x +" | y =" + g_c_y);
		uploadgreencar();
		uploadBackground();
	}
}

function down()
{
	if( g_c_y <= 800){
		g_c_y = g_c_y + 10;
		console.log("When down arrow is pressed, x = " + g_c_x +" | y =" + g_c_y);
		uploadgreencar();
		uploadBackground();
	}
}

function left()
{
	if( g_c_x >= 0){
		g_c_x = g_c_x - 10;
		console.log("When left arrow is pressed, x = " + g_c_x +" | y =" + g_c_y);
		uploadgreencar();
		uploadBackground();
	}
}

function right()
{
	if( g_c_x <= 400){
		g_c_x = g_c_x + 10;
		console.log("When right arrow is pressed, x = " + g_c_x +" | y =" + g_c_y);
		uploadgreencar();
		uploadBackground();
	}
}
