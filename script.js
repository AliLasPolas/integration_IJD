'use strict';

let scroll = 0;

$(function(){
	console.info('tout roule chef');
	$(window).on('scroll', function(e) {
		if (scroll < 110) {
			if ( $(document).scrollTop() > 110 ) {
				$('.navplaceholder').show();
				$('header>nav').css('position', 'fixed');
				$('header>nav').css('top', '-80px');
				$('header>nav').css('padding-top', '0');
				$('header>nav').css('padding-bottom', '0');
				$('header>nav').velocity({
					top: '0px'
				}, 300);
			}
		}
		else{
			if($(document).scrollTop() < 110){
				$('.navplaceholder').hide();
				$('header>nav').css('position', 'relative');
				$('header>nav').css('top', '0px');
				$('header>nav').css('padding-top', '10px');
				$('header>nav').css('padding-bottom', '10px');
			}
		}
		scroll = $(document).scrollTop();
	});

});