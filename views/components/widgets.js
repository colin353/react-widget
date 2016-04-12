var React = require('react');
var API   = require('../utils/api');
var Link  = require('react-router').Link;

function CreateWidgetInvitation(props) {
  return (
    <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
      <header className="section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white">
        <i className="material-icons">play_circle_filled</i>
      </header>
      <div className="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
        <div className="mdl-card__supporting-text">
          <h4>You can make a widget too!</h4>
          It's easy to make a widget. Try it! This dialog will disappear once you've tried it.
        </div>
        <div className="mdl-card__actions">
          <Link to='/create_widget' className="mdl-button">Get Started</Link>
        </div>
      </div>
      <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="btn1">
        <i className="material-icons">more_vert</i>
      </button>
    </section>
  );
}

var WidgetsPage = React.createClass({
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
        <tr>
          <td className="mdl-data-table__cell--non-numeric">{widget.name}</td>
          <td>{widget.length}</td>
        </tr>
      );
    });

    // If the list is empty, show "no data".
    if(w.length === 0) w = (
      <tr><td colspan="2">no data</td></tr>
    );

    return (
      <div>
      <CreateWidgetInvitation />
      <table style={{marginLeft:'auto', marginRight:'auto'}} className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
        <thead>
        <tr>
          <th className="mdl-data-table__cell--non-numeric">name</th>
          <th>length (mm)</th>
        </tr>
      </thead>
      <tbody>
      {w}
      </tbody></table>
      </div>
    );
  }
});

module.exports = WidgetsPage;
