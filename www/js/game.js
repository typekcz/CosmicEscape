
class Game {
	constructor(canvas){
		this.canvas = canvas;
		this.context = canvas.getContext("2d");
		this.resize();
		this.generateBg();
		this.entities = [];
		
		this.entities.push(new Entity(100, 100, Assets.images["img/playerShip1_blue.png"]));
	}
	
	resize(){
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
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
		
		for(var i = 0; i < this.entities.length; i++){
			this.entities[i].draw(this.context);
		}
	}
	
	update(){
		this.starsOffset[0] += 0.005;
		this.starsOffset[1] += 0.004;
		
		for(var i = 0; i < this.starsOffset.length; i++)
			if(this.starsOffset[i] >= 1)
				this.starsOffset[i] -= 1;
	}
};
