'use strict';

/* Make jQuery available in global */
console.log(`jQuery ${$.fn.jquery} is loaded`);
window.$ = $;
window.jQuery = $;

/* Import project styles and components */
require('script-loader!slick-carousel');
import 'es6-promise/auto';
import './modules/ymap';
import '../sass/css.scss';
import OnResize from './modules/resize';
import scrollup from './modules/scrollup';

/* Define project components and variables */
var	mobileView = window.matchMedia("(max-width: 768px)").matches,
		resizeAlign = new OnResize(),
		scrollTiming = 0;

/************************
****** Mobile menu ******
*************************/

$('.c-hamburger').on('click', function(){

	$(this).toggleClass('is-active');
	// $('.site-nav').slideToggle();

	$('.site-nav').toggleClass('act');

});


/***********************
******** SLIDER ********
************************/

$('.js-slider-1').slick({
	prevArrow: $('.js-slider-1-left'),
	nextArrow: $('.js-slider-1-right'),
	slidesToShow: 5,
	responsive: [
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 769,
      settings: {
				slidesToShow: 2,
				arrows: false
      }
    },
    {
      breakpoint: 400,
      settings: {
				slidesToShow: 1
      }
    }
  ]
});

/************************
******* Scroll Up *******
*************************/

$(document).scroll(function(){

	if ( !scrollTiming ) {

		scrollTiming = setTimeout(function(){

			var scroll = $('body').scrollTop() ? $('body').scrollTop() : $('html').scrollTop();
			scroll >= 300 ? $('.scrollup').addClass('act') : $('.scrollup').removeClass('act');
			scrollTiming = 0;

		},300);

	}

});

$('.scrollup').scrollUp();

/******************************
***** Toggle site options *****
*******************************/

// var $options = $('.site-options');

// if( $options.length ){

// 		$options.find('[data-options]').click(function(e){

// 			$options.toggleClass('open');
// 			$options.toggleClass($(this).attr('data-options'));
// 		});

// }

var options = document.querySelector('.site-options');

if (options) {
	/**
	 * 
	 * @param {string} data
	 * Set or remove class from [data-options]
	 */
	var switchRightScreen = function(data){
		options.classList.toggle('open');
		options.classList.toggle(data);
	}

	document.querySelector('[data-options]').addEventListener('click', function(){

		var targetForm = this.dataset.options,
				openedForm = options.classList.item(2);
		
		if ( openedForm === 'open-result' ) {

			options.classList.remove('open-result');
			options.classList.remove('open');

		}

		switchRightScreen(targetForm);

	});
}
