var Organ = React.createClass({
  render: function() {
      return (
        <div>
          {

            Object.keys(window.Tones).map(function(key){
              return <Key key={key} num={key} />
            })
          }
        </div>
        );
    }
});
