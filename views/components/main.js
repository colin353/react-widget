var React = require('react');
var Link  = require('react-router').Link;

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
  render: function() {
    return (
      <div className='titlebar'>
        <div className='logo'><h1>Website</h1></div>
        <Navigation />
        <LoginButton />
      </div>
    );
  }
});

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <TitleBar />
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
