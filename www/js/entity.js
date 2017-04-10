
class Entity {
	constructor(x, y, texture){
		this.x = x;
		this.y = y;
		this.texture = texture;
	}
	draw(ctx){
		ctx.drawImage(this.texture, this.x, this.y);
	}
}