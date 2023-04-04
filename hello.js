const heroImages = document.querySelectorAll('.hero-image');
const intervalTime = 5000;
let slideIndex = 0;

// Set the first image to active
heroImages[0].classList.add('active');

// Function to change the image
function changeImage() {
  // Remove the active class from the current image
  heroImages[slideIndex].classList.remove('active');
  // Increment the slide index
  slideIndex++;
  // If the slide index is greater than or equal to the number of images, reset it to 0
  if (slideIndex >= heroImages.length) {
    slideIndex = 0;
  }
  // Add the active class to the new image
  heroImages[slideIndex].classList.add('active');
}

// Set the interval to change the image every 5 seconds
setInterval(changeImage, intervalTime);
