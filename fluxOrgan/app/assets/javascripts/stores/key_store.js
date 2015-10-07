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
        _keys.push(action.noteName);
        root.KeyStore.changed();
        break;

      // case KeyConstants.REMOVE_KEY:
      //   _keys
    }

  });

}(this));
