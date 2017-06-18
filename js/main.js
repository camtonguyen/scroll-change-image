$(document).ready(function(){
    $(window).scroll(function(){
		var currentPosition = $('body').scrollTop();
		if(currentPosition >150){
			$('.navbar').addClass('navChange');
		}else if(currentPosition <150){
			$('.navbar').removeClass('navChange');
		}
		 var fromTopPx = 600; // distance to trigger
    	 var scrolledFromtop = $(window).scrollTop();
    	 if(scrolledFromtop > fromTopPx){
	        $('#about').addClass('scrolled');
	    }else{
	        $('#about').removeClass('scrolled');
	    }
	});
	
	$(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active-link');
        })
        $(this).addClass('active-link');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.nav-link').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.nav-link').removeClass("active-link");
            currLink.addClass("active-link");
        }
        else{
            currLink.removeClass("active-link");
        }
    });
}