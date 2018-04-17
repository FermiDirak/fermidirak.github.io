/* example project object:
 *  let sampleProject = {
 *    imageUrl: './img/project.png',
 *    title: 'app_name',
 *    desc: 'app_desc',
 *    tags: ['tag1', 'tag2', 'tag3'],
 *    link: 'https://www.github...',
 *  }
 */

let projects = [
  // FOODSPOTS
  {
    imageUrl: './img/foodspots.png',
    title: 'FoodSpots',
    desc: 'An app for users to share their favorite food spots in the city. Users click on locations on their maps to add that place to their favorite food spots.',
    link: 'https://github.com/FermiDirak/FoodSpots',
    tags: ['react', 'redux', 'express', 'localstorage', 'serverless', 'mysql'],
  },
  // LOLTRACKR
  {
    imageUrl: './img/loltrackr.jpeg',
    title: 'LolTrackr',
    desc: 'LolTrackr lets competitive League players keep track of their ranked climbing progress, and overall statistics. It also keeps players up to date on champion by champion win-rates, the flavor of the month list, and more.',
    link: 'https://github.com/FermiDirak/LolTrackr',
    tags: ['android', 'mobile', 'maven', 'xml', 'java', 'playstore'],
  },
  // CHOMPY
  {
    imageUrl: './img/chompy.png',
    title: 'Chompy',
    desc: 'A restaurant review aggregator app with a microservice architecture. Optimized and load tested the application with 10 million fake entries and successfully deployed dockerized to EC2 with a loadbalancer.',
    link: 'https://github.com/codenamesgroup/Maps-and-Image-Carousel-Service',
    tags: ['react', 'express', 'aws', 'docker', 'artillery.io', 'redis', 'mysql', 'webscale', 'microservice'],
  },

  // HOMEWORK SCHEDULER
  {
    imageUrl: './img/homework.jpg',
    title: 'Homework Scheduler',
    desc: 'Homework is an easy-to-use, free, Homework itenerary. It is perfect for students of any age that want to stay organized and on time with every homework assignment.',
    link: 'https://github.com/FermiDirak/Homework-Scheduler',
    tags: ['android', 'mobile', 'maven', 'xml', 'java', 'playstore'],
  },
  // LEARN SERVERLESS
  {
    imageUrl: './img/serverless.png',
    title: 'LearnServerless',
    desc: 'A detailed walk through I created to demonstrate the power of serverless compared to serverful architectures.',
    link: 'https://github.com/FermiDirak/LearnServerlessNode',
    tags: ['react', 'express', 'spa', 'serverless', 'aws', 'lambda', 'medium'],
  },
  // PERSONAL WEBSITE
  {
    imageUrl: './img/personalwebsite.png',
    title: 'Personal Website',
    desc: 'You\'re on it! Built entirely from scratch from vanilla html, css, and javascript, this SPA uses modern patterns implemented from the ground up for maximal static performance.',
    link: 'https://github.com/FermiDirak/fermidirak.github.io',
    tags: ['html', 'css', 'routing', 'spa', 'static hosting', 'history api'],
  },
  // PLENTY MORE
  {
    imageUrl: './img/more.png',
    title: 'And Plenty More',
    desc: 'I\'m always writing practical code or learning something new or doing interesting things online. Come check me out the rest of my work on Github or on Medium.',
    link: 'https://github.com/FermiDirak',
    tags: ['everything', 'is', 'awesome', 'with', 'open', 'source'],
  },
]

/** creates a portfolio piece template
 * @param project {object} The data of the project to fill portfolio piece with
 * @return {string} the portfolio piece template */
let portfolioPiece = (project) => {
  return `
    <article class="app-container">
      <a href="${project.link}"><img class="app-image" src="${project.imageUrl}"/></a>

      <div class="app-container-content">
        <h2 class="app-title"><a href="${project.link}">${project.title}</a></h2>
        <p class="app-desc">${project.desc}</p>
        <a class="redirect-link" href="${project.link}">Learn More.</a>
        <ul class="tag-list">
          ${project.tags.map(label => `<li class="tag">${label}</li>`).join('')}
        </ul>
      </div>
    </article>
  `;
}

let portfolio = `
  <section class="portfolio">


  <h1>Portfolio Pieces</h1>

  ${projects.map(project => portfolioPiece(project)).join('')}

  <br/>

  <h3>But seriously, come check out what I've built!</h3>
  <a class="commit-log" href="https://github.com/fermidirak">
    <img src="http://ghchart.rshah.org/dd9911/fermidirak" alt="2016rshah's Github chart">
  </a>
  <br/>

  </section>
`;
