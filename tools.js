const imageContainers = document.querySelectorAll('.cont');

imageContainers.forEach(container => {
  const image = container.querySelector('image');
  const button = container.querySelector('.btn');

  container.addEventListener('mouseover', () => {
    button.style.display = 'block';
  });

  container.addEventListener('mouseout', () => {
    button.style.display = 'none';
  });
});

