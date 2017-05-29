/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var resumeConstants = {
  contact: {
    name: 'Sarah Fuchs',
    email: 'fuchssarahe@gmail.com',
    phone: '(262) 227-7987',
    linkedin: 'https://www.linkedin.com/in/sarah-fuchs-7a846b4a',
    github: 'https://github.com/fuchssarahe',
    location: 'San Francisco, CA'
  },

  personalSummary: {
    paragraphs: ["I'm Sarah - a web developer in the San Francisco Bay area, currently seeking employment with a company that values quality, innovation, and user experience. My experience is largely in JavaScript, React, and Ruby on Rails, but I have a hunger to keep learning new tools and techniques.", "Feel free to reach out if you're interested in chatting about my projects, employment, or web development in general!"]
  },

  projects: [{ name: 'Camellia.io',
    image_location: 'images/camellia_image.png',
    tools: 'React.js, Ruby on Rails',
    description: 'Single-page responsive app with RESTful API - built for finding and reviewing teas',
    role: 'sole-developer',
    url: 'http://www.camellia.io',
    repoUrl: 'http://github.com/fuchssarahe/Camellia',
    bullets: ['Typeahead search: Intelligently decides how to generate search suggestions based on the query, minimizing unnecessary HTTP requests', 'Custom star-rating selector for reviews: Layers CSS backgrounds and HTML elements to allow mouse position to determine number of stars displayed', 'Image uploading: Accesses the FormData web API to transfer files to the server for upload, keeping the UI clean and consistent across the site']
  }, { name: '3x Guitar Practicer',
    image_location: 'images/guitar-snapshot.png',
    tools: 'Ruby, JavaScript, Python',
    description: 'Command-Line tool for teaching guitar chords - reproduced in 3 different lanuages',
    role: 'sole-developer',
    url: null,
    repoUrl: 'https://github.com/fuchssarahe/guiter_practice',
    bullets: ['Ruby: Tree data structure used to quickly determine which chords to display to the user', 'JavaScript: Asynchronous functionality handled differently to provide identical user experience between implementations', 'Python: Taught myself Python for the express purpose of building this project with a new, unique set of language-based limitations']
  }, { name: 'Stuff Picker',
    image_location: 'images/stuff_picker_gif.gif',
    tools: 'JavaScript',
    description: 'Browser-based activity picker built in vanilla JS and canvas',
    role: 'sole-developer',
    url: 'https://fuchssarahe.github.io/stuff_picker/',
    repoUrl: 'https://github.com/fuchssarahe/stuff_picker',
    bullets: ['Dynamically renders content by direct DOM manipulation, avoiding bulky frameworks and keeping the product lean', 'Integrates with navigator/geolocation web API and Google Maps API, handling interactions uniquely based on user permissions']
  }, {
    name: 'Minesweeper',
    image_location: 'images/minesweeper-gif.gif',
    tools: 'React, JavaScript',
    description: 'Traditional little Minesweeper game built by pair-programming with another developer',
    role: 'Front End Developer',
    url: 'https://fuchssarahe.github.io/mineweeper',
    repoUrl: 'https://github.com/fuchssarahe/minesweeper',
    bullets: ['Accomplishes tremendous advancement in the Minesweeper industry!']
  }, { name: 'Baby Active Record',
    image_location: null,
    tools: 'Ruby, SQL',
    description: 'Basic version of Active Record (library for object relational mapping in Rails)',
    role: 'sole-developer',
    url: null,
    repoUrl: 'https://github.com/fuchssarahe/activerecordlite',
    bullets: ['Emphasizes metaprogramming and object inheritance (while eliminating the magic around Rails)']
  }],

  work: [{ role: 'Technical Support Specialist',
    company: 'Merus, Inc',
    dateRange: 'June 2015 – April 2016',
    responsibilities: 'Data Migration, Engineering Team Liaison',
    bullets: ['Crafted SQL queries to manipulate, update, and clean 1000s of GBs of client data', 'Steered the data migration process, resulting in the successful onboarding of 10+ firms', 'Coordinated with software engineers, the sales team, and legal professionals to always achieve our 99% data transfer guarantee']
  }, { role: 'Biomaterials Research Team Lead',
    company: 'The Ohio State University (OSU)',
    dateRange: 'Aug 2014 – May 2015',
    responsibilities: null,
    bullets: ['Iteratively designed and implemented an experiment to decrease the release rate of an anti-fertility drug for controlling feral dog and cat populations using polymer-fiber capsules', 'Ultimately reduced release rates by ~200%, achieving long-term release', 'Presented at the 6th Annual Engineering Capstone Design Showcase at OSU']
  }, { role: 'R&D Welding Engineering Intern',
    company: 'The Lincoln Electric Company',
    dateRange: 'May 2013 – Aug 2013',
    responsibilities: null,
    bullets: ['Invented welding process which combines two types of welding (flux and gas shielded) to achieve a stronger, purer weld']
  }],

  skills: {
    web: ['JavaScript', 'React.js', 'Flux', 'Ruby', 'Rails', 'SQL', 'Git', 'jQuery', 'HTML', 'CSS', 'RSpec', 'jBuilder', 'Capybara', 'Python'],
    engineering: ['MATLAB', 'Autodesk Inventor', 'CrystalMaker', 'ABAQUS', 'CES EduPack']
  },

  education: [{ credential: 'App Academy',
    location: 'San Francisco',
    date: 'May 2016',
    details: '1000-hour course in web development (<3% admission rate)'
  }, { credential: 'B.S. Materials Science & Engineering',
    location: 'The Ohio State University',
    date: '2015',
    details: 'Graduated cum laude (GPA: 3.6)'
  }]
};

