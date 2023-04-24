module.exports = {
  pathPrefix: '',
  siteUrl: 'https://wanhanxi.github.io',
  title: 'Hanxi Wan',
  description: 'Personal Website of Hanxi Wan',
  author: 'Hanxi Wan',
  // authorAlternative: 'whx',
  introduction: [
    'I am currently an Undergraduate student majoring in **Computer Engineering** at [the University of Michigan](https://umich.edu/). I am also an undergraduate student majoring in **Electrical and Computer Engineering** in [UM-SJTU Joint Institute](https://www.ji.sjtu.edu.cn/) at [Shanghai Jiao Tong University](https://en.sjtu.edu.cn/) (SJTU).',
    'My interest mainly lies in Robotics and Reinforcement Learning. To be more specific, I am interested in robot perception and planning.',
  ],
  avatar: 'avatar.png',
  professions: [
    'Incoming ROB MS Student',
  ],
  tocMaxDepth: 2,
  excerptMaxLength: 500,
  birthday: 'Some day',
  location: 'Ann Arbor, MI',
  email: 'wanhanxi@umich.edu',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT
    || 'https://tc-imba.disqus.com/embed.js',
  pages: {
    home: '/',
    posts: 'posts',
    contact: 'contact',
    resume: 'resume',
    tags: 'tags',
    research: 'research',
  },
  social: [
    //{
    //  url: '/resume.pdf',
    //  icon: ['ai', 'cv'],
    //},
    {
      url: 'https://github.com/wanhanxi',
      icon: ['fab', 'github'],
    }, {
      url: 'https://www.linkedin.com/in/hanxi-wan-b2a999233/',
      icon: ['fab', 'linkedin'],
    },
  ],
  // facebook: 'https://www.facebook.com/rolwin.monteiro',
  // instagram: 'https://www.instagram.com/reevan100/',
  // rss: '/rss.xml',
  // wakatime: {
  //   username: 'tcimba',
  //   activity: '7add4047-08f9-4da8-b649-aa114503678f',
  //   language: '460a84ab-722a-4b80-b896-cabaa13ad7eb',
  //   editor: 'd851639a-28d8-4884-949f-d338a858f7e9',
  //   os: 'caf7d0d1-8fd2-4595-a991-363c8583fea9',
  // },
  // contactFormUrl: process.env.CONTACT_FORM_ENDPOINT
  //   || 'https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || 'G-JYKB2S6T6N',
  education: [
    {
      date: 'Aug 2021 - Present',
      icon: 'graduation-cap',
      title: 'Bachelor of Science, Engineering in Computer Engineering',
      location: 'University of Michigan, Ann Arbor, MI, United States',
    }, {
      date: 'Sep 2019 - Present',
      icon: 'university',
      title: 'Bachelor of Science in Electrical and Computer Engineering',
      location: 'Shanghai Jiao Tong University, Shanghai, China',
    }
  ],
  interests: [
    {
      icon: 'robot',
      title: 'Robotics Perception and Planning',
    }, {
      icon: 'brain',
      title: 'Reinforcement Learning',
    }],
  experience: [
    {
      title: 'Research',
      position: 'left',
      data: [
        {
          date: 'Sep 2022 - Present',
          title: 'Research Assistant',
          location: 'University of Michigan, Ann Arbor',
          description: 'Research on safe reinforcement learning for high-speed autonomous navigation at [ROAHM Lab](http://www.roahmlab.com/)',
        },
        {
          date: 'Apr 2022 - Present',
          title: 'Research Assistant',
          location: 'University of Michigan, Ann Arbor',
          description: 'Research on explainable reinforcement learning for highway driving',
        }
      ],
    }, {
      title: 'Work',
      position: 'right',
      data: [
        {
          date: 'Fall 2022',
          title: 'Grader of EECS 445 Introduction to Machine Learning',
          location: 'University of Michigan, Ann Arbor',
        },
      ],
    },
  ],
  awards: [
    {
      date: '2020',
      title: '2019-2020 Undergraduate Excellent Scholarship, SJTU',
    },
  ],
  tagColors: [
    'magenta', 'red', 'volcano', 'orange', 'gold',
    'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple',
  ],
  tags: [
    {
      id: 'javascript',
      name: 'javascript',
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    {
      id: 'rxjs',
      name: 'RxJS',
      description: 'RxJS is a library for reactive programming using Observables, for asynchronous operations.',
      color: '#eb428e',
    },
    {
      id: 'typescript',
      name: 'typescript',
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#257acc',
    },
    {
      id: 'reactjs',
      name: 'reactjs',
      description: 'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    {
      id: 'gatsby',
      name: 'Gatsby.js',
      description: 'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    {
      id: 'html',
      name: 'HTML',
      description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    {
      id: 'css',
      name: 'css',
      description: 'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
    {
      id: 'python',
      name: 'python',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },
  ],
};
