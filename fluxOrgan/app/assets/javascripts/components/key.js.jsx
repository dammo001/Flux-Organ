var Key = React.createClass({

  componentDidMount: function(){
    var note = Tones[this.props.num];
    this.sound = new Note(note);
    KeyStore.addChangeHandler(this.updateChange);
  },

  getInitialState: function(){ 
    return {playing: false};
  },

  updateChange: function() {

    var that = this;
    var notes = KeyStore.all();
    var play;
    if (notes.length === 0){
      this.setState({playing: false});
    }
    notes.includes(parseInt(this.props.num)) ? this.setState({playing: true}) : this.setState({playing: false});
    this.playNotes(); 
  },

  playNotes: function() { 
    this.state.playing ? this.sound.start() : this.sound.stop(); 
  },

  render: function(){
    var keyPressed = (
      this.state.playing ? "pressed" : "unpressed" );
    return (
        <div className="key" id={keyPressed}>test</div>
    )
  }
})
