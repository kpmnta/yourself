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

  (function() {
    'use strict';
    window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
    if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
    }
    form.classList.add('was-validated');
    }, false);
    });
    }, false);
    })();