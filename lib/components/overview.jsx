const React = require('react'),
      Constants = require('../constants/resume_constants');

const Overview = React.createClass({
  render: function () {


    // <div className='text-wrapper skills-wrapper'>
    //     <article>
    //       <h2>Background</h2>
    //       <section className=''>
    //         <ul>
    //           {Constants.skills.web.map( (skill) => <li key={skill} className='resume_skill'>{skill}</li> ) }
    //           {Constants.skills.engineering.map( (skill) => <li key={skill} className='resume_skill'>{skill}</li> ) }
    //         </ul>
    //       </section>
    //     </article>
    //
    //     <article className=''>
    //       <h2>Credentials</h2>
    //       {
    //         Constants.education.map( (schooling) => {
    //           return (
    //             <section key={schooling.credential} className='resume_skill'>
    //               <h3>{schooling.credential} - {schooling.date}</h3>
    //             </section>
    //           )
    //         })
    //       }
    //     </article>
    //   </div>
    return (
      <main className='overview'>
        <div className='contact-wrapper'>
        <article className='contact'>

          <header>
            <figure>
            <img src='images/profile_image.jpg' alt='picture of Sarah' className='profile_image'/>
            </figure>

            <div className='text-wrapper header-text'>
              <h1>Sarah Fuchs</h1>
              <h2 className='contact-subheading'>
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

        <article className='resume'>
          <h1>Personal Projects</h1>
          {
            Constants.projects.map( (project) => {
              let image;
              if (project.image_location) {
                image = (
                  <figure className='project_image_container'>
                    <a href={project.url ? project['url'] : project.repoUrl}>
                      <img src={project.image_location} alt={project.name+ ' image'} className='project_image'/>
                    </a>
                  </figure>
                )
              }
              return (
                <section key={project.name} className='resume_item cf'>
                  {image}
                  <div className='text-wrapper'>
                    <h3><a href={project.url ? project['url'] : project.repoUrl}>{project.name}</a> - <a href={project.repoUrl}>github</a></h3>
                    <p className='resume_item-tools'>({project.tools})</p>
                    <p className='resume_item-subheading'>{project.description}</p>
                    <ul className='resume_item-bullets'>
                      {
                        project.bullets.map( (point) => {
                          return <li key={point} className='resume_bullet'>{point}</li>
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
