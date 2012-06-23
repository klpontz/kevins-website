 /* MAKE BOXES
  * ======================================================= */
 // This is a utitlity script to add
 // random content to masonry-ed layouts.
 // Compliments of David DeSandro
 // http://vanilla-masonry.desandro.com/ 

var boxMaker = {};

boxMaker.makeBoxes = function() {
  var boxes = [],
      count = Math.random() * 4;

  for (var i=0; i < count; i++ ) {
    var box = document.createElement('div'),
        text = document.createTextNode( '1' );
    
    box.className = 'brick horiRect blue' +  Math.ceil( Math.random()*3 );
    box.appendChild( text );
    // add box DOM node to document fragment
    boxes.push( box );
  }

  return boxes;
};

/* Prepend or Append Boxes
 * ======================================================= */
 
 /*
 *  Add these buttons to the html for these functions.
	  <p>
	    <button id="prepend">Prepend new items</button>
	    <button id="append">Append new items</button>
	  </p>	
*/
 
window.onload = function() {
  var container = document.getElementById('content');
  var wall = new Masonry( container, {
    columnWidth: 94
  });
    
  document.getElementById('prepend').onclick = function() {
    // get an array of elements
    var boxes = boxMaker.makeBoxes();

    // prepend box to container
    for (var i=0, len = boxes.length; i < len; i++) {
      container.insertBefore( boxes[i], container.firstChild )
    }
      
    wall.reload();
  };

  document.getElementById('append').onclick = function() {
    // get an array of elements
    var boxes = boxMaker.makeBoxes();

    for (var i=0, len = boxes.length; i < len; i++) {
      container.appendChild( boxes[i] );
    }
      
    wall.appended( boxes );
  };
};
