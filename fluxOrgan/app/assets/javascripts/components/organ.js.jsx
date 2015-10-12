var Organ = React.createClass({
  render: function() {
      return (
        <div id="organ">
        <Recorder/> 
          {

            Object.keys(window.Tones).map(function(key){
              return <Key key={key} num={key} />
            })
          }
        </div>
        );
    }
});
