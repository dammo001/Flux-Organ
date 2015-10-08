var Key = React.createClass({

  componentDidMount: function(){
    var note = Tones[this.props.num];
    this.sound = new Note(note);
    KeyStore.addChangeHandler(this.updateChange);
  },

  updateChange: function() {

    var that = this;
    var notes = KeyStore.all();
    var play;

    notes.forEach( function(note) {
      if (note === parseInt(that.props.num)){ play = true; }
    });

    play ? that.sound.start() : that.sound.stop();
    // return that.sound.stop();
  },

  render: function(){
    return (
        <div>test</div>
    )
  }
})
