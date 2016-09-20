bgImg = ['bg1.png','bg2.png','bg3.jpg'];

$(document).ready(function() {

	initPage();
	initPlayer();

});


function initPage(){


	bg = parseInt(Math.random()*(bgImg.length));
	$('.container-fluid,.header,.footer').css({
		background: 'url("img/'+bgImg[bg]+'") center/cover no-repeat',
	 });
	// $square = $('.square');
	// for(i = 0; i < $square.length; i++)
	// {
	// 	$square.eq(i).css({
	// 		background: 'rgba('+parseInt(Math.random()*255)+','+parseInt(Math.random()*255)+','+parseInt(Math.random()*255)+',0.4)',
	// 		height: $square.eq(i).outerWidth()
	// 	});
	// }
	resizePage();
	$(window).resize(function(event) {
		resizePage();
	});
}



function resizePage(){
		$('.contentClip>div').remove();
		wHeight = $(window).height();
		wWidth = $(window).width();
		$('.container-fluid').css({
			height : wHeight+'px'
		});
		$('.header,.footer').css({
			height : wHeight+20+'px'
		});
		 // clip($('.header'));
		$('.header').css({
			clip : 'rect(10px,'+wWidth+'px,'+0.075*wHeight+'px,0px)'
		});
		$('.footer').css({
			clip : 'rect('+(0.9*wHeight)+'px,'+wWidth+'px,'+wHeight+'px,0px)'
		});

		$('.headerShadow').css({
			height : wHeight * 0.075+'px'
		});
		$('.footerShadow').css({
			height : wHeight * 0.1 +'px',
			top : (wHeight * 0.9 -10 )  +'px'
		});


		$('.content').css({
			top : wHeight * 0.1 + 'px',
		});
		$('.contentClip').css({
			height: wHeight,
			width: wWidth
		});

		if(wWidth >= 992){
			$('.articles').css({
				height: 0.75 * wHeight,
				'margin-top' : 0
			});
		}
		else{
			$('.articles').css({
				'margin-top' : '15px'
			});
		}

		for(i = 0; i < $('.content>.row').children().length; i++)
		{
			clip($('.content>.row').children()[i].classList[0],wWidth,wHeight);
		}
		clip('menu',wWidth,wHeight);

		// $('.content,.profile').css({
		// 	height: wHeight * 0.75 + 'px'
		// });




}


function clip(className,wWidth,wHeight){
	$model = $('.'+className);
	oTop = $model.offset().top - parseInt($model.css('top').substr(0,$model.css('top').lastIndexOf("px"))) ;
	oBottom = oTop + $model.height();
	oLeft = $model.offset().left - parseInt($model.css('left').substr(0,$model.css('left').lastIndexOf("px"))) + ($model.outerWidth() - $model.width())/2;
	oRight = oLeft + $model.width();
	$blur = $('<div class="'+className+'Blur contentBlur"></div>').load();
	$shadow = $('<div class="'+className+'Shadow contentShadow"></div>').load();
	$blur.css({
		position: 'absolute',
		clip: 'rect('+oTop+'px,'+oRight+'px,'+oBottom+'px,'+oLeft+'px)',
		height : $('.contentClip').height(),
		background: 'url("img/'+bgImg[bg]+'") center/cover no-repeat',
		width:wWidth,
		'z-index':0
	});
	$shadow.css({
		position: 'absolute',
		height: $model.height(),
		width: $model.width(),
		top : oTop,
		left : oLeft
	});
	$('.contentClip').append($blur).append($shadow);
}


/*
	list




*/



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
