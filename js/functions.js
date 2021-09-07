
//NO PERMITE EL SCROLL PARA DAR LUGAR AL BLUR DEL HOME
if (document.getElementById('containerInicio')){
  document.body.classList.add("noscroll");
  noScroll = () => {    
      document.body.classList.remove("noscroll");
  }
  window.setTimeout(noScroll, 3000);
}


//AGREGA UN BORDER AL HEADER CUANDO SCROLLEAR Y OCULTA O MUESTRA LA FLECHA DE IR ARRIBA
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.navbar').addClass('navbar--scroll');
    } else {
        $('.navbar').removeClass('navbar--scroll');
    }

    if ($(window).scrollTop() > 300 && $(window).scrollTop() + 200< $(document).height() - $(window).height()) {
      $('#arriba').addClass('mostrar');
      $('#arriba').removeClass('ocultar');
    } else {
      $('#arriba').removeClass('mostrar');
      $('#arriba').addClass('ocultar');
    }
});
