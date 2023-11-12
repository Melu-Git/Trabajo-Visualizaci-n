
    // -------------------------------------------script de la linea---------------------------------------
    let progressStep = 0;

    function updateProgressBar() {
      const progressLine = document.getElementById('StepsLine');
      progressLine.style.width = `${(progressStep * 33.33) + 33.33}%`;
    
      const steps = document.querySelectorAll('.steps');
      steps.forEach((step, index) => {
        const activeImg = step.querySelector('.active-img');
        const inactiveImg = step.querySelector('.inactive-img');
    
        if (index === progressStep) {
          step.classList.add('active');
          activeImg.style.display = 'block';
          inactiveImg.
          inactiveImg
    style.display = 'none';
        } else {
          step.classList.remove('active');
          activeImg.style.display = 'none';
          inactiveImg.style.display = 'block';
        }
      });
    }
    
    function nextStep() {
      if (progressStep < 2) {
        progressStep++;
        updateProgressBar();
      }
    }
    
    function prevStep() {
      if (progressStep > 0) {
        progressStep--;
        updateProgressBar();
      }
    }
    
    // Actualización inicial
    updateProgressBar();


    
    function redirigirAtras(pagina) {
        window.location.href = pagina;
      }
      