// Función para actualizar la selección de avatar
function selectAvatar(avatarNumber) {
  const avatarImage = document.getElementById('selected-avatar');
  avatarImage.src = `imagenes/Diseño sin título (${avatarNumber}).gif`;
  avatarImage.alt = `Avatar ${avatarNumber} seleccionado`;
}

// Variables del carrusel
let currentSlide = 0;
const avatarsContainer = document.querySelector('.avatars');
const slides = avatarsContainer.querySelectorAll('.carousel-slide');
const slideCount = slides.length;
const slidesToShow = 3; // Número de diapositivas a mostrar

// Botones de navegación
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// EventListeners para los botones
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Función para avanzar a la siguiente diapositiva
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
      // Llamada a la función selectAvatar para actualizar el avatar seleccionado
      selectAvatar(i + 1);
    }
  }
}

// Función para retroceder a la diapositiva anterior
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
      // Llamada a la función selectAvatar para actualizar el avatar seleccionado
      selectAvatar(i + 1);
    }
  }
}

// Mostrar las primeras diapositivas al inicio
for (let i = 0; i < slidesToShow; i++) {
  if (i < slideCount) {
    slides[i].style.display = 'block';
    // Llamada a la función selectAvatar para actualizar el avatar seleccionado
    selectAvatar(i + 1);
  }
}
