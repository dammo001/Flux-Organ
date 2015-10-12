/* global AppDispatcher */
/* global KeyConstants */



var KeyActions = {
  keyPressed: function(note){
    AppDispatcher.dispatch({
      actionType: KeyConstants.ADD_KEY,
      noteName: note
    });
  },
  keyRemoved: function(note){
    AppDispatcher.dispatch({
      actionType: KeyConstants.REMOVE_KEY,
      noteName: note
    });
  },

  resetNotes: function(notes){ 
    AppDispatcher.dispatch({
      actionType: KeyConstants.UPDATE_NOTES,
      noteName: notes
    });
  }
};
