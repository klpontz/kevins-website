/* ANIMATION SCROLL TO TOP
 * ===========================================
 * Sweet little jQuery to scroll back
 * to the top of the page.
 * http://www.jqueryrain.com/?4IUuCqNF
*/

$(document).ready(function(){							
  	// hide #back-top first
  	$("#back-top").hide();
	
  	// fade in #back-top
  	$(function () {
  		$(window).scroll(function () {
  			if ($(this).scrollTop() > 1000) {
  				$('#back-top').fadeIn();
  			} else {
  				$('#back-top').fadeOut();
  			}
  		});

  		// scroll body to 0px on click
  		$('#back-top a').click(function () {
  			$('body,html').animate({
  				scrollTop: 0
  			}, 3000);
  			return false;
  		});
  	});
});

/* Insert into HTML
 * ===========================================
  $(document).on("scrollstop",function() {
     alert("Scroll Stopped");
  }); 
  
*/