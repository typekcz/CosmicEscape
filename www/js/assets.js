
var Assets = {
	images: {},
	
	addImage: function(path){
		var img = document.createElement("IMG");
		img.hidden = true;
		img.src = path;
		document.body.appendChild(img);
		
		this.images[path] = img;
	}
}

Assets.addImage("img/playerShip1_blue.png");

Assets.addImage("img/Enemies/enemyBlack1.png");
Assets.addImage("img/Enemies/enemyBlack2.png");
Assets.addImage("img/Enemies/enemyBlack3.png");
Assets.addImage("img/Enemies/enemyBlack4.png");

Assets.addImage("img/Meteors/meteorBrown_big1.png");
Assets.addImage("img/Meteors/meteorBrown_med1.png");
Assets.addImage("img/Meteors/meteorBrown_med3.png");

Assets.addImage("img/Lasers/laserBlue01.png");
Assets.addImage("img/Lasers/laserRed08.png");
Assets.addImage("img/Lasers/laserRed10.png");
Assets.addImage("img/Lasers/laserRed11.png");

Assets.addImage("img/Damage/playerShip1_damage1.png");
Assets.addImage("img/Damage/playerShip1_damage2.png");
Assets.addImage("img/Damage/playerShip1_damage3.png");
