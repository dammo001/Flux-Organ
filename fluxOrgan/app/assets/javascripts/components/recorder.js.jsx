var Recorder = React.createClass({
	getInitialState: function(){ 
		return{
			isRecording: false,
			track: new Track({name: "demo", roll: [] })
		};
	},

	componentWillUpdate: function() { 
		this.state.isRecording ? KeyStore.removeChangeHandler(this.change) : KeyStore.addChangeHandler(this.change);
	},

	startRecording: function(){
		this.setState({isRecording: true});
		console.log(this.state);
		this.state.track.startRecording();
	},

	stopRecording: function() {
		this.setState({isRecording: false});
		console.log(this.state);
		this.state.track.stopRecording(); 
	},


	change: function(){ 
		this.state.track.addNotes(KeyStore.all());
	},

	render: function(){ 
		return(
			<div className="recorder">
				<button id="start" onClick={this.startRecording}>Start Recording</button>
				<button id="stop" onClick={this.stopRecording}>Stop Recording</button> 
				<button id="play" onClick={this.state.track.play.bind(this.state.track)}>Play</button> 
			</div> 
			)
	}
});

