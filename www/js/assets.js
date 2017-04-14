
var Assets = {
	images: {},
	
	addImage: function(path){
		var img = document.createElement("IMG");
		img.hidden = true;
		img.src = path;
		document.body.appendChild(img);
		
		this.images[path] = img;
	}
}