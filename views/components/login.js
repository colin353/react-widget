var React = require('react');

var LoginPage = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: ''
    };
  },
  updateUsername: function(event) {
    this.setState({username: event.target.value});
  },
  updatePassword: function(event) {
    this.setState({password: event.target.value});
  },
  login: function(event) {
    console.log("login attempted");
  },
  render: function() {
    return (
      <div>
      <h3>Sign in.</h3>
      <table>
        <tbody>
        <tr>
          <td>username or email address</td>
          <td><input type="text" value={this.state.username} onChange={this.updateUsername} /></td>
        </tr>
        <tr>
          <td>password</td>
          <td><input type="password" value={this.state.password} onChange={this.updatePassword} /></td>
        </tr>
        <tr>
        <td></td>
          <td><button>Sign in</button></td>
        </tr>
        </tbody>
      </table>
      </div>
    );
  }
});

module.exports = LoginPage;
