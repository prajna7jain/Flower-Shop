// Extend interactivity here! Example: Show a pop-up when clicking 'Shop Now'
document.querySelector("button").addEventListener("click", function() {
    alert("Redirecting to the shop page!");
});

fetch('flower.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('flower-container');

    data.forEach(flower => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <a href="${flower.image_url}" target="_blank">
          <img src="${flower.image_url}" alt="${flower.name}">
        </a>
        <h3>${flower.name}</h3>
        <p>Type: ${flower.type}</p>
        <p>Price: ₹${flower.price_in_inr}</p>
        <p>Image:${image_url}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => console.error('Error loading JSON:', error));

