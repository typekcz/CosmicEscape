
class Entity {
	constructor(preset, x, y){
		this.__proto__ = preset;
		this.create(x, y);
	}
	
	create(x, y){
		this.x = x;
		this.y = y;
		this.destroy = false;
		this.movingDirection = {x: 0, y: 0};
		if(typeof(this.cooldown) != "undefined")
			this.currentCooldown = this.cooldown;
	}
	
	draw(ctx){
		ctx.drawImage(this.texture, this.x - this.texture.width/2, this.y - this.texture.height/2);
	}
	
	update(){
		if(typeof(this.moveFunction) != "undefined")
			this.moveFunction();
		else
			this.move(this.movingDirection.x, this.movingDirection.y);
			
		this.currentCooldown--;
			
		if(this.enemy){
			this.shoot();
		}
	}
	
	collision(entity){
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
				shot.movingDirection = {x: this.shotOrigins[i].direction.x, y: this.shotOrigins[i].direction.y};

				if(this.enemy)
					this.game.entities.enemyShots.push(shot);
				else
					this.game.entities.playerShots.push(shot);
			}
			this.currentCooldown = this.cooldown;
		}
	}
};

