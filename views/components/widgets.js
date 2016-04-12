var React = require('react');
var API   = require('../utils/api');

WidgetsPage = React.createClass({
  getInitialState: function() {
    return {
      loading: true,
      widgets: []
    };
  },
  componentDidMount: function() {
    API.get_widgets().then(function(widgets) {  this.setState({
        widgets: widgets,
        loading: false
      });
    }.bind(this));
  },
  render: function() {
    if(this.state.loading) return (
        <p>Loading data...</p>
    );

    // Construct a table row for each widget.
    var w = this.state.widgets.map(function(widget) {
      return (
        <tr key={widget.name}><td>{widget.name}</td><td>{widget.length}</td></tr>
      );
    });

    // If the list is empty, show "no data".
    if(w.length === 0) w = (
      <tr><td colspan="2">no data</td></tr>
    );

    return (
      <div>
      <p>Or, <a href='#/create_widget'>create a widget</a>, if you want.</p>
      <table><tbody><tr className='header'>
        <td style={{width: '150px'}}>name</td>
        <td>length</td>
      </tr>
      {w}
      </tbody></table></div>
    );
  }
});

module.exports = WidgetsPage;
