function slider() {
  let current = document.querySelector('.slider img.active');
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('active');
  } else {
    document.querySelector('.slider img:first-child').classList.add('active');
  }
  current.classList.remove('active');
}

setInterval(slider, 5000);
