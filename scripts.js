const images = document.querySelectorAll('.image');

images.forEach((image) => {
  const title = image.getAttribute('data-title');
  const tooltip = document.createElement('span');
  tooltip.classList.add('tooltip');
  tooltip.innerText = title;
  image.appendChild(tooltip);
});
