btn = $('#btn');
forward = $('#forward');
player = $('#player');
var firstUrl;
urlList = [];
now = 0;
oAudio = document.getElementById('player');  



function initPlayer(){
	oAudio.volume = 0.2;
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
	loadFirstMusic();
}


function loadFirstMusic()
{
	$.ajax({
		url: 'php/player.php',
		type: 'POST',
		data:{'op' : 'loadFirstMusic'}
	})
	.done(function(data) {
		player.attr({
			src : data
		});
		//oAudio.play();
		loadMusicList();
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
}





function loadMusicList(){
	$.ajax({
		url: 'php/player.php',
		type: 'POST',
		dataType: 'json',
		data:{'op' : 'loadMusicList'}
	})
	.done(function(data) {
		urlList = data;
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