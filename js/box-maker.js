 /* MAKE BOXES
  * ======================================================= */
 // This is a utitlity script to add random content 
 // to masonry-ed layouts. Boxes will be made and added 
 // when the page loads.
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
      count = (101 * 7) + 15;
	  
  for (var i=0; i < count; i++ ) {
	  boxCount++;
    var box = document.createElement('div'),
        text = document.createTextNode( '' ); // Replace the quotes with boxcount to add the text to the boxes
    
	  var colorNumber = Math.floor( Math.random() * colors.length);
	  var boxNumber = Math.floor( Math.random() * boxType.length);
	  var contentBoxCount = boxCount % 101;
	
    if (contentBoxCount == 0) {
	    box.className = 'brick' + ' ' + 'contentBox' + ' ' + 'lightest';
	    box.appendChild( text );

	    // add box DOM node to document fragment
      boxes.push( box );
    
    } else {
      box.className = 'brick' + ' ' + boxType[boxNumber] + ' ' + colors[colorNumber];
      box.appendChild( text );

      // add box DOM node to document fragment
      boxes.push( box );
	}
    
    // Apply background color animation to boxes
 	  $(box).click( function () {
      var color = $(this).css("background-color");
      $(this).animate({ backgroundColor: "#ffffff" }, 1000, function(){
   	    $(this).animate({ backgroundColor: color }, 500);
      });
    });
	
    $(".contentBox").click( function() {
	    var top = $(this).css("top");
	    var left = $(this).css("left");
	    var position = $(this).css("position");
	    var sp = ' ';
		
	    alert(top + sp + left + sp + position);
    });
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
  
  var boxes = boxMaker.makeBoxes();  

	for (var i=0, len = boxes.length; i < len; i++) {
    container.appendChild( boxes[i] );
  }   
  wall.appended( boxes );

};
