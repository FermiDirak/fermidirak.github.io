let getPathname = function() {
  let urlComponents = window.location.href.split('/');
  return urlComponents[urlComponents.length - 1];
}

let setPathname = function(pathname) {
  let urlComponents = window.location.href.split('/');
  urlComponents[urlComponents.length - 1] = pathname;
  let url = urlComponents.join('/');

  // window.location.href = url;

  window.history.pushState({}, pathname, url);
}

window.onpopstate = () => {
  let pathName = getPathname();
  contentDiv.innerHTML = routes[pathName];
}

let contentDiv = document.getElementById('content');

let routes = {
  '': homepage,
  'index.html': homepage,
  'portfolio': portfolio,
};


let onNavItemClick = (pathName) => {
  setPathname(pathName);
  contentDiv.innerHTML = routes[pathName];
}

contentDiv.innerHTML = routes[getPathname()];