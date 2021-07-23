var dog, happyDog, database, foodS, foodStock;


function preload()
{
   dog = loadImage("images/dogImg.png");
   happyDog = loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(500,500);

	dog = new Dog(200,200,20,20);

  
}


function draw() {  
background(46, 139, 87);(46, 139, 87);


if(keyWentDown(UP_ARROW)){
	writeStock(foodS);
	dog.addImage(happyDog);
}
drawSprites;
  //add styles here

}




