 /* MAKE BOXES
  * ======================================================= */
 // This is a utitlity script to add random content 
 // to masonry-ed layouts. Boxes will be made and added 
 // when the user scrolls down.
 //
 // Built off of code from David DeSandro
 // http://vanilla-masonry.desandro.com/ 

var boxMaker = {};

var colors = new Array(
	'lightest',
	'lighter',
	'light',
	'dark',
	'darker');

var boxType = new Array(
	'box',
	'horiRect',
	'vertRect',
	'bigBox');

var boxCount = 0;

boxMaker.makeBoxes = function() {
  var boxes = [],
      count = Math.random() * 3;
	  
  for (var i=0; i < count; i++ ) {
	boxCount++;
    var box = document.createElement('div'),
        text = document.createTextNode( boxCount );
    
	var colorNumber = Math.floor(Math.random()*colors.length);
	var boxNumber = Math.floor(Math.random()*boxType.length);
	var contentBoxCount = boxCount%71;
	
    if (contentBoxCount == 0) {
	  box.className = 'brick' + ' ' + 'contentBox' + ' ' + 'lightest';
	  box.appendChild( text );
	  boxes.push( box );
    } else {
      box.className = 'brick' + ' ' + boxType[boxNumber] + ' ' + colors[colorNumber];
      box.appendChild( text );

      // add box DOM node to document fragment
      boxes.push( box );
	}
  }
  return boxes;
};

/* Append Boxes Onscroll.
 * ======================================================= */

window.onload = function() {
  var container = document.getElementById('content');
  var wall = new Masonry( container, {
    columnWidth: 94
  });

  $(window).on("scrollstop",function() {
	// get an array of elements
    var boxes = boxMaker.makeBoxes();  

	for (var i=0, len = boxes.length; i < len; i++) {
      container.appendChild( boxes[i] );
    }   
    wall.appended( boxes );
  });
};
