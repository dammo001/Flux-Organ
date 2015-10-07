/* global KeyActions */

var keyListener = function(e){
  KeyActions.keyPressed(e.keyCode);
};

document.addEventListener('keydown', keyListener);
