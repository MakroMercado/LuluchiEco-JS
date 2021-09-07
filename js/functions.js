
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

//CIERRA EL MENU HAMBURGUESA AL SCROLLEAR
window.onscroll = () =>{
  if (document.getElementById("navbarSupportedContent").classList.contains('show')){
    console.log("caca");
      document.getElementById("menuToggler").click();
  }
};

//ACOMODA EL ICONO DE CARRITO EN MENU HAMBURGUESA
const carrito = document.getElementById('iconCarrito');
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    if (carrito)
      carrito.classList.add('carritoHamb');
    $('.navbar').addClass('navbar--scroll');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    if (carrito)
      carrito.classList.remove('carritoHamb');
    $('.navbar').removeClass('navbar--scroll');
    menuOpen = false;
  }
});

//SUMA 1 LA CANTIDAD DEL CARRITO
const btnCarrito = document.getElementsByClassName('sumarCarrito');
const items = document.getElementById('items');
let cantidad = 0;

for (const btn of btnCarrito) {
  btn.onclick = function () {
    cantidad++;
    items.innerHTML = cantidad;
  }
}