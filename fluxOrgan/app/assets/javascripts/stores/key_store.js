(function(root) {
  'use strict';

  var _keys = [], CHANGE_EVENT = "CHANGE";


  root.KeyStore = $.extend({}, EventEmitter.prototype, {

    all: function (){
      return _keys.slice();
    },

    addChangeHandler: function(handler){
      root.KeyStore.on(CHANGE_EVENT, handler)
    },

    removeChangeHandler: function(handler){
      root.KeyStore.removeListener(CHANGE_EVENT, handler)
    },

    changed: function() {
      root.KeyStore.emit(CHANGE_EVENT)
    }
  });

  AppDispatcher.register(function(action){
    switch(action.actionType){
      case KeyConstants.ADD_KEY:
        if (!_keys.includes(action.noteName)){
          _keys.push(action.noteName);
        }
        root.KeyStore.changed();
        break;

      case KeyConstants.REMOVE_KEY:

        var idx = _keys.indexOf(action.noteName);
        _keys.splice(idx, 1);
        root.KeyStore.changed();
        break;

    }

  });

  Array.prototype.includes = function(num) {
    for (var i = 0; i < this.length; i++) {
      if(this[i] === num){
        return true;
      }
    }
    return false;
  };


}(this));
