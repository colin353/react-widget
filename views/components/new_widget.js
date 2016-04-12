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
      <section style={{padding: '20px', width:'300px'}} className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" id="sample1" />
          <label className="mdl-textfield__label" onChange={this.updateName} value={this.state.name} for="sample1">name</label>
        </div>
        <br />
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" onChange={this.updateLength} value={this.state.length}  type="text" id="sample2" />
          <label className="mdl-textfield__label" for="sample2">length (mm)</label>
        </div>
        <button onClick={this.newWidget} style={{float:'right'}} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
          Create
        </button>
        </section>
    );
  }
});

module.exports = CreateWidgetPage;
