var EnemySpawner = {
	slidingFleet1: function(game){
		for(var i = 0; i < 5; i++){
			var e = new Entity(EntityPresets.enemyBlack1, 500+i*100, -1500-i*100);
			game.entities.enemies.push(e);
		}
	},
	circlingFleet1: function(game){
		for(var i = 0; i < 5; i++){
			var e = new Entity(EntityPresets.enemyBlack3, 500+i*100, -1500-i*100);
			e.movingDirection.y = 1;
			game.entities.enemies.push(e);
		}
	},
	circlingFleet2: function(game){
		for(var i = 0; i < 5; i++){
			var rem = (i%2 == 0);
			var e = new Entity(EntityPresets.enemyBlack3, 500+((rem == 0)? -150 : 150), -1500-i*100);
			e.movingFunctionDirection = (rem == 0)? -1 : 1;
			e.movingDirection.y = 1;
			game.entities.enemies.push(e);
		}
	},
	meteor: function(game){
		var angle = (Math.random()-0.5)*Math.PI*0.5;
		
		var e = new Meteor(EntityPresets.meteorBrown_big1, Math.random()*600+200, -1500);
		e.movingDirection = rotateVec({x: 0, y: Math.random()*0.4+0.8}, angle);
		
		game.entities.enemies.push(e);
	}
};
