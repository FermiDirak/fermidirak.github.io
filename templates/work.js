let work = `
<section class="work">

  <h1>Work Experience</h1>

  ${projects.map(project => portfolioPiece(project)).join('')}

  <br/>

  <h3>But seriously, come check out what I've built!</h3>
  <a class="commit-log" href="https://github.com/fermidirak">
    <img src="http://ghchart.rshah.org/dd9911/fermidirak" alt="2016rshah's Github chart">
  </a>
  <br/>

</section>
`;