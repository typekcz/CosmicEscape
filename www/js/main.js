var current_color = "blue";
function change_color(color){
	$(".touchslider")[0].classList.remove(current_color);
	$(".touchslider")[0].classList.add(color);
	current_color = color;
	localStorage.setItem("color", current_color);
}

function get_current_player_ship(){
	return $(".touchslider-item:nth-child("+($(".touchslider").data("touchslider").current+1)+") img."+current_color)[0];
}

change_color(localStorage.getItem("color") || "blue");
//$(".touchslider-nav-item")[parseInt(localStorage.getItem("ship")) + 1].classList.add("touchslider-nav-item-current");

jQuery(function($) {
    $(".touchslider").touchSlider({});
  	
	$(".touchslider").data("touchslider").step(parseInt(localStorage.getItem("ship")), false);
});

// JQuery Mobile transparent dialog
$(document).on('pagebeforeshow', 'div[data-role="dialog"]', function (e, ui) {
    ui.prevPage.addClass("ui-dialog-background ");
});

$(document).on('pagehide', 'div[data-role="dialog"]', function (e, ui) {
    $(".ui-dialog-background ").removeClass("ui-dialog-background ");
});

window.onbeforeunload = function(){
	localStorage.setItem("ship", $(".touchslider").data("touchslider").current);
}

////////////////
///// Game /////
////////////////

function game_over(){
	$.mobile.changePage('#gameOver',{transition:'pop', role:'dialog'});
	game.playerShip = null;
}

var pause = true;
var game = null;

function game_start(){
	localStorage.setItem("ship", $(".touchslider").data("touchslider").current);

	game = new Game(document.querySelector("#game canvas"));
	Entity.prototype.game = game;
	
	game.draw();
	pause = false;
}

$("#game").on("pagebeforeshow", function(e){
	game_start();
});

window.onkeydown = function(event){
	if(game)
		switch(event.keyCode){
			case 87: // Up
				game.controls.up = true;
				break;
			case 83: // Down
				game.controls.down = true;
				break;
			case 65: // Left
				game.controls.left = true;
				break;
			case 68: // Right
				game.controls.right = true;
				break;
			case 32: // Space
				game.controls.shoot = true;
				break;
		}
}

window.onkeyup = function(event){
	switch(event.keyCode){
		case 87: // Up
			game.controls.up = false;
			break;
		case 83: // Down
			game.controls.down = false;
			break;
		case 65: // Left
			game.controls.left = false;
			break;
		case 68: // Right
			game.controls.right = false;
			break;
		case 32: // Space
			game.controls.shoot = false;
			break;
	}
}

setInterval(function(){
	if(pause) return;
	game.update();
	game.draw();
}, 1000/30);

