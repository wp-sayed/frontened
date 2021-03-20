(function($){
	$(document).ready(function(){

		

           $('.slider-active').owlCarousel({

           		items:1,
           		loop:true,
           		dots: true,
           		autoplay:true,
           		autoplaySpeed:500,
           		nav:true,
           		smartSpeed:1000,
           		autoplayHoverPause:true,
              navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
              responsive:{
                0:{
                  items:1
                },
                600:{
                  items:1
                },
                1000:{
                  items:1
                }
              }

           });


           //sticky header

           $(window).on('scroll',function(){
             let scroll = $(window).scrollTop();
             if(scroll < 20){
               $('.sticky-header').removeClass('sticky');
             }else{
               $('.sticky-header').addClass('sticky');
             }
           });














		



	});
})(jQuery)