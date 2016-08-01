const React = require('react'),
      Constants = require('../constants/resume_constants');

const Overview = React.createClass({
  render: function () {
    return (
      <main className='overview'>
        <div className='overview_contact-wrapper'>
          <article className='overview_contact'>

            <header className='contact_header'>
              <figure>
                <img src='images/profile_image.jpg' alt='picture of Sarah' className='contact_image'/>
              </figure>

              <div>
                <h1>Sarah Fuchs</h1>
                <h2 className='contact_subheading'>
                  <ul>
                    <li><a href='mailto:${Constants.contact.email}'>{Constants.contact.email}</a></li>
                    <li className='contact_link'><a href={Constants.contact.linkedin}>LinkedIn</a> | <a href={Constants.contact.github}>Github</a> | <a href='Sarah_Fuchs_Resume.pdf' target='_blank'>Resume</a></li>
                    <li>{Constants.contact.location}</li>
                    <li>{Constants.contact.phone}</li>
                  </ul>
                </h2>
              </div>
            </header>

            <p>I'm Sarah - a web developer in the San Francisco Bay area, currently seeking employment with a company that values quality, innovation, and user experience. My experience is largely in JavaScript, React, and Ruby on Rails, but I have a hunger to keep learning new tools and techniques.<br/><br/>Feel free to reach out if you're interested in chatting about my projects, employment, or web development in general!</p>
          </article>
        </div>

        <article className='overview_projects'>
          {
            Constants.projects.map( (project) => {
              let image;
              if (project.image_location) {
                image = (
                  <figure className='project_image-wrapper'>
                    <a href={project.url ? project['url'] : project.repoUrl}>
                      <img src={project.image_location} alt={project.name+ ' image'} className='project_image'/>
                    </a>
                  </figure>
                )
              }
              return (
                <section key={project.name} className='project clearfix'>
                  {image}
                  <div>
                    <h3><a href={project.url ? project['url'] : project.repoUrl}>{project.name}</a> - <a href={project.repoUrl}>github</a></h3>
                    <p className='project_tools'>({project.tools})</p>
                    <p className='project_subheading'>{project.description}</p>
                    <ul className='project_bullets'>
                      {
                        project.bullets.map( (point) => {
                          return <li key={point} className='project_bullet'>{point}</li>
                        })
                      }
                    </ul>
                  </div>
                </section>
              )
            })
          }
        </article>
      </main>

    )
  }
});

module.exports = Overview;
