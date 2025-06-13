let flowerData = []; 

// Fetch the flower data and display
fetch('Plants.json')
  .then(response => response.json())
  .then(datas => {
    flowerData = datas.data;
    displayFlowers(flowerData); 
  });

// Display flower cards
function displayFlowers(data) {
  const container = document.getElementById('flower-container');
  container.innerHTML = ''; 

  data.forEach(flower => {
    const meaning = flower.meaning?.join(', ') || 'N/A';
    const otherNames = flower.other_name?.join(', ') || 'N/A';

    const flowerCard = document.createElement('div');
    flowerCard.className = 'flower';

    flowerCard.innerHTML = `
      <img src="${flower.default_image?.medium_url || 'imges/default.jpg'}" alt="${flower.common_name}" />
      <h3>${flower.color}</h3>
      <p><strong>Meaning:</strong> ${meaning}</p>
      <p><strong>Other Names:</strong> ${otherNames}</p>
    `;

    container.appendChild(flowerCard);
  });
}

// Search functionality
document.getElementById('searchInput').addEventListener('input', function () {
  const keyword = this.value.toLowerCase();

  const filtered = flowerData.filter(flower =>
    flower.common_name?.toLowerCase().includes(keyword) ||
    flower.scientific_name?.some(name => name.toLowerCase().includes(keyword)) ||
    flower.other_name?.some(name => name.toLowerCase().includes(keyword))
  );

  displayFlowers(filtered);
});



