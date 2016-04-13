var React = require('react');
var Link  = require('react-router').Link;
var classNames = require('classnames');

var Navigation = React.createClass({
  render: function() {
    return (
      <ul className='navigation'>
        <Link to='/widgets'><li onClick={this.navigateWidgets}>Widgets</li></Link>
        <li>Place 2</li>
        <li>Third place</li>
      </ul>
    );
  }
});

var LoginButton = React.createClass({
  render: function() {
    return (
      <Link to='/login'>
        <div className='button login-button'>Login</div>
      </Link>
    );
  }
});

var TitleBar = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      homepage: true,
      widgets: false
    };
  },
  clickWidget: function() {
    this.setState({
      widgets: true,
      homepage: false
    });
  },
  clickHome: function() {
    this.setState({
      widgets: false,
      homepage: true
    });
  },
  addWidget: function() {
    this.context.router.push('/create_widget');
  },
  render: function() {
    var widgetClass =   "mdl-layout__tab" + (this.state.widgets? " is-active" : "");
    var homepageClass = "mdl-layout__tab" + (this.state.homepage? " is-active" : "");
    return (
      <header className="mdl-layout__header mdl-layout__header--scroll mdl-color--primary">
        <div className="mdl-layout--large-screen-only mdl-layout__header-row">
        </div>
        <div className="mdl-layout--large-screen-only mdl-layout__header-row">
          <h3>WEBSITE</h3>
        </div>
        <div className="mdl-layout--large-screen-only mdl-layout__header-row">
        </div>
        <div className="mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark">
          <Link to='/' onClick={this.clickHome} className={homepageClass}>Homepage</Link>
          <Link to='/widgets' onClick={this.clickWidget} className={widgetClass}>Widgets</Link>
          <a href="#features" className="mdl-layout__tab">Goofs</a>
          <a href="#features" className="mdl-layout__tab">Gaffes</a>
          <button onClick={this.addWidget} className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent" id="add">
            <i className="material-icons" role="presentation">add</i>
            <span className="visuallyhidden">Add</span>
          </button>
        </div>
      </header>
    );
  }
});

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <TitleBar />
        <main className="mdl-layout__content" style={{width: '100%'}}>
          <div className="mdl-layout__tab-panel is-active" id="overview">
            {this.props.children}
          </div>
        </main>
      </div>
    );
  }
});

module.exports = Main;
