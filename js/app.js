$(document).ready(function(){

	$("#header__burger").on("click", function(event) {
		event.preventDefault();

		$("#header__burger").toggleClass("active");	
		$(".header__nav").toggleClass("active");
	});


	$('.works__slider').slick({
		arrows:true,
		dots:true,
		adaptiveHeight: true,
		autoplay:true,
        autoplaySpeed:1500,
        draggable:true,
        swipe:true,
        touchMove:true,
        waitForAnimate:false,
        // centerMode:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnDotsHover: true,
	});

	$('.team__slider').slick({
		arrows:true,
		dots:false,
		adaptiveHeight: true,
		autoplay:true,
        autoplaySpeed:1500,
        draggable:true,
        swipe:true,
        touchMove:true,
        waitForAnimate:false,
        // centerMode:true,
		slidesToShow: 3,
		slidesToScroll: 1,
	});
});