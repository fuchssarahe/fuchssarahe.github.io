import { Link } from 'react-router';
const React = require('react'),
      Constants = require('../constants/resume_constants');

const App = React.createClass({
  render: function () {
    let currentLocation = 'root';
    let name;
    if (window.location.hash.includes('resume')) {
      currentLocation = 'resume';
      name = (<li>{Constants.contact.name}:</li>);
    }

    return (
      <div className='wrapper'>
        <header>
          <nav className='nav'>
            <ul>
              <li className={currentLocation === 'root' ? 'selected-tab' : ''}><Link to='/'>About&nbsp;Me</Link></li>
              <li className={currentLocation === 'resume' ? 'selected-tab' : ''}><Link to='/resume'>Projects</Link></li>
              <li><a href='Sarah_Fuchs_Resume_7_28_16.pdf' target='_blank'>Resume</a></li>
            </ul>
          </nav>
        </header>

        {this.props.children}

        <footer className='footer'>
          <ul>
            {name}
            <li><a href={'mailto:' + Constants.contact.email}>{Constants.contact.email}</a></li>
            <li>{Constants.contact.phone}</li>
          </ul>
        </footer>
      </div>
    )
  }
});

module.exports = App;
