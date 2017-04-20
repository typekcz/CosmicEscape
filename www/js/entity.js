
class Entity {
	constructor(preset, x, y){
		this.__proto__ = preset;
		this.create(x, y);
	}
	
	create(x, y){
		this.x = x;
		this.y = y;
		this.angle = 0;
		this.destroy = false;
		if(typeof(this.rotatingSpeed) == "undefined")
			this.rotatingSpeed = 0;
		if(typeof(this.moveFunction) == "undefined")
			this.moveFunction = null;
		if(typeof(this.shootFunction) == "undefined")
			this.shootFunction = null;
		if(typeof(this.onDestroy) == "undefined")
			this.onDestroy = null;
		this.movingDirection = {x: 0, y: 0};
		if(typeof(this.cooldown) != "undefined")
			this.currentCooldown = this.cooldown;
	}
	
	draw(ctx){
		if(this.angle == 0)
			ctx.drawImage(this.texture, this.x - this.texture.width/2, this.y - this.texture.height/2);
		else {
			ctx.save();
			ctx.translate(this.x, this.y);
			ctx.rotate(this.angle);
			ctx.drawImage(this.texture, -this.texture.width/2, -this.texture.height/2);
			ctx.restore();
		}
	}
	
	update(){
		if(this.moveFunction)
			this.moveFunction();
		this.move(this.movingDirection.x, this.movingDirection.y);
			
		this.angle += this.rotatingSpeed;
		if(this.angle >= 2*Math.PI)
			this.angle -= 2*Math.PI;
			
		this.currentCooldown--;
			
		if(this.enemy && (!this.shootFunction || this.shootFunction())){
			this.shoot();
		}
	}
	
	collision(entity){
		if(this.destroy || entity.destroy)
			return false;
		return ((this.x - entity.x)*(this.x - entity.x) + (this.y - entity.y)*(this.y - entity.y)) < (this.radiusSquared+entity.radiusSquared);
	}
	
	move(x, y){
		this.x += x*this.speed;
		this.y += y*this.speed;
	}
	
	shoot(){
		if(this.currentCooldown <= 0){
			for(var i = 0; i < this.shotOrigins.length; i++){
				var shot = new Entity(this.shotPrototype, this.x + this.shotOrigins[i].position.x, this.y + this.shotOrigins[i].position.y);
				var movingVec = rotateVec({
					x: this.shotOrigins[i].direction.x, 
					y: this.shotOrigins[i].direction.y
				}, this.angle);
				movingVec.x += this.movingDirection.x*this.speed/shot.speed;
				movingVec.y += this.movingDirection.y*this.speed/shot.speed;
				shot.movingDirection = movingVec;

				if(this.enemy)
					this.game.entities.enemyShots.push(shot);
				else
					this.game.entities.playerShots.push(shot);
			}
			this.currentCooldown = this.cooldown;
		}
	}
};

