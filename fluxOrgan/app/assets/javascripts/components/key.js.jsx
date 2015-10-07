var Key = React.createClass({

  componentDidMount: function(){
    var note = Tones[81];
    this.sound = new Note(note);
    KeyStore.addChangeHandler(this.updateChange);
  },

  updateChange: function() {
    var that = this;
    var notes = KeyStore.all();
    notes.forEach( function(note) {
    if (note === 81){
      that.sound.start();
    }});
  },

  render: function(){
    return (
      <ul>
        <li></li>
      </ul>
    )
  }
})
