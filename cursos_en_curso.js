document.addEventListener("DOMContentLoaded", function () {
  // Obtener la lista de cursos almacenados
  const storedCourses = JSON.parse(localStorage.getItem('userCourses')) || [];

  // Mostrar el contador
  const cursosContainer = document.getElementById('cursosContainer');
  console.log(cursosContainer); // Agrega este log
  const contadorElement = document.createElement('p');
  contadorElement.textContent = `Total de cursos: ${storedCourses.length}`;
  cursosContainer.appendChild(contadorElement);

  // Mostrar los cursos en la página
  storedCourses.forEach(course => {
    const cursoDiv = document.createElement('div');
    cursoDiv.classList.add('curso');
    cursoDiv.innerHTML = `<h3>${course.title}</h3><p>ID: ${course.id}</p>`;
    cursosContainer.appendChild(cursoDiv);
  });
});
