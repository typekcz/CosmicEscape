var EntityPresets = {
	create: function(preset, x, y){
		var obj = {};
		obj.__proto__ = this[preset];
		obj.create(x, y);
		return obj;
	},
	playerShip1_blue: {
		__proto__: Entity.prototype,
		enemy: false,
		speed: 8,
		cooldown: 10,
		texture: Assets.images["img/playerShip1_blue.png"],
		damageTextures: [
			Assets.images["img/Damage/playerShip1_damage1.png"],
			Assets.images["img/Damage/playerShip1_damage2.png"],
			Assets.images["img/Damage/playerShip1_damage3.png"]
		],
		radiusSquared: 1000,
		shotOrigins: [
			{
				position: {x: -42, y: 0}, 
				direction: {x: 0, y: -1}
			},{
				position: {x: 42, y: 0},
				direction: {x: 0, y: -1}
			}
		],
		shotPrototype: {
			__proto__: Entity.prototype,
			speed: 15,
			texture: Assets.images["img/Lasers/laserBlue01.png"],
			radiusSquared: 100
		}
	},
	enemyBlack1: {
		__proto__: Entity.prototype,
		enemy: true,
		speed: 5,
		texture: Assets.images["img/Enemies/enemyBlack1.png"],
		radiusSquared: 1000,
		shotOrigins: [{
			position: {x: 0, y: 0}, 
			direction: {x: 0, y: 1}
		}],
		shotPrototype: {
			__proto__: Entity.prototype,
			speed: 15,
			texture: Assets.images["img/Lasers/laserRed10.png"],
			radiusSquared: 100
		},
		cooldown: 30,
		moveFunction: function(){
			if(typeof(this.movingFunctionDirection) == "undefined")
				this.movingFunctionDirection = -1;
			this.move(this.movingFunctionDirection, 0.5);
			if(this.x*this.x <= this.radiusSquared)
				this.movingFunctionDirection = 1;
			if((this.x-1000)*(this.x-1000) <= this.radiusSquared)
				this.movingFunctionDirection = -1;
		}
	},
	enemyBlack4: {
		__proto__: Entity.prototype,
		enemy: true,
		speed: 5,
		texture: Assets.images["img/Enemies/enemyBlack4.png"],
		radiusSquared: 1000,
		shotOrigins: [
			{
				position: {x: 0, y: 0}, 
				direction: {x: 0, y: 1}
			},{
				position: {x: 0, y: 0}, 
				direction: {x: -0.5, y: 0.866025}
			},{
				position: {x: 0, y: 0}, 
				direction: {x: -0.866025, y: 0.5}
			},{
				position: {x: 0, y: 0}, 
				direction: {x: -1, y: 0}
			},{
				position: {x: 0, y: 0}, 
				direction: {x: 0.5, y: 0.866025}
			},{
				position: {x: 0, y: 0}, 
				direction: {x: 0.866025, y: 0.5}
			},{
				position: {x: 0, y: 0}, 
				direction: {x: 1, y: 0}
			}
		],
		shotPrototype: {
			__proto__: Entity.prototype,
			speed: 15,
			texture: Assets.images["img/Lasers/laserRed08.png"],
			radiusSquared: 100
		},
		cooldown: 30,
		moveFunction: function(){
			if(typeof(this.movingFunctionDirection) == "undefined")
				this.movingFunctionDirection = -1;
			this.move(this.movingFunctionDirection, 0.5);
			if(this.x*this.x <= this.radiusSquared)
				this.movingFunctionDirection = 1;
			if((this.x-1000)*(this.x-1000) <= this.radiusSquared)
				this.movingFunctionDirection = -1;
		}
	}
}
