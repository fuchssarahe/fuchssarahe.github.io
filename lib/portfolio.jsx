import { Router, Route, IndexRoute, hashHistory } from 'react-router';
const ReactDOM = require('react-dom'),
      React = require('react'),
      App = require('./components/app'),
      Overview = require('./components/overview'),
      Resume = require('./components/resume'),
      Contact = require('./components/contact');

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Overview} />
    <Route path='resume' component={Resume} />
    <Route path='contact' component={Contact} />
  </Route>
)


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Router history={hashHistory}>{routes}</Router>, document.getElementById('root'))
});
