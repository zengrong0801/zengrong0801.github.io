//Setup flex slider
$(window).load(function () {
//    $('.gf-slider').flexslider();
});
//Setup Page
$(document).ready(function () {
	
	$("ul#navigation a").smoothScroll({
        afterScroll: function () {
            $('ul#navigation a.active').removeClass('active');
            $(this).addClass('active');
        }
    });

    //Scroll
    $('div.page').waypoint(function () {
        var id = $(this).attr('id');

        $('ul#navigation a.active').removeClass('active');
        $('ul#navigation a[href="#' + id + '"]').addClass('active');
    });

    /* fixes */
    $(window).scroll(function () {
	    var win = $(window);
        if (win.scrollTop() === 0) {
            $('ul#navigation a.active').removeClass('active');
            $('ul#navigation a[href="#about"]').addClass('active');
        } else if (win.height() + win.scrollTop() === $('#container').height()) {
            $('ul#navigation a.active').removeClass('active');
            $('ul#navigation a[href^="#"]:last').addClass('active');
        }
    });
});