let contentDiv = document.getElementById('content');

// window.location.hash = 'swag';

let routes = {
  '/': homepage,
  '/portfolio': portfolio,
};

let onNavItemClick = (itemName) => {
  window.location.pathname = itemName;
  contentDiv.innerHTML = routes[itemName];
}

contentDiv.innerHTML = routes[window.location.pathname];

