const section1 = document.getElementById('section1');
        const section2 = document.getElementById('section2');

        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;

            if (scrollPosition >= section1.offsetHeight) {
                section1.style.backgroundColor = '#00ff00';
                section2.style.backgroundColor = '#ff0000';
            } else {
                section1.style.backgroundColor = '#ff0000';
                section2.style.backgroundColor = '#00ff00';
            }
        });