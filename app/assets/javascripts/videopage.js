$(document).ready(function(){
	var $image1 = $(".image1");
	var $image2 = $(".image2");
	
	$(document).scroll(function(){
		var scrollPos = $(this).scrollTop();
	  var x1 = (scrollPos / 70) + 80;
		var x2 = (scrollPos / -120) + 20;
		var rotateAmount1 = "rotate(" + x1 + "deg)";
		var rotateAmount2 = "rotate(" + x2 + "deg)";
		var scrollAmount1 = ((scrollPos * .2) - 1650) + "px";
		
		$image1.css("transform", rotateAmount1);
		$image2.css("transform", rotateAmount2);
		$image2.css("margin-top", scrollAmount1);
		
	});
});