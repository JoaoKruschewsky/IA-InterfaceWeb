document.addEventListener("DOMContentLoaded", function() {
  const showBarsLink = document.getElementById("showbars");
  const mainBars = document.getElementById("main-bars");
  const templateBars = document.getElementById("bars");
  const closeBarsButton = document.getElementById("close-bars");

  // Adicionando um ouvinte de evento ao ícone de seta para baixo
 
      showBarsLink.addEventListener("click", function (event) {
          event.preventDefault(); // Previne o comportamento padrão do link

          // Verifica se o templateBars existe
          if (templateBars) {
              mainBars.innerHTML = templateBars.innerHTML;
              mainBars.style.display = 'block';
          }
      });

      // Adicionando um ouvinte de evento ao botão de fechar
  

//Funcoes dos Slides
  let count = 1
document.getElementById("radio1").checked = true

setInterval( function(){
    nextImage()
}, 5000)
  
function nextImage() {
    count++
    if(count > 4 ){
        count = 1
    }

    document.getElementById("radio"+count).checked = true

}
let elementosServices = document.querySelectorAll('.services');
elementosServices.forEach(function(elemento) {
  elemento.addEventListener('click', function() {
    Swal.fire({
  title: "Indisponivel",
  text: "Em breve...",
  icon: "error"
});
  });
});
});


// funcoes do slides       
