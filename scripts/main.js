$(function(){

	/* Menu nav  toggle*/

	$("#nav_toggle").on("click", function(event) {
		event.preventDefault();

		$("#nav_toggle").toggleClass("active");	
		$(".menu__nav").toggleClass("active");
	});

	/* Slider in Section 3 - Recent Works */

	$('.recent__slider').slick({
		slide: '.slider__item',
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 1500,
		infinite: true,
		dots: true,
		arrows: true,
		draggable: true,
		pauseOnDotsHover: true,
		pauseOnHover: false,
		prevArrow: '.left__arrow',
		nextArrow: '.right__arrow',
		responsive: [
		{
			breakpoint: 768,
			settings: {						
				arrows: false
			}
		}
		]
	});

	/* Slider in Section 4 - Meet Our Team */

	$('.team__slider').slick({
		slide: '.slider__element',
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 1500,
		infinite: true,
		dots: false,
		arrows: true,
		draggable: true,
		pauseOnDotsHover: true,
		pauseOnHover: false,
		prevArrow: '.left__arrow--team',
		nextArrow: '.right__arrow--team',
		responsive: [
		{
			breakpoint: 1230,
			settings: {
				arrows: false,
				dots: true
			}
		},
		{
			breakpoint: 875,
			settings: {
				arrows: false,
				dots: true,				
				centerMode: true,
				centerPadding: '15px',
				slidesToShow: 2
			}
		},
		{
			breakpoint: 640,
			settings: {
				arrows: false,
				dots: true,				
				centerMode: true,
				centerPadding: '15px',
				slidesToShow: 1
			}
		}
		]
	});
});