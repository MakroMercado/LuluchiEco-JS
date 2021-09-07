$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.navbar').addClass('navbar--scroll');
    } else {
        $('.navbar').removeClass('navbar--scroll');
    }

    if ($(window).scrollTop() > 200 ) {
        $('#arriba').addClass('mostrar');
        $('#arriba').removeClass('ocultar');
      } else {
        $('#arriba').removeClass('mostrar');
        $('#arriba').addClass('ocultar');
      }
})
