/*============================
=            Core            =
============================*/

// Waypoints Animations 
$(window).load(function(){
	
	$('.anima').waypoint(function(){
		$(this).addClass('in');
	},{offset:'95%'});
	
});

$(document).ready(function() {

	// Parallax
	$('.parallax').parallax();

	// Smooth Hash Link Scroll
	$('.smooth-scroll').click(function() {
	if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {

	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
	    $('html,body').animate({
	      scrollTop: target.offset().top
	    }, 1000);
	    return false;
	  }
	}
	});

	// full-height 
	function heroHeight() {
		var $this = $('#hero'),
		win = $(window),
		dataHeight = $this.data('height');

		if ($this.hasClass('full-height')) {
			$this.css({
				'height': (win.height())
			});
		} else {
			$this.css({
				'height': dataHeight + 'em'
			});
		}
	}
	// Start 
	heroHeight();
	$(window).resize(heroHeight);


});

/*-----  End of Core  ------*/