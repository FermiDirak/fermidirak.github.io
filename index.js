let contentDiv = document.getElementById('content');

let pathname = window.location.pathname;

// window.location.hash = 'swag';

let routes = {
  '/': homepage,
  '/portfolio': portfolio,
};

let onNavItemClick = (itemName) => {
  pathname = itemName;
  contentDiv.innerHTML = routes[itemName];
}

contentDiv.innerHTML = routes[pathname];

