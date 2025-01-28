// Adicionar texto ao site
const form = document.getElementById('textForm');
const textsContainer = document.getElementById('textsContainer');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const newText = document.getElementById('newText').value;
  if (newText.trim() !== '') {
    const textElement = document.createElement('p');
    textElement.textContent = newText;
    textsContainer.appendChild(textElement);
    document.getElementById('newText').value = '';
  }
});

// Sistema de busca
const search = document.getElementById('search');

search.addEventListener('input', () => {
  const query = search.value.toLowerCase();
  const texts = textsContainer.querySelectorAll('p');

  texts.forEach((text) => {
    if (text.textContent.toLowerCase().includes(query)) {
      text.style.display = 'block';
    } else {
      text.style.display = 'none';
    }
  });
});
