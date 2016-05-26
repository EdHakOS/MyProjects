$(document).ready(function() {

	 $(".popup").magnificPopup();


});

$(window).load(function() {

	 
	 var width=0;
if (self.screen) {
width = screen.width
height = screen.height
}
if (width>480)
{
$(".top_img h1").animated("bounceInLeft", "fadeOutLeft");

	 $(".profitable").animated("fadeInLeft", "fadeOutLeft");

	 $("#s_odessa").animated("fadeInRight", "fadeOutRight");

	 $(".icon_item").animated("flipInX", "bounce");

	 $(".bonus h2").animated("zoomIn", "fadeOut");

	 $(".s_reweview h2").animated("fadeInDown", "fadeInDown");

	 $(".call h3").animated("fadeInDown", "fadeOut");
	
}


});

