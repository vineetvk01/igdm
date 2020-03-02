
window.carouselInit = (element, mediaArray) => {
  const carousel = dom('<div class="carousel"></div>');
  let activeMedia = 0;
  const leftButton = dom('<button class="carousel-left"></button>');
  const rightButton = dom('<button class="carousel-right"></button>');
  element.appendChild(carousel);
  element.appendChild(leftButton);
  element.appendChild(rightButton);

  var currentChild = getMediaInDOM(mediaArray[activeMedia]);

  leftButton.onclick = () => {
    activeMedia--;
    activeMedia = activeMedia < 0 ? mediaArray.length - 1 : activeMedia;
    carousel.removeChild(currentChild);
    currentChild = getMediaInDOM(mediaArray[activeMedia]);
    carousel.appendChild(currentChild);
  }

  rightButton.onclick = () => {
    activeMedia++;
    activeMedia = activeMedia > mediaArray.length - 1 ? 0 : activeMedia;
    carousel.removeChild(currentChild);
    currentChild = getMediaInDOM(mediaArray[activeMedia]);
    carousel.appendChild(currentChild);
  }

  carousel.appendChild(currentChild);
}
