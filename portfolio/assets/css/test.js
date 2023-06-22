$(document).ready(function() {
    // Ajoutez la classe 'transparent' lorsque la souris est tout en haut
    $(window).scroll(function() {
      if ($(this).scrollTop() === 0) {
        $('.header').addClass('transparent');
      } else {
        $('.header').removeClass('transparent');
      }
    });
  });