$(document).ready (
	function(){
	var index = 1;
	var banners = 2;
}
);
	$('#left').click(
			function() {
				// decrease index and move image off screen
				
				if(index > 0) {
					$(this).parent().css('background','#fff');
					index--;
				}else{
					index = banners;
					$(this).parent().css('background','#000');
				}
				
			}
		);

		$('#right').click(
			function() {
				// increase index and move the required image on screen
				if(index < banners) {
					$(this).parent().css('background','green');
					index++;
				}else{
					index = 0;
					$(this).parent().css('background','red');
				}
			}
		);

