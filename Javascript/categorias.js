document.addEventListener("DOMContentLoaded", function () {
    // Select all curso-contenedor elements
    const cursoContenedores = document.querySelectorAll(".curso-contenedor");
  
    // Set the default number of cards to display
    const defaultDisplayCount = 3;
  
    // Hide all curso-contenedor elements
    cursoContenedores.forEach((card, index) => {
      if (index >= defaultDisplayCount) {
        card.style.display = "none";
      }
    });
  
    // Get all subCategorias elements
    const subCategorias = document.querySelectorAll(".subCategorias");
  
    // Add an event listener to each button element
    subCategorias.forEach((subCategoria) => {
      const button = subCategoria.querySelector("button");
      button.addEventListener("click", (event) => {
        const id = event.target.closest(".subCategorias").dataset.id;
  
        // Hide all curso-contenedor elements
        cursoContenedores.forEach((card) => {
          card.style.display = "none";
        });
  
        // Show the curso-contenedor elements with the matching data-id
        document.querySelectorAll(`.curso-contenedor[data-id="${id}"]`).forEach((card, index) => {
          // Display only the first defaultDisplayCount cards initially
          if (index < defaultDisplayCount) {
            card.style.display = "block";
          }
        });
      });
    });
  });


  function addUserCourse(courseId, courseTitle) {
    // Obtener la lista actual de cursos almacenados (si existe)
    const storedCourses = JSON.parse(localStorage.getItem('userCourses')) || [];
  
    // Verificar si el curso ya está en la lista (puedes ajustar esto según tus necesidades)
    const courseExists = storedCourses.some(course => course.id === courseId);
  
    if (!courseExists) {
      // Agregar el nuevo curso a la lista
      storedCourses.push({ id: courseId, title: courseTitle });
  
      // Actualizar la lista en localStorage
      localStorage.setItem('userCourses', JSON.stringify(storedCourses));
    }
  
    // Log para demostración (puedes eliminar esto en la implementación final)
    console.log(`Agregado curso a la lista del usuario: ${courseTitle} (ID: ${courseId})`);
  }
  document.addEventListener("DOMContentLoaded", function () {
    // Agrega un event listener a todos los botones con la clase 'add'
    const addButtons = document.querySelectorAll('.add');
    addButtons.forEach((addButton) => {
      addButton.addEventListener('click', (event) => {
        // Cambia el icono al hacer clic
        event.currentTarget.innerHTML = '<span class="material-symbols-outlined">done</span>';
        
        // Aquí puedes agregar lógica adicional para simular la adición del curso
        // (por ejemplo, llamar a la función addUserCourse).
  
        // Log para demostración (puedes eliminar esto en la implementación final)
        console.log('Curso agregado');
      });
    });
  
    // ... Resto del código
  
    // Función addUserCourse para simular la adición del curso
    function addUserCourse(courseId, courseTitle) {
      // Puedes agregar aquí la lógica para almacenar el curso (ej. en localStorage)
      console.log(`Curso agregado a la lista del usuario: ${courseTitle} (ID: ${courseId})`);
    }
  });
    