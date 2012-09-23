/* BASIC UTILITIES
 * ======================================================= */

 /* ScrollOn 
  * =======================================================
  * A function used to make an image longer than the length
  * of the body, so that the scroll bar is activated.
  * The site won't function otherwise.
  */
  
  // $(document).ready(function(){
  //  var newHeight = $('body').outerHeight() + 1000;
  //  $("#scrollOn").css("height",newHeight);
  });
  
  /*  Prepend Boxes
   * =======================================================
   * Function should be placed inside of the function that 
   * instatiate the wall of boxes. Also, need to add a button 
   * or some way to call the function on the page.
   */
  
  document.getElementById('prepend').onclick = function() {
    // get an array of elements
    var boxes = boxMaker.makeBoxes();

   // prepend box to container
    for (var i=0, len = boxes.length; i < len; i++) {
      container.insertBefore( boxes[i], container.firstChild )
      }
    wall.reload();
  };