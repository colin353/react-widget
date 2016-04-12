var React = require('react');
var ReactRouter = require('react-router');

var Main = require('../components/main');
var Home = require('../components/home');
var Login= require('../components/login');
var Widgets= require('../components/widgets');
var NewWidget = require('../components/new_widget');

var routes = (
  <ReactRouter.Router history={ReactRouter.hashHistory}>
    <ReactRouter.Route path='/' component={Main}>
          <ReactRouter.IndexRoute component={Home} />
          <ReactRouter.Route path='/login' component={Login} />
          <ReactRouter.Route path='/widgets' component={Widgets} />
          <ReactRouter.Route path='/create_widget' component={NewWidget} />
    </ReactRouter.Route>
  </ReactRouter.Router>
);

module.exports = routes;
