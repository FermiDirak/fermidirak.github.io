let experiences = [
  {
    imageUrl: './img/aerendir.png',
    title: 'Aerendir: Machine Learning and Embedded Systems Development',
    desc: `
      <ul>
        <li>Participated in the development of an embedded machine learning framework</li>
        <li>Implemented in ansi C99 <a href="https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/tr-98-14.pdf">John Platt's SMO Support Vector Machines Classifier</a> for embedded systems</li>
        <li>Played a role in architecturing the data pipeline for our machine learning algorithms</li>
        <li>Developed and documented proprietary Digital Signal Processing (DSP) algorithms</li>
      </ul>
    `,
    link: 'https://www.linkedin.com/company/aerendir-mobile-inc-/',
  },
  {
    imageUrl: './img/e3s.jpg',
    title: 'UC Berkeley LBNL: Research in Graphene Nanoribbon Characterization',
    desc: `
      <ul>
        <li>Developed a novel dry transfer process for transferring atomically smooth 9 Angstrom wide Graphene Nanoribbons onto arbitrary substrates</li>
        <li>Characterized and imaged ribbons using Atomic Force Microscopy and spectral analysis</li>
      </ul>
    `,
    link: 'http://orange.eecs.berkeley.edu/research.html',
  },
  {
    imageUrl: './img/physShow.jpg',
    title: 'Physics Show: Presenter and Coordinator',
    desc: `
      <ul>
        <li>Developed and presented physics and engineering demonstrations to students from title X schools
        to increase their exposure and interest in the sciences</li>
        <li>Regularly presented to audiences upwards of 2000 students of all ages</li>
        <li>Lead the development of the demonstrations and the script</li>
      </ul>
    `,
    link: 'http://www.thephysicsshow.com/',
  },
  {
    imageUrl: './img/androidapps.png',
    title: 'Freelance Android Developer',
    desc: `
      <ul>
        <li>Developed and deployed three open source apps with over 5000 cumulative downloads</li>
        <li>Ensured quality of applications even after deployment</li>
        <li>Practiced agile and minimum viable product principles that allowed for responsive and scaling apps</li>
      </ul>
    `,
    link: 'https://play.google.com/store/apps/developer?id=User001',
  },
];

/** creates a portfolio experience template
 * @param experience {object} The data of the experience to fill portfolio experience with
 * @return {string} the portfolio experience template */
let portfolioExperience = (experience) => {
  return `
    <article class="app-container">
      <a href="${experience.link}"><img class="app-image" src="${experience.imageUrl}"/></a>

      <div class="app-container-content">
        <h2 class="app-title"><a href="${experience.link}">${experience.title}</a></h2>
        <p class="app-desc">${experience.desc}</p>
      </div>
    </article>
  `;
}

let work = `
  <section class="work">

    <h1>Work Experience</h1>

    ${experiences.map(experience => portfolioExperience(experience)).join('')}

    <br/>

  </section>
`;
