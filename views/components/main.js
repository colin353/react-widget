var React = require('react');

var Navigation = React.createClass({
  render: function() {
    return (
      <ul className='navigation'>
        <li>Place 1</li>
        <li>Place 2</li>
        <li>Third place</li>
      </ul>
    );
  }
});

var LoginButton = React.createClass({
  login: function() {
    alert("login here");
  },
  render: function() {
    return (
      <div  className='button login-button'
            onClick={this.login}>
        Login
      </div>
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
