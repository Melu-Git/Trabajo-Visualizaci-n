function selectAvatar(avatarNumber) {
  const avatarImage = document.getElementById('selected-avatar');
  avatarImage.src = `imagenes/Diseño sin título (${avatarNumber}).gif`;
  avatarImage.alt = `Avatar ${avatarNumber} seleccionado`;
}




// carrousel
let currentSlide = 0;
const avatarsContainer = document.querySelector('.avatars');
const slides = avatarsContainer.querySelectorAll('.carousel-slide');
const slideCount = slides.length;
const slideWidth = 300;
const slidesToShow = 3; // Número de diapositivas a mostrar

// Carrousel
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

function nextSlide() {
  for (let i = currentSlide; i < currentSlide + slidesToShow; i++) {
    if (i < slideCount) {
      slides[i].style.display = 'none';
    }
  }
  
  currentSlide = (currentSlide + slidesToShow) % slideCount;
  
  for (let i = currentSlide; i < currentSlide + slidesToShow; i++) {
    if (i < slideCount) {
      slides[i].style.display = 'block';
    }
  }
}

function prevSlide() {
  for (let i = currentSlide; i < currentSlide + slidesToShow; i++) {
    if (i < slideCount) {
      slides[i].style.display = 'none';
    }
  }
  
  currentSlide = (currentSlide - slidesToShow + slideCount) % slideCount;
  
  for (let i = currentSlide; i < currentSlide + slidesToShow; i++) {
    if (i < slideCount) {
      slides[i].style.display = 'block';
    }
  }
}

// Mostrar las primeras diapositivas al inicio
for (let i = 0; i < slidesToShow; i++) {
  if (i < slideCount) {
    slides[i].style.display = 'block';
  }
}

