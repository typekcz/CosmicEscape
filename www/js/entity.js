
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
	}
	
	draw(ctx){
		ctx.drawImage(this.texture, this.x - this.texture.width/2, this.y - this.texture.height/2);
	}
	
	update(){
		this.move(this.movingDirection.x, this.movingDirection.y);
	}
	
	collision(entity){
		return ((this.x - entity.x)*(this.x - entity.x) + (this.y - entity.y)*(this.y - entity.y)) < (this.radiusSquared+entity.radiusSquared);
	}
	
	move(x, y){
		this.x += x*this.speed;
		this.y += y*this.speed;
	}
	
	shoot(){
		for(var i = 0; i < this.shotDirections.length; i++){
			var shot = new Entity(this.shotPrototype, this.x, this.y);
			shot.movingDirection = {x: this.shotDirections[i].x, y: this.shotDirections[i].y};
			console.log(shot);
			if(this.enemy)
				this.game.entities.enemyShots.push(shot);
			else
				this.game.entities.playerShots.push(shot);
		}
	}
};
