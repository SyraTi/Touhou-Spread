btn = $('#btn');
forward = $('#forward');
player = $('#player');
urlList = [];
now = 0;
oAudio = document.getElementById('player');  

$(document).ready(function() {
	init();
	getMusic();
});

function init(){
	player.bind('ended', function(event) {
		nextMusic();
	});

	forward.click(function(event) {
		nextMusic();	/* Act on the event */
	});


	btn.click(function(event) {
		if($(this).hasClass('glyphicon-stop')){
			$(this).removeClass('glyphicon-stop').addClass('glyphicon-play');
			oAudio.pause();
		}
		else{
			$(this).removeClass('glyphicon-play').addClass('glyphicon-stop');
			oAudio.play();
		}
	});
}
function getMusic(){
	oAudio.volume = 0.2;
	$.ajax({
		url: 'php/player.php',
		type: 'GET',
		dataType: 'json'
	})
	.done(function(data) {
		urlList = data;
		nextMusic();
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
}

function nextMusic(){
	player.attr({
		src : urlList[now]
	});
	oAudio.play();
	now++;
}