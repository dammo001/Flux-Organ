var Key = React.createClass({

  componentDidMount: function(){
    var note = Tones[this.props.num];
    this.sound = new Note(note);
    KeyStore.addChangeHandler(this.updateChange);
  },

  updateChange: function() {

    var that = this;
    var notes = KeyStore.all();
    if (notes.length === 0){
      that.sound.stop();
    }
    notes.forEach( function(note) {
    if (note === parseInt(that.props.num)){
      that.sound.start();
    } else {
      that.sound.stop();
    }
  });
  },

  render: function(){
    return (
        <div>test</div>
    )
  }
})
