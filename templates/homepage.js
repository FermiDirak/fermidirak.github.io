
// most recent at the top
const blogPosts = [
  {
    title: 'React Hooks — Best practices & a shift in mindset',
    url: 'https://medium.com/@bryanmanuele/react-hooks-best-practices-a-shift-in-mindset-8fd0e58e4b0b',
    date: 'Mar 22, 2019',
  },
  {
    title: 'Learning by Doing: The designing and building of Foodsie.io',
    url: 'https://medium.com/hackernoon/learning-by-doing-the-designing-and-building-of-foodsie-io-9c05103c3370',
    date: 'Jul 30, 2018',
  },
  {
    title: 'Sessionless Authentication using JWTs (with Node + Express + Passport JS)',
    url: 'https://medium.com/@bryanmanuele/sessionless-authentication-withe-jwts-with-node-express-passport-js-69b059e4b22c',
    date: 'Jul 16, 2018',
  },
  {
    title: 'Stepping up your Javascript Development Experience to Professional Levels with the latest and greatest of the ECMA Standard',
    url: 'https://medium.com/@bryanmanuele/stepping-up-your-javascript-development-experience-to-professional-levels-with-the-latest-and-363bbec332f4',
    date: 'May 23, 2018',
  },
  {
    title: 'How I Implemented my own SPA Routing System in Vanilla JS',
    url: 'https://medium.com/@bryanmanuele/how-i-implemented-my-own-spa-routing-system-in-vanilla-js-49942e3c4573',
    date: 'Apr 25, 2018',
  },
];

const homepage = `
  <section class="bio">
    <div class="bio-content">
      <h1>Bryan Manuele</h1>
      <h3>Profesional Full Stack Developer | Product Architect</h3>

      <br/>

      <p>
        I'm a full stack engineer who likes to build things and build things well.
        I have three apps with over 5000 downloads published to the google play store,
        have lead the development of a core embedded machine learning library module at a
        start-up, and have extensive knowledge over the front-end ecosystem.
      </p>

      <p>
        I’ve given presentations on topics ranging from the fundamentals of machine
        learning to a how-to on remixing songs with turntables. I’m also a regular
        publisher of online media, from technical articles on Medium to electronic music
        on Soundcloud.
      </p>

      <div class="button-holder">
        <a class="content-button" href="./resume.pdf">Résumé</a>
        <a class="content-button" href="#" onclick="onNavItemClick('/contact'); return false;">Contact</a>
      </div>

    </div>

    <img class="portrait-image" src="./me.jpg">
  </section>

  <section class="posts-section">
    <h2 class="posts-section-header">Blog posts</h2>
    <ul class="posts-list">
      ${blogPosts.map((post, i) => `
        <li class="blog-item">
          <a class="blog-title" href="${post.url}">${post.title}</a>
          <div class="publish-date">Published ${post.date}</div>
          ${i !== blogPosts.length - 1 ? '<hr class="blog-item-hr" />' : ''}
        </li>
      `).join('\n')}
    </ul>
  </section>
`;
