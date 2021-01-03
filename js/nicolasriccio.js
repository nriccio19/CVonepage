  
$(function () {
    var words = [
      'passionné',
      'autodidacte',
      'un développeur'
    ],
    i = 0;
  
  
    // On gère l'affichage du menu responsif pour les écrans inférieurs ou égaux à medium (<992px)
    $(".navbar-responsive").toggle();
  
    $(".menu").click(function () {
      $(".navbar-responsive").toggle("slow");
    });
  
  
    // on gère l'affichage du niveau aléatoire des phrases d'accroches du header ( toutes les 3.5 sc)
    setInterval(function() {
      $("#word").fadeOut(function() {
        $(this).html(words[i = (i + 1) % words.length]).fadeIn();
      });
    }, 3500);
  
    // On gère le scroll vers les différentes sections du setInterval
    $(".scroll").click(function() {
      var section = $("." + this.id);
      $("html,body").animate({scrollTop: section.offset().top}, 'slow');
    });
  
    // On gère l'animation des progress-bar pour le scompétences
    window.sr = ScrollReveal();
    sr.reveal('.progress-bar', {
      origin: 'left',
      duration: 2000,
      distance: '100%'
    })
  });