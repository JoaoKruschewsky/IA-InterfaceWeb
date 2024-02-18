document.addEventListener("DOMContentLoaded", function () {

    const showBarsLink = document.getElementById("showbars");
    const mainBars = document.getElementById("main-bars");
    const templateBars = document.getElementById("bars");
    
    // Adicionando um ouvinte de evento ao ícone de seta para baixo
    
        showBarsLink.addEventListener("click", function (event) {
    
            event.preventDefault(); // Previne o comportamento padrão do link
    
            // Verifica se o templateBars existe
            if (templateBars) {
                mainBars.innerHTML = templateBars.innerHTML;
                mainBars.style.display = 'block';
            }
        });
     })