module.exports = resumeConstants;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _resume_constants = __webpack_require__(0);

var _resume_constants2 = _interopRequireDefault(_resume_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  renderChildren();
});

function renderChildren() {
  renderHeader();
  renderPersonalSummary();
  renderProjects();
  renderFooter();
}

function renderFooter() {
  var footer = document.getElementById('footer');
  footer.innerHTML = '<ul><li><a href=\'mailto:' + _resume_constants2.default.contact.email + '\'>' + _resume_constants2.default.contact.email + '</a></li><li>' + _resume_constants2.default.contact.phone + '</li></ul>';
}

function renderHeader() {
  var header = document.getElementById('header');
  header.innerHTML = '<ul class="contact-header">\n      <li>' + _resume_constants2.default.contact.name + '</li>\n      <li><a href=\'mailto:' + _resume_constants2.default.contact.email + '\'>' + _resume_constants2.default.contact.email + '</a></li>\n      <li class=\'contact_link\'><a href=' + _resume_constants2.default.contact.linkedin + '>LinkedIn</a></li>\n      <li><a href=' + _resume_constants2.default.contact.github + '>Github</a></li>\n      <li><a href=\'Sarah_Fuchs_Resume.pdf\' target=\'_blank\' rel="noopener noreferrer">Resume</a></li>\n      <li>' + _resume_constants2.default.contact.location + '</li>\n      <li>' + _resume_constants2.default.contact.phone + '</li>\n    </ul>';
}

function renderPersonalSummary() {
  var summary = document.getElementById('personal-summary');
  summary.innerHTML = generateParagraphes(_resume_constants2.default.personalSummary.paragraphs);
}

function generateParagraphes(paragraphs) {
  return paragraphs.map(function (text) {
    return '<p>' + text + '</p>';
  }).join('');
}

function renderProjects() {
  var projects = document.getElementById('projects');
  _resume_constants2.default.projects.forEach(function (project) {
    var figure = void 0;
    if (project.image_location) {
      figure = document.createElement('figure');
      figure.className = 'project_image-wrapper';
      var link = document.createElement('a');
      link.href = project.url || project.repoUrl;
      link.innerHTML = '<img src=' + project.image_location + ' alt=' + (project.name + ' image') + ' class="project_image"/>';
      figure.appendChild(link);
    }

    var projectSection = document.createElement('section');
    projectSection.className = 'project clearfix';
    if (figure) {
      projectSection.appendChild(figure);
    }

    var header = document.createElement('h3');
    header.innerHTML = '<a href=' + (project.url || project.repoUrl) + '>' + project.name + '</a> - <a href=' + project.repoUrl + '>github</a>';
    projectSection.appendChild(header);

    var tools = document.createElement('p');
    tools.className = 'project_tools';
    tools.innerText = '(' + project.tools + ')';
    projectSection.appendChild(tools);

    var description = document.createElement('p');
    description.className = 'project_subheading';
    description.innerText = '(' + project.description + ')';
    projectSection.appendChild(description);

    var bullets = document.createElement('ul');
    project.bullets.forEach(function (point) {
      var bullet = document.createElement('li');
      bullet.className = 'project_bullet';
      bullet.innerText = point;
      bullets.appendChild(bullet);
    });
    projectSection.appendChild(bullets);

    projects.appendChild(projectSection);
  });
}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map