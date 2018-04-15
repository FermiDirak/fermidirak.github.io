let contentDiv = document.getElementById('content');

// window.location.hash = 'swag';

let routes = {
  '/index.html', homepage,
  '/': homepage,
  '/portfolio': portfolio,
};

let onNavItemClick = (itemName) => {
  console.log(itemName);

  window.location.pathname = itemName;
  contentDiv.innerHTML = routes[itemName];
}

contentDiv.innerHTML = routes[window.location.pathname];

