
function Meteor(preset, x, y){
	Entity.call(this, preset, x, y);
	this.angle = Math.random()*Math.PI*2;
	this.rotatingSpeed = 0.05*(Math.random()-0.5);
}

Meteor.prototype = {
	__proto__: Entity.prototype,
	onDestroy: function(){
		var anglePart = (Math.PI*2)/this.numberOfSubMeteors;
		for(var i = 0; i < this.numberOfSubMeteors; i++){
			var meteorType = Math.floor(Math.random() * this.subMeteors.length);
			var m = new Meteor(this.subMeteors[meteorType] , this.x, this.y);
			m.movingDirection = rotateVec({x: 0, y: 1}, i*anglePart + (Math.random()*0.4 - 0.2));
			m.move(m.movingDirection.x, m.movingDirection.y);
			game.entities.enemies.push(m);
		}
	}
};

