import { TerminalSegment, TerminalLine } from '../../types'
export const resume = `
   _____ _    _ _____  __  __ _____ _   _ _____  
  / ____| |  | |  __ \\|  \\/  |_   _| \\ | |  __ \\ 
 | (___ | |  | | |__) | \\  / | | | |  \\| | |  | |
  \\___ \\| |  | |  _  /| |\\/| | | | | . \` | |  | |
  ____) | |__| | | \\ \\| |  | |_| |_| |\\  | |__| |
 |_____/ \\____/|_|  \\_\\_|  |_|_____|_| \\_|_____/ 
======================================================================
SURMIND | Hamed Kazemi - Mid/Senior Front-End Developer
"The only limitation is our imagination"
======================================================================
Email:  surrmind@gmail.com
GitHub: github.com/hmdkzm
Domain: surmind.dev
 
> PROFESSIONAL SUMMARY
    Front-End Developer with 6+ years of experience engineering modern, 
    responsive, and high-performance web applications using React, Next.js, 
    Vue, Nuxt, and Laravel. Possesses a strong analytical foundation 
    from a background in electronics and embedded systems, specializing 
    in modular UI architecture, optimization, and seamless API integrations.
 
> TECHNICAL SKILLS
    - Frameworks:     React.js, Next.js, Vue.js, Nuxt.js, Laravel
    - State & Data:   Redux, zustand, Pinia, Vuex, RESTful APIs, GraphQL, Apollo
    - Frontend Core:  TypeScript, JavaScript, HTML5, CSS3, SCSS
    - Libs & Visuals: GSAP, Handsontable, ag-grid, Chart.js, DHTMLX
    - Workflow/Eng:   Git Flow, Agile/Scrum/Kanban, OOP, Design Patterns
 
> CORE EXPERIENCE
 
Founder & Creative Developer @ Surmind (Self-Employed Startup)
January 2023 - Present
    * Establishing an independent creative-tech studio focusing on web 
      applications, digital art, and indie game prototypes.
    * Engineering the primary web platform using modern frontend stacks, 
      focusing on interactive UI experiences.

Front-End Developer @ IntelArt
April 2024 - January 2026
    * Engineered highly responsive IoT dashboards for device monitoring 
      using React, Next.js, and Laravel.
    * Built scalable, modular UI architecture with reusable components 
      and clean folder structures.
    * Elevated UX through micro-interactions and smooth UI animations 
      using GSAP.
 
Front-End Developer @ Independent Consultant / Client Projects
August 2020 - April 2024
    * Delivered multiple custom web applications for clients leveraging 
      React, Next.js, Vue.js, and Laravel.
    * Optimized frontend performance, significantly reducing bundle 
      sizes and page rendering times.
 
Front-End Developer @ Dream Days Company
January 2019 - July 2020
    * Developed B2B dashboards, complex hotel booking flows, and pricing/
      markup modules with Vue and Nuxt.js.
    * Integrated complex REST APIs and worked closely with backend teams 
      to resolve structural stability bottlenecks.
 
Front-End Developer @ Galactic Travels
September 2017 - September 2018
    * Implemented core booking and payment user journeys using HTML/CSS, 
      JavaScript, and jQuery.
 
Electronics & Embedded Systems Engineer @ Various Firms
December 2010 - August 2017
    * Designed industrial PCBs, embedded system firmware, and conducted 
      automation R&D.
 
> EDUCATION & CREDENTIALS
    - BA in Electrical & Electronic Engineering | Shahab Danesh University
    - Languages: English (B2/C1 in progress)
    - Interests: Bushcraft, Cooking, Art, Music, Camping
======================================================================`

