// Create a div element to hold the overlay content
const overlay = document.createElement('div');
overlay.setAttribute('id', 'my-extension-overlay');
overlay.innerHTML = '<h3>Hello World!</h3>';

// Add the overlay to the webpage
document.body.appendChild(overlay);
