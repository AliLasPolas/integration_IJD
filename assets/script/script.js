'use strict';

let scroll = 0;


$(function(){
	console.info('tout roule chef');
	$(window).on('scroll', function(e) {

		if (scroll < 110) {
			if ( $(document).scrollTop() > 110  && $( document ).width() > 961 ) {
				$('.navplaceholder').show();
				$('header>nav').css('position', 'fixed');
				$('header>nav').css('top', '-80px');
				$('header>nav').css('padding-top', '0');
				$('header>nav').css('padding-bottom', '0');
				$('header>nav').css('background-color', 'white');
				$('header>nav').css('box-shadow', '0px 4px 2px -2px rgba(192,192,192,0.3)');
				$('header>nav').velocity({
					top: '0px'
				}, 300);
			}
		}
		else{
			if($(document).scrollTop() < 110 && $( document ).width() > 961 ){
				$('.navplaceholder').hide();
				$('header>nav').css('position', 'relative');
				$('header>nav').css('top', '0px');
				$('header>nav').css('background-color', 'transparent');
				$('header>nav').css('box-shadow', 'unset');
				$('header>nav').css('padding-top', '10');
				$('header>nav').css('padding-bottom', '10');
			}
		}
		scroll = $(document).scrollTop();
	});

});