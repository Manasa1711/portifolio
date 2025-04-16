// script.js

function enlargeImage(imgElement) {
    const enlargedContainer = document.querySelector('.enlarged-image-container');
    const enlargedImage = document.getElementById('enlargedImage');
    enlargedImage.src = imgElement.src;
    enlargedContainer.style.display = 'flex';
  }
  
  function closeImage() {
    document.querySelector('.enlarged-image-container').style.display = 'none';
  }
  