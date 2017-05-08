
var Assets = {
	images: {},
	sounds: {},
	
	addImage: function(path){
		var img = document.createElement("IMG");
		img.hidden = true;
		img.src = path;
		document.body.appendChild(img);
		
		this.images[path] = img;
	},
	addSound: function(path){
		var sfx = document.createElement("AUDIO");
		sfx.hidden = true;
		sfx.src = path;
		document.body.appendChild(sfx);
		
		this.sounds[path] = sfx;
	}
}

Assets.addImage("img/Enemies/enemyBlack1.png");
Assets.addImage("img/Enemies/enemyBlack2.png");
Assets.addImage("img/Enemies/enemyBlack3.png");
Assets.addImage("img/Enemies/enemyBlack4.png");
Assets.addImage("img/Enemies/enemyBlack5.png");

Assets.addImage("img/Meteors/meteorBrown_big1.png");
Assets.addImage("img/Meteors/meteorBrown_big2.png");
Assets.addImage("img/Meteors/meteorBrown_big3.png");
Assets.addImage("img/Meteors/meteorBrown_big4.png");
Assets.addImage("img/Meteors/meteorBrown_med1.png");
Assets.addImage("img/Meteors/meteorBrown_med3.png");

Assets.addImage("img/Meteors/meteorGrey_big1.png");
Assets.addImage("img/Meteors/meteorGrey_big2.png");
Assets.addImage("img/Meteors/meteorGrey_big3.png");
Assets.addImage("img/Meteors/meteorGrey_big4.png");
Assets.addImage("img/Meteors/meteorGrey_med1.png");
Assets.addImage("img/Meteors/meteorGrey_med2.png");

Assets.addImage("img/Lasers/laserBlue01.png");
Assets.addImage("img/Lasers/laserRed08.png");
Assets.addImage("img/Lasers/laserRed09.png");
Assets.addImage("img/Lasers/laserRed10.png");
Assets.addImage("img/Lasers/laserRed11.png");

Assets.addImage("img/Damage/playerShip1_damage1.png");
Assets.addImage("img/Damage/playerShip1_damage2.png");
Assets.addImage("img/Damage/playerShip1_damage3.png");
Assets.addImage("img/Damage/playerShip2_damage1.png");
Assets.addImage("img/Damage/playerShip2_damage2.png");
Assets.addImage("img/Damage/playerShip2_damage3.png");
Assets.addImage("img/Damage/playerShip3_damage1.png");
Assets.addImage("img/Damage/playerShip3_damage2.png");
Assets.addImage("img/Damage/playerShip3_damage3.png");


Assets.addSound("sfx/laser1.mp3");
Assets.addSound("sfx/laser2.mp3");
Assets.addSound("sfx/laser3.mp3");
Assets.addSound("sfx/laser4.mp3");
Assets.addSound("sfx/laser5.mp3");
Assets.addSound("sfx/laser6.mp3");
Assets.addSound("sfx/laser7.mp3");
Assets.addSound("sfx/laser8.mp3");
Assets.addSound("sfx/laser9.mp3");

