import resumeConstants from './constants/resume_constants';

document.addEventListener('DOMContentLoaded', () => {
  renderChildren();
});

function renderChildren() {
  renderHeader();
  renderPersonalSummary();
  renderProjects();
  renderFooter();
}

function renderFooter() {
  const footer = document.getElementById('footer');
  footer.innerHTML = `<ul><li><a href='mailto:${resumeConstants.contact.email}'>${resumeConstants.contact.email}</a></li><li>${resumeConstants.contact.phone}</li></ul>`
}

function renderHeader() {
  const header = document.getElementById('header');
  header.innerHTML = 
    `<ul class="contact-header">
      <li>${resumeConstants.contact.name}</li>
      <li><a href='mailto:${resumeConstants.contact.email}'>${resumeConstants.contact.email}</a></li>
      <li class='contact_link'><a href=${resumeConstants.contact.linkedin}>LinkedIn</a></li>
      <li><a href=${resumeConstants.contact.github}>Github</a></li>
      <li><a href='Sarah_Fuchs_Resume.pdf' target='_blank' rel="noopener noreferrer">Resume</a></li>
      <li>${resumeConstants.contact.location}</li>
      <li>${resumeConstants.contact.phone}</li>
    </ul>`;
}

function renderPersonalSummary() {
  const summary = document.getElementById('personal-summary');
  summary.innerHTML = generateParagraphes(resumeConstants.personalSummary.paragraphs);
}

function generateParagraphes(paragraphs) {
  return paragraphs.map(text => `<p>${text}</p>`).join('');
}

function renderProjects() {
  const projects = document.getElementById('projects');
  resumeConstants.projects.forEach( (project) => {
    let figure;
    if (project.image_location) {
      figure = document.createElement('figure');
      figure.className = 'project_image-wrapper';
        const link = document.createElement('a');
        link.href = project.url || project.repoUrl;
        link.innerHTML = `<img src=${project.image_location} alt=${project.name + ' image'} class="project_image"/>`; 
        figure.appendChild(link);
    }
        
    const projectSection = document.createElement('section');
    projectSection.className = 'project clearfix';
    if (figure) {
      projectSection.appendChild(figure);
    }
    
    const header = document.createElement('h3');
    header.innerHTML = `<a href=${project.url || project.repoUrl}>${project.name}</a> - <a href=${project.repoUrl}>github</a>`;
    projectSection.appendChild(header);
    
    const tools = document.createElement('p');
    tools.className = 'project_tools';
    tools.innerText = `(${project.tools})`;
    projectSection.appendChild(tools);
    
    const description = document.createElement('p');
    description.className = 'project_subheading';
    description.innerText = `(${project.description})`;
    projectSection.appendChild(description);
    
    const bullets = document.createElement('ul');
    project.bullets.forEach(point => {
      const bullet = document.createElement('li');
      bullet.className = 'project_bullet';
      bullet.innerText = point;
      bullets.appendChild(bullet);
    });
    projectSection.appendChild(bullets);

    projects.appendChild(projectSection);
  })
}