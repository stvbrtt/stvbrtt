$(document).ready(function() {
	'use strict';
paper.install(window);
paper.setup(document.getElementById('mainCanvas'));

//TODO
var tool = new(Tool);

var c=Shape.Circle(200,200,80);
c.fillColor = 'blue';

var text = new PointText(200,200);
text.justification = 'center';
text.fillColor = 'white';
text.fontSize = 20;

text.content = 'Hi there Steve!';

tool.onMouseDown = function(event) {
	var c = Shape.Circle(event.point, 20);
	c.fillColor = 'blue';
}


paper.view.draw();

});