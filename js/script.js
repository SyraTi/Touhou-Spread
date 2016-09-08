var num = 0;
var arrTxt = new Array();
$(document).ready(function() {
	$('#js_mTxt').css({
		'line-height' : $(window).height()+'px'
	});
	arrTxt[0] = '東方PROJECT';
	arrTxt[1] = '原作:上海アリス幻樂団';
	arrTxt[2] = '东方Project完全安利计划,TOUHOU PROJECT'
	switchTxt(arrTxt[num]);
	itv = setInterval('switchTxt(arrTxt[num])',2000);
});

function switchTxt(txt){
	$('#js_mTxt').text(txt);
	$('#js_mTxt').fadeIn(1000, function() {
		$(this).fadeOut(1000, function() {});
	});
	if(num++ == 3){
		clearInterval(itv);
	}
}