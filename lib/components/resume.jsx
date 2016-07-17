import { Link } from 'react-router';
const React = require('react'),
      Constants = require('../constants/resume_constants');

const Resume = React.createClass({
  render: function () {
    // <p>{project.role}</p>
    return (
      <main className='resume'>
        <article>
          <h2>Personal Projects</h2>
          {
            Constants.projects.map( (project) => {
              let image;
              if (project.image_location) {
                image = (
                  <figure>
                    <img src={project.image_location} alt={project.name+ ' image'} className='project_image'/>
                  </figure>
                )
              }
              return (
                <section key={project.name} className='resume_item'>
                  {image}
                  <h3><Link to={project.url ? project['url'] : project.repoUrl}>{project.name}</Link></h3>
                  <p>{project.description}</p>
                  <ul>
                    {
                      project.bullets.map( (point) => {
                        return <li key={point} className='resume_bullet'>{point}</li>
                      })
                    }
                  </ul>
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



//  <main className='resume cf'>
//   <article className='resume-bubble resume-bubble_projects'>
//     <h2>Projects</h2>
//     {
//       Constants.projects.map( (project) => {
//         return (
//           <section key={project.name} className='resume_item'>
//             <h3><Link to={project.url ? project['url'] : project.repoUrl}>{project.name}</Link></h3>
//             <p>{project.role}</p>
//             <p>{project.description}</p>
//             <ul>
//               {
//                 project.bullets.map( (point) => {
//                   return <li key={point} className='resume_bullet'>{point}</li>
//                 })
//               }
//             </ul>
//           </section>
//         )
//       })
//     }
//   </article>
//
//   <article className='resume-bubble resume-bubble_work'>
//     <h2>Experience</h2>
//     {
//       Constants.work.map( (job) => {
//         let responsibilities;
//         if (job.responsibilities) {
//           responsibilities = job.responsibilities
//         }
//         return (
//           <section key={job.company} className='resume_item'>
//             <h3>{job.role}</h3>
//             <p>{job.company}</p>
//             <p>{job.dateRange}</p>
//             {responsibilities}
//             <ul>
//               {
//                 job.bullets.map( (point) => {
//                   return <li key={point} className='resume_bullet'>{point}</li>
//                 })
//               }
//             </ul>
//           </section>
//         )
//       })
//     }
//   </article>
// </main>
