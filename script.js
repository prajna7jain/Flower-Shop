let flowersAll = []; 

// Fetch the flower data and display
fetch('flowers.json')
  .then(response => response.json())
  .then(datas => {
    flowersAll = datas.flowers;
    displayFlowers(flowersAll); 
  });

function displayFlowers(flowers) {
  const container = document.getElementById('flower-container');
  container.innerHTML = ''; 

  flowers.forEach(flower => {
    const flowerCard = document.createElement('div');
    flowerCard.className = 'flower';

    flowerCard.innerHTML = `
      <img src="${flower.image}" alt="${flower.name}" />
      <h3>${flower.name || "Unnamed Flower"}</h3>
      <p><strong>Color:</strong> ${flower.colors.join(', ')}</p>
      <p><strong>Meaning:</strong> ${flower.meaning}</p>
    `;

    container.appendChild(flowerCard);
  });
}
