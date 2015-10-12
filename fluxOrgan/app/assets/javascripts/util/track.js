(function() { 
'use strict'; 


var Track = window.Track = function(attr){
	this.name = attr.name;
	this.roll = attr.roll;  
};

Track.prototype.startRecording = function(){  
	this.roll = []; 
	this.start = Date.now(); 	
};

Track.prototype.addNotes = function(notes) { 
	var timeSlice = Date.now() - this.start;
	this.roll.push({timeSlice: timeSlice, notes: notes});
};

Track.prototype.stopRecording = function() { 
	this.addNotes([]); 
};

Track.prototype.play = function() {  
	if (this.interval){
		return; 
	}
	var playbackStartTime = Date.now(); 
	var currentNote = 0; 
	var that = this; 
	this.interval = setInterval(function(){
		if (currentNote < that.roll.length){
			if ( Date.now() - playbackStartTime >= that.roll[currentNote].timeSlice){
					KeyActions.resetNotes(that.roll[currentNote].notes);
				currentNote += 1; //why does current note have to be here?? 
			} 
		} 
		else { 
			clearInterval(that.interval);
			delete that.interval;
		}
		
	}, 100); 
};

})(); 