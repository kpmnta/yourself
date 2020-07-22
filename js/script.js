$(document).ready(function(){
    // adiciona rolamento suave para todos os links
    $("a").on('click', function(event) {
  
      // Verifica se this.has possui um valor antes de prosseguir a função
      if (this.hash !== "") {
    
        event.preventDefault();
  
        // Armazena o hash
        var hash = this.hash;
  
        // Método de animação em jQuery para rolamento suave
        // 2000 (milisegundos para rolar até o destino)
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 2000, function(){
     
          // Adiciona o hash à URL após finalizar a rolagem
          window.location.hash = hash;
        });
      } // Fim if
    });
  });