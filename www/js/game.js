
class Game {
	constructor(canvas){
		this.canvas = canvas;
		this.context = canvas.getContext("2d");
		this.resize();
		this.generateBg();
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
		this.bgGradient.addColorStop(0,"#111");
		this.bgGradient.addColorStop(1,"#000");
		
		this.stars = [];
		for(var i = 0; i < 500; i++)
			this.stars.push({x: Math.random(), y: Math.random()});
	}
	
	draw(){
		this.context.fillStyle = this.bgGradient;
		this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
		
		this.context.fillStyle = "#FFF";
		for(var i = 0; i < this.stars.length; i++){
			this.context.fillRect(
				this.canvas.width*this.stars[i].x,
				this.canvas.height*this.stars[i].y,
				1, 1
			);
		}
	}
};
