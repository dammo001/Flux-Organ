/* global KeyActions */

var keyDownListener = function(e){
  KeyActions.keyPressed(e.keyCode);
};

var keyUpListener = function(e){
  KeyActions.keyRemoved(e.keyCode);
}

document.addEventListener('keydown', keyDownListener);
document.addEventListener('keyup', keyUpListener);
