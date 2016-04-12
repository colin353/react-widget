var React = require('react');
var API   = require('../utils/api');

CreateWidgetPage = React.createClass({
  getInitialState: function() {
      return {
        name: '',
        length: '0'
      };
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  updateName: function(e) {
    this.setState({name: e.target.value});
  },
  updateLength: function(e) {
    var v = parseInt(e.target.value);
    if(isNaN(v)) v = 0;
    this.setState({length: v});
  },
  newWidget: function() {
    API.new_widget(this.state).then(function() {
      this.context.router.push('/widgets');
    }.bind(this));
  },
  render: function() {
    return (
        <div>
          <p>Look at the <a href='#/widgets'>list of widgets</a>, if you want.</p>
          <table>
          <tbody>
            <tr><td>name</td><td><input type='text' onChange={this.updateName} value={this.state.name} /></td></tr>
            <tr><td>length</td><td><input type='text' onChange={this.updateLength} value={this.state.length} /></td></tr>
            <tr><td></td><td><button onClick={this.newWidget}>create widget</button></td></tr>
          </tbody>
          </table>
        </div>
    );
  }
});

module.exports = CreateWidgetPage;
