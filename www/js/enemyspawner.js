var EnemySpawner = {
	slidingFleet1: function(game){
		for(var i = 0; i < 5; i++){
			var e = new Entity(EntityPresets.enemyBlack1, 500+i*100, -2000-i*100);
			game.entities.enemies.push(e);
		}
		return 180;
	},
	circlingFleet1: function(game){
		for(var i = 0; i < 5; i++){
			var e = new Entity(EntityPresets.enemyBlack3, 200+i*100, -2000-i*100);
			e.movingDirection.y = 1;
			e.movingFunctionAngle = -i*0.2;
			game.entities.enemies.push(e);
		}
		return 200;
	},
	circlingFleet2: function(game){
		var rand = Math.round(Math.random()*4);
		for(var i = 0; i < 2+rand; i++){
			var rem = (i%2 == 0);
			var e = new Entity(EntityPresets.enemyBlack3, 500+((rem == 0)? -150 : 150), -2000-i*100);
			e.movingFunctionDirection = (rem == 0)? -1 : 1;
			e.movingDirection.y = 1;
			game.entities.enemies.push(e);
		}
		return 200;
	},
	meteor: function(game){
		var angle = (Math.random()-0.5)*Math.PI*0.5;
		
		var e = new Meteor((Math.round(Math.random()))? EntityPresets.meteorBrown_big : EntityPresets.meteorGrey_big, Math.random()*600+200, -2000);
		e.movingDirection = rotateVec({x: 0, y: Math.random()*0.4+0.8}, angle);
		
		game.entities.enemies.push(e);
		return 0;
	},
	enemy4: function(game){
		game.entities.enemies.push(new Entity(EntityPresets.enemyBlack4, Math.random()*400+300, -2000));
		return 100;
	},
	enemy5: function(game){
		game.entities.enemies.push(new Entity(EntityPresets.enemyBlack5, Math.random()*400+300, -2000));
		return 100;
	},
	
	difficulties: [
		{
			spawns: [
				{ func: "slidingFleet1",		chance: 5 },
				{ func: "circlingFleet1",		chance: 4 },
				{ func: "circlingFleet2",		chance: 4 },
				{ func: "meteor",				chance: 20 },
				{ func: "enemy4",				chance: 3 },
				{ func: "enemy5",				chance: 3 }
			],
			delay: 15
		}
	],
	
	difficulty: 0,
	randMax: 0,
	delay: 0,
	setDifficulty: function(d){
		this.difficulty = d;
		this.randMax = 0;
		for(var i = 0; i < this.difficulties[d].spawns.length; i++){
			this.randMax += this.difficulties[d].spawns[i].chance;
		}
	},
	spawn: function(game){
		if(this.delay <= 0){
			this.delay = this.difficulties[this.difficulty].delay;
			var rand = Math.random()*this.randMax;
			for(var i = 0; i < this.difficulties[this.difficulty].spawns.length; i++){
				if(rand < this.difficulties[this.difficulty].spawns[i].chance){
					this.delay = this[this.difficulties[this.difficulty].spawns[i].func](game);
					return;
				} else {
					rand -= this.difficulties[this.difficulty].spawns[i].chance;
				}
			}
		} else
			this.delay--;
	}
};

