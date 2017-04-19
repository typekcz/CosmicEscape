function rotateVec(vec, angle){
	var rotatedVec = {};
	
	rotatedVec.x = vec.x * Math.cos(angle) - vec.y * Math.sin(angle);
	rotatedVec.y = vec.x * Math.sin(angle) + vec.y * Math.cos(angle);
	
	return rotatedVec;
}

class Game {
	constructor(canvas){
		this.canvas = canvas;
		this.context = canvas.getContext("2d");
		this.resize();
		this.generateBg();
		this.entities = {
			enemyShots: [],
			playerShots: [],
			enemies: []
		};
		
		this.controls = {
			left: false,
			right: false,
			up: false,
			down: false,
			shoot: false
		};
		
		this.playerShip = new Entity(EntityPresets.playerShip1_blue, 500, -200);
		this.playerShip.hp = 4;
		this.playerShip.draw = function(ctx){
			ctx.drawImage(this.texture, this.x - this.texture.width/2, this.y - this.texture.height/2);
			if(this.hp < 4 && this.hp > 0){
				ctx.drawImage(this.damageTextures[3-this.hp], this.x - this.damageTextures[3-this.hp].width/2, this.y - this.damageTextures[3-this.hp].height/2);
			}
		}
		
		//this.entities.enemies.push(new Entity(EntityPresets.enemyBlack3, 500, -1500));
		//this.entities.enemies.push(new Meteor(EntityPresets.meteorBrown_big1, 500, -1500));
		//this.entities.enemies.push(new Entity(EntityPresets.enemyBlack2, 500, -1500));
		//this.entities.enemies[0].movingDirection.y = 2;
	}
	
	resize(){
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this.scale = this.canvas.width/1000;
	}
	
	generateBg(){
		this.bgGradient = this.context.createRadialGradient(
			this.canvas.width/2, this.canvas.height/2, 0.1*this.canvas.width/2,
			this.canvas.width/2, this.canvas.height/2, 1.3*this.canvas.width/2
		);
		this.bgGradient.addColorStop(0,"#222");
		this.bgGradient.addColorStop(1,"#000");
		
		this.stars = [[],[],[]];
		for(var i = 0; i < 300; i++)
			this.stars[0].push({x: Math.random(), y: Math.random()});
		
		for(var i = 0; i < 100; i++)
			this.stars[1].push({x: Math.random(), y: Math.random()});
		
		this.starsOffset = [0, 0, 0];
	}
	
	draw(){
		this.context.save();
		// Background
		this.context.fillStyle = this.bgGradient;
		this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
		
		this.context.fillStyle = "#FFF";
		
		for(var l = 0; l < this.stars.length; l++){
			for(var i = 0; i < this.stars[l].length; i++){
				var coords = {x: this.canvas.width*this.stars[l][i].x, y: this.canvas.height*this.stars[l][i].y};
				coords.y += this.canvas.height*this.starsOffset[l];
				if(coords.y > this.canvas.height)
					coords.y -= this.canvas.height;
				this.context.fillRect(
					coords.x,
					coords.y,
					1+l, 1+l
				);
			}
		}
		
		this.context.translate(0, this.canvas.height);
		this.context.scale(this.scale, this.scale);
		
		// Entities
		for(var e in this.entities){
			for(var i = 0; i < this.entities[e].length; i++){
				this.entities[e][i].draw(this.context);
			}
		}
		this.playerShip.draw(this.context);
		
		this.context.restore();
	}
	
	update(){
		// Background offset
		this.starsOffset[0] += 0.005;
		this.starsOffset[1] += 0.004;
		
		for(var i = 0; i < this.starsOffset.length; i++)
			if(this.starsOffset[i] >= 1)
				this.starsOffset[i] -= 1;
				
		// Controls
		if(this.controls.left)
			this.playerShip.move(-1, 0);
		if(this.controls.right)
			this.playerShip.move(1, 0);
		if(this.controls.up)
			this.playerShip.move(0, -1);
		if(this.controls.down)
			this.playerShip.move(0, 1);
		if(this.controls.shoot)
			this.playerShip.shoot();
				
		// Entities update
		this.playerShip.update();
		for(var e in this.entities){
			var entities = this.entities[e];
			for(var i = 0; i < entities.length; i++){
				entities[i].update();
				if(entities[i].destroy || entities[i].x < -100 || entities[i].x > 1100 || entities[i].y > 100 || entities[i].y < -2500){
					entities.splice(i, 1);
					i--;
				}
			}
		}
		
		// Collision
		// Player - Enemies
		for(var i = 0; i < this.entities.enemies.length; i++){
			if(this.playerShip.collision(this.entities.enemies[i])){
				if(this.playerShip.hp > 0)
					this.playerShip.hp--;
				this.entities.enemies[i].destroy = true;
					if(this.entities.enemies[i].onDestroy)
						this.entities.enemies[i].onDestroy();
			}
			// Player shots - Enemies
			for(var j = 0; j < this.entities.playerShots.length; j++){
				if(this.entities.playerShots[j].collision(this.entities.enemies[i])){
					this.entities.enemies[i].destroy = true;
					if(this.entities.enemies[i].onDestroy)
						this.entities.enemies[i].onDestroy();
					this.entities.playerShots[j].destroy = true;
					if(this.entities.playerShots[j].onDestroy)
						this.entities.playerShots[j].onDestroy();
				}
			}
		}
		// Player - Enemy shots
		for(var i = 0; i < this.entities.enemyShots.length; i++){
			if(this.playerShip.collision(this.entities.enemyShots[i])){
				this.entities.enemyShots[i].destroy = true;
				if(this.entities.enemyShots[i].onDestroy)
					this.entities.enemyShots[i].onDestroy();
				if(this.playerShip.hp > 0)
					this.playerShip.hp--;
			}
		}
	}
}

