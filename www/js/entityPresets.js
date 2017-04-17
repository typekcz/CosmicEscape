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
		speed: 5,
		texture: Assets.images["img/playerShip1_blue.png"],
		radiusSquared: 1000,
		shotDirections: [{x: 0, y: -1}],
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
		radiusSquared: 1000
	}
}
