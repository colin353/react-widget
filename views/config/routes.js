var React = require('react');
var ReactRouter = require('react-router');

var Main = require('../components/main');
var Home = require('../components/home');

var routes = (
  <ReactRouter.Router history={ReactRouter.hashHistory}>
    <ReactRouter.Route path='/' component={Main}>
          <ReactRouter.IndexRoute component={Home} />
    </ReactRouter.Route>
  </ReactRouter.Router>
);

module.exports = routes;
