(function() {

	// Sticky Header
	function headerScroll() {
		var wrap = document.querySelector('.header_wrap');
		var scrollY = window.scrollY || window.pageYOffset;

		if( scrollY > 0 ) {
			wrap.classList.add('js_sticky');
		} else {
			wrap.classList.remove('js_sticky');
		}
	}

	window.addEventListener('scroll',function(){
		headerScroll();
	});

})();

/* jQuery(function($){
   //mobile menu btn
   $(".mobile_menu_btn").click(function(){
     $(".nav").stop().slideToggle("fast");
   });
 }); */
