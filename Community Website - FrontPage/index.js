
$('document').ready(function(){
	console.log('HEllo');
	 var header = $(".fixed-header");
	 
	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	    if (scroll >= 500) {
	        header.addClass("fix-header");
	    } else {
	        header.removeClass("fix-header");
	    }
	});
});