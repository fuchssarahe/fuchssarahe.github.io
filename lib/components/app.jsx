import { Link } from 'react-router';
const React = require('react'),
      Constants = require('../constants/resume_constants');

const App = React.createClass({
  render: function () {
    let currentLocation = 'root';
    if (window.location.hash.includes('resume')) {
      currentLocation = 'resume';
    } else if (window.location.hash.includes('contact')) {
      currentLocation = 'contact';
    }

    return (
      <div className='wrapper'>
        <header>
          <nav className='nav'>
            <ul>
              <li className={currentLocation === 'root' ? 'selected-tab' : ''}><Link to='/'>About Me</Link></li>
              <li className={currentLocation === 'resume' ? 'selected-tab' : ''}><Link to='/resume'>Projects</Link></li>
              <li className={currentLocation === 'contact' ? 'selected-tab' : ''}><Link to='/contact'>Contact</Link></li>
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
