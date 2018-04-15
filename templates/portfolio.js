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
  {
    imageUrl: './img/e3s.jpg ',
    title: 'FoodSpots',
    desc: 'An app for users to share their favorite food spots in the city',
    link: '',
    tags: ['react', 'redux', 'express', 'serverless', 'mysql'],
  },
]

/** creates a portfolio piece template
 * @param project {object} The data of the project to fill portfolio piece with
 * @return {string} the portfolio piece template */
let portfolioPiece = (project) => {
  return `
    <article class="app-container">
      <img class="app-image" src=${project.imageUrl}/>

      <div class="app-container-content">
        <h2 class="app-title">${project.title}</h2>
        <p>${project.desc}</p>
        <ul class="tag-list">
          ${project.tags.map(label => `<li class="tag">${label}</li>`).join('')}
        </ul>
      </div>
    </article>
  `;
}

let portfolio = `
  <section class="portfolio">


  <h1>Portfolio</h1>

  ${projects.map(project => portfolioPiece(project)).join('')}

  </section>
`;