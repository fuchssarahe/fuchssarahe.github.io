const React = require('react'),
      Constants = require('../constants/resume_constants');

const Overview = React.createClass({
  render: function () {
    return (
      <main className='overview'>
        <article>

          <header>
            <div className='text-wrapper header-text'>
              <h1>Sarah Fuchs</h1>
              <h2 className='contact-subheading'>
                <ul>
                  <li><a href='mailto:${Constants.contact.email}'>{Constants.contact.email}</a></li>
                  <li>{Constants.contact.phone}</li>
                </ul>
              </h2>
            </div>
            <figure>
              <img src='images/profile_image.jpg' alt='picture of Sarah' className='profile_image'/>
            </figure>
          </header>

          <p>I'm Sarah - a web developer in the San Francisco Bay area, currently seeking employment with a company that values quality, innovation, and user experience. My experience is largely in JavaScript, React, and Ruby on Rails, but I have a hunger to keep learning new tools and techniques.<br/><br/>Feel free to reach out if you're interested in chatting about my projects, employment, or web development in general!</p>

          <div className='text-wrapper skills-wrapper'>
              <article>
                <h2>Background</h2>
                <section className=''>
                  <ul>
                    {Constants.skills.web.map( (skill) => <li key={skill} className='resume_skill'>{skill}</li> ) }
                    {Constants.skills.engineering.map( (skill) => <li key={skill} className='resume_skill'>{skill}</li> ) }
                  </ul>
                </section>
              </article>

              <article className=''>
                <h2>Credentials</h2>
                {
                  Constants.education.map( (schooling) => {
                    return (
                      <section key={schooling.credential} className='resume_skill'>
                        <h3>{schooling.credential} - {schooling.date}</h3>
                      </section>
                    )
                  })
                }
              </article>
            </div>
        </article>
      </main>
    )
  }
});

module.exports = Overview;
