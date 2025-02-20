document.addEventListener('DOMContentLoaded', function () {
    const autores = document.querySelectorAll('.card[data-autor]');
    const popupContainer = document.getElementById('popup-container');
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');
    const closePopupButton = document.getElementById('close-popup');

    // Informações dos autores
    const autoresInfo = {
        machado: {
            nome: 'Machado de Assis',
            bio: 'Joaquim Maria Machado de Assis, amplamente considerado o maior escritor brasileiro, é um dos fundadores da Academia Brasileira de Letras.',
            obras: ['Memórias Póstumas de Brás Cubas', 'Dom Casmurro', 'Quincas Borba']
        },
        aluisio: {
            nome: 'Aluísio Azevedo',
            bio: 'Aluísio Tancredo Gonçalves de Azevedo foi um escritor, jornalista, caricaturista, diplomata e contista brasileiro. É considerado, juntamente com Machado de Assis, o fundador da Academia Brasileira de Letras.',
            obras: ['O Cortiço', 'Casa de Pensão']
        },
        raul: {
            nome: 'Raul Pompeia',
            bio: 'Raul d’Ávila Pompeia foi um escritor, intelectual e abolicionista brasileiro. É famoso por seu romance O Ateneu, publicado em 1888.',
            obras: ['O Ateneu']
        }
    };

    // Função para exibir o pop-up com as informações do autor
    autores.forEach(autor => {
        autor.addEventListener('click', function () {
            const autorSelecionado = this.getAttribute('data-autor');
            const info = autoresInfo[autorSelecionado];

            popupContent.innerHTML = `
                <h2>${info.nome}</h2>
                <p>${info.bio}</p>
                <h3>Principais Obras:</h3>
                <ul>
                    ${info.obras.map(obra => `<li>${obra}</li>`).join('')}
                </ul>
            `;

            popupContainer.classList.add('show');
            popup.classList.add('show');
        });
    });

    // Fechar o pop-up
    closePopupButton.addEventListener('click', function () {
        popupContainer.classList.remove('show');
        popup.classList.remove('show');
    });

    // Fechar o pop-up ao clicar fora dele
    popupContainer.addEventListener('click', function (event) {
        if (event.target === popupContainer) {
            popupContainer.classList.remove('show');
            popup.classList.remove('show');
        }
    });

    // Carrossel
    let slideIndex = 0;
    showDivs();

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    function currentDiv(n) {
        showDivs(slideIndex = n - 1);
    }

    function showDivs() {
        let i;
        let x = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("demo");
        if (slideIndex >= x.length) { slideIndex = 0 }
        if (slideIndex < 0) { slideIndex = x.length - 1 }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" w3-white", "");
        }
        x[slideIndex].style.display = "block";
        dots[slideIndex].className += " w3-white";
        slideIndex++;
        setTimeout(showDivs, 2000); // Muda a imagem a cada 2 segundos
    }
});