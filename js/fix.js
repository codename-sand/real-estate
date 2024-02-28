$(document).ready(function(){

	var subTab = $(".tabs").offset();

	$(window).scroll(function(){
		
		if($(document).scrollTop() > subTab.top) {
			$('.tabs').addClass("tabs_fix");
			$(".content").addClass("content_45");			
		}

		else {
			$('.tabs').removeClass("tabs_fix");
			$(".content").removeClass("content_45");
		}

	});

})
