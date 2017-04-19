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
	enemyBlack2: {
		__proto__: Entity.prototype,
		enemy: true,
		speed: 5,
		texture: Assets.images["img/Enemies/enemyBlack2.png"],
		radiusSquared: 1000,
		shotOrigins: [{
			position: {x: 0, y: 0}, 
			direction: {x: 0, y: 1}
		}],
		shotPrototype: {
			__proto__: Entity.prototype,
			speed: 15,
			texture: Assets.images["img/Lasers/laserRed11.png"],
			radiusSquared: 100,
			rotatingSpeed: 0.2,
			moveFunction: function(){
				if(typeof(this.movingFunctionDirection) == "undefined")
					this.movingFunctionDirection = -1;
				this.movingDirection = rotateVec(this.movingDirection, 0.1*this.movingFunctionDirection);
				this.move(this.movingDirection.x, this.movingDirection.y);
				if(this.movingDirection.x < -0.5)
					this.movingFunctionDirection = -1;
				if(this.movingDirection.x > 0.5)
					this.movingFunctionDirection = 1;
			}
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
	enemyBlack3: {
		__proto__: Entity.prototype,
		enemy: true,
		speed: 8,
		texture: Assets.images["img/Enemies/enemyBlack3.png"],
		radiusSquared: 1000,
		shotOrigins: [{
			position: {x: 0, y: 0}, 
			direction: {x: 0, y: 1}
		}],
		shotPrototype: {
			__proto__: Entity.prototype,
			speed: 20,
			texture: Assets.images["img/Lasers/laserRed10.png"],
			radiusSquared: 100
		},
		cooldown: 20,
		moveFunction: function(){
			if(typeof(this.movingFunctionDirection) == "undefined")
				this.movingFunctionDirection = 1;
			if(typeof(this.movingFunctionAngle) == "undefined")
				this.movingFunctionAngle = Math.PI/2;
			var vec = {x: 1.5, y: 0};
			vec = rotateVec(vec, this.movingFunctionAngle);
			this.move(vec.x, vec.y + 0.5);
			this.angle = this.movingFunctionAngle-Math.PI/2;
			
			this.movingFunctionAngle += 0.04 * this.movingFunctionDirection;
			if(this.movingFunctionAngle >= 2*Math.PI)
				this.movingFunctionAngle -= 2*Math.PI;
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
	},
	meteorBrown_big1: {
		__proto__: Meteor.prototype,
		speed: 5,
		texture: Assets.images["img/Meteors/meteorBrown_big1.png"],
		radiusSquared: 1000,
		numberOfSubMeteors: 5,
		subMeteors: [
			{
				__proto__: Meteor.prototype,
				speed: 7,
				texture: Assets.images["img/Meteors/meteorBrown_med1.png"],
				radiusSquared: 300,
				numberOfSubMeteors: 0
			}, {
				__proto__: Meteor.prototype,
				speed: 7,
				texture: Assets.images["img/Meteors/meteorBrown_med3.png"],
				radiusSquared: 300,
				numberOfSubMeteors: 0
			}
		]
	},
}
