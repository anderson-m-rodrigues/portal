let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  slides.forEach(slide => slide.style.display = 'none');
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 7000); // Troca a cada 7 segundos
}

function changeSlide(n) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach(slide => slide.style.display = 'none');
  slideIndex += n;
  if (slideIndex > slides.length) { slideIndex = 1; }
  if (slideIndex < 1) { slideIndex = slides.length; }
  slides[slideIndex - 1].style.display = 'block';
}
