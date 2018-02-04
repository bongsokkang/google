
var React = require('react')
var Router = require('react-router')
var Route = Router.Route
var DefaultRoute = Router.DefaultRoute
var Root = require('./components/Root.jsx')
var Index = require('./components/Index.jsx')
var About = require('./components/About.jsx')
var About1 = require('./components/About.1.jsx')
var About2 = require('./components/About.2.jsx')
var Card = require('./components/Card.jsx')


var Routes = (
<Route handler={Root} path='/'>
    <DefaultRoute handler={Index} />
    <Route path='/about' handler={About} />
    <Route path='/about1' handler={About1} />
    <Route path='/about2' handler={About2} />
    <Route path='/Index1' handler={About} />
    <Route path='/Card' handler={Card} />

  </Route>
)

module.exports = Routes

