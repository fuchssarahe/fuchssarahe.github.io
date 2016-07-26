import { Link } from 'react-router';
const React = require('react'),
      Constants = require('../constants/resume_constants');

const Resume = React.createClass({
  render: function () {
    return (
      <main className='resume'>
        <article>
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

module.exports = Resume;
