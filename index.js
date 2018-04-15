let contentDiv = document.getElementById('content');

let url = window.location.pathname;

// window.location.hash = 'swag';

let routes = {
  '/': homepage,
  '/portfolio': portfolio,
};

let onNavItemClick = (itemName) => {
  contentDiv.innerHTML = routes[itemName];
}

contentDiv.innerHTML = routes['/'];

