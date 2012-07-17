/* BASIC UTILITIES
 * ======================================================= */

 /* ScrollOn 
  * =======================================================
  * A function used to make an image longer than the length
  * of the body, so that the scroll bar is activated.
  * The site won't function otherwise.
  */
  
  $(document).ready(function(){
    var newHeight = $('body').outerHeight() + 1000;
    $("#scrollOn").css("height",newHeight);
  });
  
  
  /* Apply Highlight Dynamically
   * =======================================================
   * A function which waits for scrolling to stop. Checks
   * for new bricks, and applies the "highlight" attribute
   * to them.
   */
$(document).ready(function(){   
   $(document).on("scrollstop",function() {
		 console.log("scrollstop")	   
	 // $(".brick").click( function () {
	 // 		 console.log("click");
	 //   var color = $(this).css("background-color");
	 //   	 console.log("variable");
	 //   $(this).animate({ backgroundColor: "#ffffff" }, 1000, function(){
	 //   	$(this).animate({ backgroundColor: color }, 500);
	 //   });
	 //     console.log("to white");  
	 //   
	 //  		 console.log("back to original");
	 //      });
   });
});