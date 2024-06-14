//any Javascript written lands in the function
$(document).ready(function()
{
    'use strict'; //tells the javascript interpreter to treat code more rigorous
    paper.install(window);//Installs paper js in the global scope
    paper.setup(document.getElementById('mainCanvas'));//attaches paper.js to the canvas and prepares paper.js for drawing
    
    var tool = new Tool();
    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text = new PointText(200,200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';
    
    tool.onMouseDown = function(event)
    {
        var c = Shape.Circle(event.point.x, event.point.y, 20);
        c.fillColor = 'green';
    };
    //HERE IS WHERE THER IS THE INTERPRETTING STUFF
    paper.view.draw();//Tells paper.js to actually draw something

});