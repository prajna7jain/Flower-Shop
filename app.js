fetch('flowers.json')
  .then(response => response.json())
  .then(datas => {
    const container = document.getElementById('flower-container');
    container.classList.add('flower-grid');

    datas.data.forEach(flower => {
      const flowerCard = document.createElement('div');
      flowerCard.className = 'flower';

      flowerCard.innerHTML = `
        <img src="${flower.default_image?.medium_url || 'imges/default.jpg'}" alt="${flower.common_name}">
        <h3>${flower.common_name}</h3>
        <p><em>${flower.other_name?.[0] || ''}</em></p>
        <p><em>${flower.scientific_name?.[0] || ''}</em></p>

      `;

      container.appendChild(flowerCard);
    });
  })
  .catch(error => console.error('Error loading JSON:', error));
