const thumbnails = document.querySelectorAll('.img-thumb');
const bigImage = document.querySelector('.big-image img');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    // cambiar la imagen grande cuando se hace clic en la miniatura
    const newSrc = thumbnail.querySelector('img').getAttribute('src');
    bigImage.setAttribute('src', newSrc);
  });
});
