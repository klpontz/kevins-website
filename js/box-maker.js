 /* MAKE BOXES
  * ======================================================= */
 // This is a utitlity script to add
 // random content to masonry-ed layouts.
 // Built off code from David DeSandro
 // http://vanilla-masonry.desandro.com/ 

var boxMaker = {};

var colors = new Array();
  colors[0] = 'lightest';
  colors[1] = 'lighter';
  colors[2] = 'light';
  colors[3] = 'dark';
  colors[4] = 'darker';

var boxType = new Array();
  boxType[0] = 'box';
  boxType[1] = 'horiRect';
  boxType[2] = 'vertRect';
  boxType[3] = 'bigBox';

boxMaker.makeBoxes = function() {
  var boxes = [],
      count = Math.random() * 4;

  for (var i=0; i < count; i++ ) {
    var box = document.createElement('div'),
        text = document.createTextNode( '1' );
    
	var colorNumber = Math.floor(Math.random()*colors.length);
	console.log (colorNumber);
	
	var boxNumber = Math.floor(Math.random()*boxType.length);
	console.log (boxNumber);
	
    box.className = 'brick' + ' ' + boxType[boxNumber] + ' ' + colors[colorNumber];
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

  document.getElementById('append').onclick = function() {
    // get an array of elements
    var boxes = boxMaker.makeBoxes();

    for (var i=0, len = boxes.length; i < len; i++) {
      container.appendChild( boxes[i] );
    }
      
    wall.appended( boxes );
  };
};
