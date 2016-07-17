import { Link } from 'react-router';
const React = require('react'),
      Constants = require('../constants/resume_constants');

const App = React.createClass({
  render: function () {
    return (
      <div className='wrapper'>
        <header>
          <nav className='nav'>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/resume'>Projects</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </nav>
        </header>
        {this.props.children}
        <footer className='footer'>
          <ul>
            <li><a href={'mailto:' + Constants.contact.email}>{Constants.contact.email}</a></li>
            <li>{Constants.contact.phone}</li>
          </ul>
        </footer>
      </div>
    )
  }
});

module.exports = App;