export const surmindTerminalResume: TerminalLine[] = [
  // ASCII Header Art
  [
    {
      text: '   _____ _    _ _____  __  __ _____ _   _ _____  ',
      color: 'pink',
    },
  ],
  [
    {
      text: '  / ____| |  | |  __ \\|  \\/  |_   _| \\ | |  __ \\ ',
      color: 'pink',
    },
  ],
  [
    {
      text: ' | (___ | |  | | |__) | \\  / | | | |  \\| | |  | |',
      color: 'pink',
    },
  ],
  [
    {
      text: '  \\___ \\| |  | |  _  /| |\\/| | | | | . ` | |  | |',
      color: 'pink',
    },
  ],
  [
    {
      text: '  ____) | |__| | | \\ \\| |  | |_| |_| |\\  | |__| |',
      color: 'pink',
    },
  ],
  [
    {
      text: ' |_____/ \\____/|_|  \\_\\_|  |_|_____|_| \\_|_____/ ',
      color: 'pink',
    },
  ],

  [
    {
      text: '======================================================================',
      color: 'gray',
    },
  ],
  [
    { text: 'SURMIND', color: 'green', bold: true },
    { text: ' | Hamed Kazemi - ' },
    { text: 'Mid/Senior Front-End Developer', color: 'cyan' },
  ],
  [
    {
      text: '"The only limitation is our imagination"',
      color: 'gray',
      bold: true,
    },
  ],
  [
    {
      text: '======================================================================',
      color: 'gray',
    },
  ],

  // Contact Details
  [
    { text: 'Email:  ' },
    {
      text: 'surrmind@gmail.com',
      color: 'yellow',
      href: 'mailto:surrmind@gmail.com',
    },
  ],
  [
    { text: 'GitHub: ' },
    {
      text: 'github.com/hmdkzm',
      color: 'cyan',
      href: 'https://github.com/hmdkzm',
    },
  ],
  [
    { text: 'Domain: ' },
    { text: 'surmind.dev', color: 'green', href: 'https://surmind.dev' },
  ],
  [{ text: '' }], // Spacer

  // Professional Summary
  [{ text: '> PROFESSIONAL SUMMARY', color: 'pink' }],
  [
    {
      text: '    Front-End Developer with 6+ years of experience engineering modern, ',
    },
  ],
  [
    {
      text: '    responsive, and high-performance web applications using React, Next.js, ',
    },
  ],
  [
    {
      text: '    Vue, Nuxt, and Laravel. Possesses a strong analytical foundation ',
    },
  ],
  [
    { text: '    from a background in ' },
    { text: 'electronics and embedded systems', color: 'cyan' },
    { text: ', specializing ' },
  ],
  [
    {
      text: '    in modular UI architecture, optimization, and seamless API integrations.',
    },
  ],
  [{ text: '' }],

  // Technical Skills
  [{ text: '> TECHNICAL SKILLS', color: 'pink' }],
  [
    { text: '    - Frameworks:     ', color: 'cyan', bold: true },
    { text: 'React.js, Next.js, Vue.js, Nuxt.js, Laravel' },
  ],
  [
    { text: '    - State & Data:   ', color: 'cyan', bold: true },
    { text: 'Redux, zustand, Pinia, Vuex, RESTful APIs, GraphQL, Apollo' },
  ],
  [
    { text: '    - Frontend Core:  ', color: 'cyan', bold: true },
    { text: 'TypeScript, JavaScript, HTML5, CSS3, SCSS' },
  ],
  [
    { text: '    - Libs & Visuals: ', color: 'cyan', bold: true },
    { text: 'GSAP, Handsontable, ag-grid, Chart.js, DHTMLX' },
  ],
  [
    { text: '    - Workflow/Eng:   ', color: 'cyan', bold: true },
    { text: 'Git Flow, Agile/Scrum/Kanban, OOP, Design Patterns' },
  ],
  [{ text: '' }],

  // Core Experience
  [{ text: '> CORE EXPERIENCE', color: 'pink' }],
  [{ text: '' }],

  // Surmind Venture
  [
    { text: 'Founder & Creative Developer @ ' },
    { text: 'Surmind (Self-Employed Startup)', color: 'yellow', bold: true },
  ],
  [{ text: 'January 2023 - Present', color: 'gray' }],
  [
    {
      text: '    * Establishing an independent creative-tech studio focusing on web ',
    },
  ],
  [{ text: '      applications, digital art, and indie game prototypes.' }],
  [
    {
      text: '    * Engineering the primary web platform using modern frontend stacks, ',
    },
  ],
  [{ text: '      focusing on interactive UI experiences.' }],
  [{ text: '' }],

  // IntelArt
  [
    { text: 'Front-End Developer @ ' },
    { text: 'IntelArt', color: 'yellow', bold: true },
  ],
  [{ text: 'April 2024 - January 2026', color: 'gray' }],
  [
    {
      text: '    * Engineered highly responsive IoT dashboards for device monitoring ',
    },
  ],
  [{ text: '      using React, Next.js, and Laravel.' }],
  [
    {
      text: '    * Built scalable, modular UI architecture with reusable components ',
    },
  ],
  [{ text: '      and clean folder structures.' }],
  [
    {
      text: '    * Elevated UX through micro-interactions and smooth UI animations ',
    },
  ],
  [{ text: '      using GSAP.' }],
  [{ text: '' }],

  // Freelance
  [
    { text: 'Front-End Developer @ ' },
    {
      text: 'Independent Consultant / Client Projects',
      color: 'yellow',
      bold: true,
    },
  ],
  [{ text: 'August 2020 - April 2024', color: 'gray' }],
  [
    {
      text: '    * Delivered multiple custom web applications for clients leveraging ',
    },
  ],
  [{ text: '      React, Next.js, Vue.js, and Laravel.' }],
  [
    {
      text: '    * Optimized frontend performance, significantly reducing bundle ',
    },
  ],
  [{ text: '      sizes and page rendering times.' }],
  [{ text: '' }],

  // Dream Days
  [
    { text: 'Front-End Developer @ ' },
    { text: 'Dream Days Company', color: 'yellow', bold: true },
  ],
  [{ text: 'January 2019 - July 2020', color: 'gray' }],
  [
    {
      text: '    * Developed B2B dashboards, complex hotel booking flows, and pricing/',
    },
  ],
  [{ text: '      markup modules with Vue and Nuxt.js.' }],
  [
    {
      text: '    * Integrated complex REST APIs and worked closely with backend teams ',
    },
  ],
  [{ text: '      to resolve structural stability bottlenecks.' }],
  [{ text: '' }],

  // Galactic Travels
  [
    { text: 'Front-End Developer @ ' },
    { text: 'Galactic Travels', color: 'yellow', bold: true },
  ],
  [{ text: 'September 2017 - September 2018', color: 'gray' }],
  [
    {
      text: '    * Implemented core booking and payment user journeys using HTML/CSS, ',
    },
  ],
  [{ text: '      JavaScript, and jQuery.' }],
  [{ text: '' }],

  // Embedded Engineer
  [
    { text: 'Electronics & Embedded Systems Engineer @ ' },
    { text: 'Various Firms', color: 'yellow', bold: true },
  ],
  [{ text: 'December 2010 - August 2017', color: 'gray' }],
  [
    {
      text: '    * Designed industrial PCBs, embedded system firmware, and conducted ',
    },
  ],
  [{ text: '      automation R&D.' }],
  [{ text: '' }],

  // Education & Credentials
  [{ text: '> EDUCATION & CREDENTIALS', color: 'pink' }],
  [
    { text: '    - Education: ' },
    { text: 'BA in Electrical & Electronic Engineering', color: 'cyan' },
    { text: ' | Shahab Danesh University' },
  ],
  [
    { text: '    - Languages: ' },
    { text: 'English (B2/C1 in progress)', color: 'green' },
  ],
  [
    { text: '    - Interests: ' },
    { text: 'Bushcraft, Cooking, Art, Music, Camping' },
  ],
  [
    {
      text: '======================================================================',
      color: 'gray',
    },
  ],
]
