/*
Template Name: Innov Html Template
Author: The Template_mr
Version      : 1.0
*/

(function ($) {

	"use strict";

	
	/*=============================================
		=     Menu sticky & Scroll to top      =
	=============================================*/
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$(".header-area").removeClass("scroll-header");
		} else {
			$(".header-area").addClass("scroll-header");
		}
	});

	// scrollToTop
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	// offcanvas menu
	$(".menu-tigger").on("click", function () {
		$(".extra-info,.offcanvas-overly").addClass("active");
		return false;
	});
	$(".menu-close,.offcanvas-overly").on("click", function () {
		$(".extra-info,.offcanvas-overly").removeClass("active");
	});

	// Preloader
	setTimeout(function () {
		$('.loader-bg').fadeToggle();
	}, 10000);

	// OwlCarousel
	var className = document.querySelectorAll('.carousel');
	className.forEach(function (className) {
		var responsive = $(className).data('responsive');
		var dots = $(className).data('dots');
		var dotsclass = $(className).data('dotsclass');
		var dotclass = $(className).data('dotclass');
		var nav = $(className).data('nav');
		var autoplay = $(className).data('autoplay');
		var navcontainerclass = $(className).data('navcontainerclass');
		var animateout = $(className).data('animateout');
		var animatein = $(className).data('animatein');
		var smartspeed = $(className).data('smartspeed');
		var URLhashListener = $(className).data('urlhashlistener');
		var margin = $(className).data('margin');
		var item = $(className).data('items');
		$(className).owlCarousel({
			loop: true,
			margin: margin,
			animateOut: animateout,
			animateIn: animatein,
			dots: dots,
			autoplay: autoplay,
			dotsClass: dotsclass,
			dotClass: dotclass,
			nav: nav,
			items: item,
			navContainerClass: navcontainerclass,
			URLhashListener: URLhashListener,
			startPosition: 'URLHash',
			smartSpeed: smartspeed,
			navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
			responsive: responsive
		});
	});

	//Slider Text Animation
	$(".banner-slide").on("translate.owl.carousel", function(){
		$(".banner-content h2").removeClass("animate__animated animate__fadeInUp").css("opacity", "0");
		$(".banner-content p").removeClass("animate__animated animate__fadeInUp").css("opacity", "0");
		$(".banner .video-icon, .banner-btn").removeClass("animate__animated animate__fadeInUp").css("opacity", "0");
		$(".banner-form").removeClass("animate__animated animate__fadeInUp").css("opacity", "0");
	});
	
	$(".banner-slide").on("translated.owl.carousel", function(){
		$(".banner-content h2").addClass("animate__animated animate__fadeInUp").css("opacity", "1");
		$(".banner-content p").addClass("animate__animated animate__fadeInUp").css("opacity", "1");
		$(".banner .video-icon, .banner-btn").addClass("animate__animated animate__fadeInUp").css("opacity", "1");
		$(".banner-form").addClass("animate__animated animate__fadeInUp").css("opacity", "1");
	});

	// Skill bar
	$('#bar1').barfiller({ duration: 3000 });
	
	$('#bar2').barfiller({ duration: 3000 });
	
	$('#bar3').barfiller({ duration: 3000 });


	// portfolio
	$('.container').imagesLoaded( function() {
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item'
	  });
	  // filter items on button click
	  $('.portfolio-button').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	  });
	});

	// change is-checked class on buttons
	$('.portfolio-button').each( function( i, buttonGroup ) {
		var $buttonGroup = $( buttonGroup );
		$buttonGroup.on( 'click', 'button', function() {
		$buttonGroup.find('.is-active').removeClass('is-active');
		$( this ).addClass('is-active');
		});
	});


	//Magnific Popup

	$('.video-popup').magnificPopup({
		type: 'iframe',
		iframe: {
			patterns: {
			  youtube: {
				index: 'youtube.com/',
		  
				id: 'v=',
		  
				src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
			  }
		  
			},
		  
			srcAction: 'iframe_src', 
		}
	});

	// counter
	$('.counter').counterUp({
		delay: 20,
		time: 1000
	});

	$('[data-fancybox="gallery"]').fancybox({
		// Options will go here
	});
	
	
})(jQuery);	

// AOS.init({
// 	duration: 1500,
// });

// Responsive Menu
document.addEventListener(
	"DOMContentLoaded", () => {
		const menu = new MmenuLight(
			document.querySelector("#menu"), "(max-width: 991px)"
		);

		const navigator = menu.navigation({
			selectedClass: 'Selected',
			slidingSubmenus: true,
			theme: 'dark',
			title: 'Menu'
		});
		const drawer = menu.offcanvas({
			position: 'left'
		});

		document.querySelector('a[href="#menu"]')
			.addEventListener('click', (evnt) => {
				evnt.preventDefault();
				drawer.open();
			});
	}
);


function initTab(elem){
    document.addEventListener('click', function (e) {
        if (!e.target.matches(elem+' .t-btn')) return;
        else{
			e.preventDefault();
            if(!e.target.classList.contains('active')){
                findActiveElementAndRemoveIt(elem+' .t-btn');
                findActiveElementAndRemoveIt(elem+' .t-panel');
                e.target.classList.add('active');  
                setTimeout(function(){                 
                    var panel = document.querySelectorAll(elem+' .t-panel.'+e.target.dataset.name);
                    Array.prototype.forEach.call(panel, function (el) {
                        el.classList.add('active');
                    });
                }, 200);
            }
        }
    });
}

function findActiveElementAndRemoveIt(elem){
    var elementList = document.querySelectorAll(elem);
    Array.prototype.forEach.call(elementList, function (e) {
        e.classList.remove('active');
    });
}

initTab('.tabs.v1');


VanillaTilt.init(document.querySelectorAll(".tilt"), {
	max: 25,
	speed: 400
});


// // Block Tabs
// var tabLinks = document.querySelectorAll(".tablinks");
// var tabContent = document.querySelectorAll(".tabcontent");


// tabLinks.forEach(function (el) {
// 	el.addEventListener("click", openTabs);
// });


// function openTabs(el) {
// 	var btnTarget = el.currentTarget;
// 	var country = btnTarget.dataset.country;

// 	tabContent.forEach(function (el) {
// 		el.classList.remove("active");
// 	});

// 	tabLinks.forEach(function (el) {
// 		el.classList.remove("active");
// 	});

// 	document.querySelector("#" + country).classList.add("active");

// 	btnTarget.classList.add("active");
// }