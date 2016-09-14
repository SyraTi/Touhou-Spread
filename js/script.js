bgImg = ['bg1.png','bg2.png','bg3.jpg'];

$(document).ready(function() {

	initPage();
	initPlayer();
	
});


function initPage(){
	
	
	bg = parseInt(Math.random()*(bgImg.length));
	$('body,.header,.footer').css({
		background: 'url("img/'+bgImg[bg]+'") center/cover no-repeat',
	 });
	resizePage();
	$(window).resize(function(event) {
		resizePage();
	});
}



function resizePage(){
		wHeight = $(window).height();
		wWidth = $(window).width();
		$('body').css({
			height : wHeight+'px'
		});
		$('.header,.footer').css({
			height : wHeight+10+'px',
			width : wWidth+'px'
		});
		// $('.content,.contentBg').css({
		// 	height: wHeight * 0.7,
		// 	top : wHeight * 0.15
		// });
		$('.profile,.profileBg').css({
			height: wHeight,
		});
		$('.header').css({
			clip : 'rect(0px,'+wWidth+'px,'+0.1*wHeight+'px,0px)'
		});
		$('.footer').css({
			clip : 'rect('+0.9*wHeight+'px,'+wWidth+'px,'+wHeight+'px,0px)'
		});
}

// var num = 0;
// var arrTxt = new Array();
// $(document).ready(function() {
// 	$('#js_mTxt').css({
// 		'line-height' : $(window).height()+'px'
// 	});
// 	arrTxt[0] = '東方PROJECT';
// 	arrTxt[1] = '原作:上海アリス幻樂団';
// 	arrTxt[2] = '东方Project完全安利计划,TOUHOU PROJECT'
// 	switchTxt(arrTxt[num]);
// 	itv = setInterval('switchTxt(arrTxt[num])',2000);
// });

// function switchTxt(txt){
// 	$('#js_mTxt').text(txt);
// 	$('#js_mTxt').fadeIn(1000, function() {
// 		$(this).fadeOut(1000, function() {});
// 	});
// 	if(num++ == 3){
// 		clearInterval(itv);
// 	}
// }