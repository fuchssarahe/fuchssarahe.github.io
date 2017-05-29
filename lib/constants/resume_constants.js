const resumeConstants = {
  contact: {
    name: 'Sarah Fuchs',
    email: 'fuchssarahe@gmail.com',
    phone: '(262) 227-7987',
    linkedin: 'https://www.linkedin.com/in/sarah-fuchs-7a846b4a',
    github: 'https://github.com/fuchssarahe',
    location: 'San Francisco, CA'
  },

  personalSummary: { 
    paragraphs: [
      "I'm Sarah - a web developer in the San Francisco Bay area, currently seeking employment with a company that values quality, innovation, and user experience. My experience is largely in JavaScript, React, and Ruby on Rails, but I have a hunger to keep learning new tools and techniques.",
      "Feel free to reach out if you're interested in chatting about my projects, employment, or web development in general!"]
  },

  projects: [
    { name: 'Camellia.io',
      image_location: 'images/camellia_image.png',
      tools: 'React.js, Ruby on Rails',
      description: 'Single-page responsive app with RESTful API - built for finding and reviewing teas',
      role: 'sole-developer',
      url: 'http://www.camellia.io',
      repoUrl: 'http://github.com/fuchssarahe/Camellia',
      bullets: ['Typeahead search: Intelligently decides how to generate search suggestions based on the query, minimizing unnecessary HTTP requests',
                'Custom star-rating selector for reviews: Layers CSS backgrounds and HTML elements to allow mouse position to determine number of stars displayed',
                'Image uploading: Accesses the FormData web API to transfer files to the server for upload, keeping the UI clean and consistent across the site']
    },
    { name: '3x Guitar Practicer',
      image_location: 'images/guitar-snapshot.png',
      tools: 'Ruby, JavaScript, Python',
      description: 'Command-Line tool for teaching guitar chords - reproduced in 3 different lanuages',
      role: 'sole-developer',
      url: null,
      repoUrl: 'https://github.com/fuchssarahe/guiter_practice',
      bullets: ['Ruby: Tree data structure used to quickly determine which chords to display to the user',
                'JavaScript: Asynchronous functionality handled differently to provide identical user experience between implementations',
                'Python: Taught myself Python for the express purpose of building this project with a new, unique set of language-based limitations']
    },
    { name: 'Stuff Picker',
      image_location: 'images/stuff_picker_gif.gif',
      tools: 'JavaScript',
      description: 'Browser-based activity picker built in vanilla JS and canvas',
      role: 'sole-developer',
      url: 'https://fuchssarahe.github.io/stuff_picker/',
      repoUrl: 'https://github.com/fuchssarahe/stuff_picker',
      bullets: ['Dynamically renders content by direct DOM manipulation, avoiding bulky frameworks and keeping the product lean',
                'Integrates with navigator/geolocation web API and Google Maps API, handling interactions uniquely based on user permissions']
    },
    {
      name: 'Minesweeper',
      image_location: 'images/minesweeper-gif.gif',
      tools: 'React, JavaScript',
      description: 'Traditional little Minesweeper game built by pair-programming with another developer',
      role: 'Front End Developer',
      url: 'https://fuchssarahe.github.io/mineweeper',
      repoUrl: 'https://github.com/fuchssarahe/minesweeper',
      bullets: ['Accomplishes tremendous advancement in the Minesweeper industry!']
    },
    { name: 'Baby Active Record',
      image_location: null,
      tools: 'Ruby, SQL',
      description: 'Basic version of Active Record (library for object relational mapping in Rails)',
      role: 'sole-developer',
      url: null,
      repoUrl: 'https://github.com/fuchssarahe/activerecordlite',
      bullets: ['Emphasizes metaprogramming and object inheritance (while eliminating the magic around Rails)']
    }
  ],

  work: [
    { role: 'Technical Support Specialist',
      company: 'Merus, Inc',
      dateRange: 'June 2015 – April 2016',
      responsibilities: 'Data Migration, Engineering Team Liaison',
      bullets: ['Crafted SQL queries to manipulate, update, and clean 1000s of GBs of client data',
                'Steered the data migration process, resulting in the successful onboarding of 10+ firms',
                'Coordinated with software engineers, the sales team, and legal professionals to always achieve our 99% data transfer guarantee']
    },
    { role: 'Biomaterials Research Team Lead',
      company: 'The Ohio State University (OSU)',
      dateRange: 'Aug 2014 – May 2015',
      responsibilities: null,
      bullets: ['Iteratively designed and implemented an experiment to decrease the release rate of an anti-fertility drug for controlling feral dog and cat populations using polymer-fiber capsules',
                'Ultimately reduced release rates by ~200%, achieving long-term release',
                'Presented at the 6th Annual Engineering Capstone Design Showcase at OSU']
    },
    { role: 'R&D Welding Engineering Intern',
      company: 'The Lincoln Electric Company',
      dateRange: 'May 2013 – Aug 2013',
      responsibilities: null,
      bullets: ['Invented welding process which combines two types of welding (flux and gas shielded) to achieve a stronger, purer weld']
    }
  ],

  skills: {
    web: ['JavaScript', 'React.js', 'Flux', 'Ruby', 'Rails', 'SQL', 'Git', 'jQuery', 'HTML', 'CSS', 'RSpec', 'jBuilder', 'Capybara', 'Python'],
    engineering: ['MATLAB', 'Autodesk Inventor', 'CrystalMaker', 'ABAQUS', 'CES EduPack']
  },

  education: [
    { credential: 'App Academy',
      location: 'San Francisco',
      date: 'May 2016',
      details: '1000-hour course in web development (<3% admission rate)'
    },
    { credential: 'B.S. Materials Science & Engineering',
      location: 'The Ohio State University',
      date: '2015',
      details: 'Graduated cum laude (GPA: 3.6)'
    }
  ]
}

module.exports = resumeConstants;
