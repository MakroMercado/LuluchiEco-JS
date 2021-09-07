//CLASE PRODUCTO
class Producto {
   constructor(id, titulo, carpetaIMG, categoria, descripcion, precio, stock, cantidad) {
      this.id  = id;
      this.titulo = titulo;
      this.carpetaIMG = carpetaIMG;
      this.categoria = categoria;
      this.descripcion = descripcion;
      this.precio  = parseFloat(precio);
      this.stock = stock;
      this.cantidad = cantidad;
      this.precioTotal = this.precio * this.cantidad;
   }
   
   setCantidad(valor){
      if (valor == 0)
         this.cantidad = 0;
      else
         this.cantidad += valor;
      this.actualizarPrecio();
   }

   actualizarPrecio(){
      this.precioTotal = this.precio * this.cantidad;
   }

}

//CLASE CARRITO
class Carrito{
   constructor(productosStorage){
      if (productosStorage)
         this.productos = productosStorage.productos.map( producto => new Producto(producto.id, producto.titulo, producto.carpetaIMG, producto.categoria, producto.descripcion, producto.precio, producto.stock, producto.cantidad));
      else
         this.productos = [];
   }
 
   agregarProducto(productoNuevo){
      productoNuevo.setCantidad(1);
      this.productos.push(productoNuevo);
   }

   borrarProducto(productoID){
      this.cambiarCantidad(productoID, 0);
      this.productos = this.productos.filter( producto => producto.id != productoID);
   }

   cambiarCantidad(productoID, valor){
      this.productos.find(producto => producto.id == productoID).setCantidad(valor);
   }
 
   vaciarCarrito(){
      this.productos.forEach( producto => producto.cantidad = 0);
      this.productos = [];
   }

   //Retornar el precio Total del producto 
   totalProducto(productoID){
      return this.productos.find(producto => producto.id == productoID).precioTotal;
   }

   //Retorna el precio total del carrito
   totalCarrito(){
      let resultado = 0;
      this.productos.forEach( producto => resultado += producto.precioTotal);
      return resultado;
   }
}

/********************************************* */
//Obtiene el JSON
var llamada = $.getJSON("productos.json", function (respuesta, estado){
   if (estado === "success"){
      //Crea array de tipo producto con lo obtenido del JSON
      const arrayProductos = respuesta.map( producto =>
         new Producto(
            producto.id,
            producto.titulo, 
            producto.carpetaIMG, 
            producto.categoria, 
            producto.descripcion, 
            producto.precio, 
            producto.stock,
            0
         )
      )
      //Obtiene el carrito del localStorage
      const carrito = new Carrito(JSON.parse(localStorage.getItem("carritoLocal")));
      
      //PRIMER CARGA
      ordenarProductos(arrayProductos, carrito);//Ordenar por defecto alfabeticamente
            
      validarDropdowns(arrayProductos, carrito);//Valida los dropdown de ordenamiento y categoria

      mostrarProductos(arrayProductos, carrito);//Carga los productos en el html

      actualizarItems(carrito);//Actualiza la cantidad de items en el nav

      validarBtnNavCarrito(arrayProductos, carrito); //Valido del boton del nav para abrir el carrito
   }
});

/*******************************************/
//DROPDOWN ORDEN Y CATEGORIA
const validarDropdowns = (arrayProd,cart) =>{
   //Obtiene el atributo orden con el tipo de orden para llamar a la funcion "OrdenarProductos"
   $(".itemOrdenar").click( function () {
      ordenarProductos(arrayProd, $(this).attr("orden"));
      mostrarProductos(arrayProd, cart);
   })

   //Obtiene el atributo actual con el tipo de categoria  a mostrar
   $(".itemCategoria").click( function () {
      $(`#dropdownCategorias`).attr("actual", $(this).attr("categoria"));
      mostrarProductos(arrayProd, cart);
   })
}

//Ordenar el array segun parametro ingresado
const ordenarProductos = (arrayProd, tipoDeOrden = "nombreASC") =>{ //FUNCION PARA ORDENAR ARRAY
   switch (tipoDeOrden){
      case "nombreASC":
         arrayProd.sort((a,b) => a.titulo.localeCompare(b.titulo));
         break;
      case "nombreDESC":
         arrayProd.sort((a,b) => b.titulo.localeCompare(a.titulo));
         break;
      case "precioASC":
         arrayProd.sort((a,b) => a.precio - b.precio);
         break;
      case "precioDESC":
         arrayProd.sort((a,b) => b.precio - a.precio);
         break;
  }   
}

//CREA LOS ARTICLE Y MUESTRA LOS PRODUCTOS SEGUN CATEGORIA
const mostrarProductos = (arrayProd, cart) =>{
   const categoria = $(`#dropdownCategorias`).attr("actual");//Obtiene la categoria del dropdown
   $("#productos").empty();//Vacía el elemento padre
   for (const producto of arrayProd){//Recorre el array obtenido del JSON
      if (producto.categoria == categoria || categoria == "todos" || categoria == "stock" && producto.stock){//Chequea la condicion de categoria
         let $articleProducto = $("<article></article>").addClass("producto wow animate__animated animate__fadeInUp");//Elemento padre
            
         //Titulo y borde
         $articleProducto.append(`<div class="producto__nombre"><h3>${producto.titulo}</h3></div>`);
         $articleProducto.append(`<div class="producto__borde"></div>`);

         //Carousel de imagenes
         $articleProducto.append(`<div id=${producto.id} class="carousel slide" data-ride="carousel"><div class="carousel-inner"></div></div>`);
         $("#productos").append($articleProducto);
         cicloImagenes: //Si el articulo no esta en stock solo muestra una imagen y elimina los controles del carousel
            for (let i = 1; i <= 3; i++){
               $(`#${producto.id} > .carousel-inner`).append(`<div class="carousel-item ${i == 1 ? "active" : ""}"><img src="img/tienda/${producto.carpetaIMG}/${producto.id}${i}.jpg" alt="Imagen ${producto.id}"></div>`);
               if (!producto.stock) break cicloImagenes;
            }
         if (producto.stock) $(`#${producto.id}`).append(`<a class="carousel-control-prev" href="#${producto.id}" data-slide="prev"><i class="fas fa-chevron-left flecha"></i></a><a class="carousel-control-next" href="#${producto.id}" data-slide="next"><i class="fas fa-chevron-right flecha"></i></a>`);

         //Precio y Stock //Si el articulo no esta en stock cambia el estilo del precio y el stock
         $articleProducto.append(`<div class="producto__precio precio ${!producto.stock ? "sinStock" : ""}"><p>$${producto.precio.toFixed(2)} - ${producto.stock ? "En" : "Sin"} Stock</p><div>`);

         //Boton Info //Si el articulo no esta en stock deshabilita el boton
         $articleProducto.append(`<button class="btn btn-success" data-toggle="modal" data-target="#modal${producto.id}" ${!producto.stock ? "disabled" : ""}>Mas info <i class="fas fa-book"></i></button>`);       

         //Modal Descripcion
         $articleProducto.append(`
            <div id="modal${producto.id}" class="modal fade" tab-index="-1" aria-hidden="true">
               <div class="modal-dialog">
                  <div class="modal-content">
                     <div class="modal-header">       
                        <h5 class="modal-title">${producto.descripcion.tituloModal}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                        </button>
                     </div>
                     <div class="modal-body">
                     </div>
                  </div>
               </div>
            </div>`);
         $("#productos").append($articleProducto);
         //Recorro la cantidad de parrafos y de la lista del producto obtenido en el JSON
         producto.descripcion.parrafos.forEach( parrafo => $(`#modal${producto.id} >>> .modal-body`).append(`<p>${parrafo}</p>`));
         let strLista = `<ul><hr>`;
         producto.descripcion.lista.forEach( lista => strLista += `<li>${lista}</li>`);
         $(`#modal${producto.id} >>> .modal-body`).append(strLista);

         //Boton Agregar al carrito //Si el articulo no esta en stock deshabilita el boton
         const enCarrito = cart.productos.some( produ => produ.id == producto.id);
         $articleProducto.append(`<button class="btn btn-success agregarCarrito" productoID=${producto.id} ${!producto.stock ? "disabled" : ""}${enCarrito ? 'data-toggle="modal" data-target="#modalCarrito"> Añadido' : ">Añadir" }<i class="fas fa-cart-plus"></i></button>`);
         
         //Agrego el article completo
         $("#productos").append($articleProducto);
      }//CIERRE IF
   }//CIERRE FOR

   validarBtnAnadir(arrayProd, cart);//Valido los botones De añadir
}

//Valida los botones de añadir al carrito
//Si el producto ya está en el carrito, abre el modal carrito desde donde se puede cambiar su cantidad
//Si el producto no esta, lo agrega al carrito y se despliega una alerta desde abajo
const validarBtnAnadir = (arrayProd, cart) =>{
   $(`.agregarCarrito`).click( function () {
      if ($(this).html().includes("Añadido")){//si ya esta en el carrito
         $("#nav-carrito").trigger("click");//abre carrito
      }
      else{//si no esta en el carrito
         cart.agregarProducto(arrayProd.find(producto => producto.id == $(this).attr("productoID")));//lo agrega
         localStorage.setItem("carritoLocal", JSON.stringify(cart));//actualiza el carrito en localStorage
         mostrarProductos(arrayProd,cart);//carga nuevamente la pagina actualizada
         $(`#avisoCarrito`).slideDown(500).delay(1200).slideUp(500);//alerta añadido    
      }
      actualizarItems(cart);//actuliza la cantidad en el nav
   });
}

//Validad el nav carrito (Abre el modal carrito)
const validarBtnNavCarrito = (arrayProd, cart) =>{
   $("#nav-carrito").click( () => {
      mostrarCarrito(arrayProd, cart);
   });
}

//Validacion de botones dentro del modal carrito
const validarBtnsCarrito = (arrayProd, cart) =>{ 
   $(`.itemBorrar > .itemBtn`).click( function () {//Boton de eliminar producto
      let idSeleccionado = $(this).attr("producto");//toma el id desde el atributo
      $(`#divProd${idSeleccionado}`).fadeOut(500);//lo elimina con un fade
      setTimeout(function () { //Timeout para darle un efecto
         cart.borrarProducto(idSeleccionado);
         carritoStorage = localStorage.setItem("carritoLocal", JSON.stringify(cart));
         actualizarItems(cart);
         mostrarCarrito(arrayProd, cart);
         mostrarProductos(arrayProd, cart);
      }, 500);
   });

   $(`.itemBtn.menos, .itemBtn.mas`).click( function () {//Botones de cambiar cantidad
      let elementoCant = $(`.cant${$(this).attr("producto")}`);//Obtiene el elemento con la cantidad
      let valor = parseInt(elementoCant.html());//obtiene el valor y lo pasa a string
      if ($(this).hasClass("mas")){//Si clickeo en el +
         elementoCant.html(valor + 1);//Suma uno en el html
         cart.cambiarCantidad($(this).attr("producto"), 1);//Actualiza el carrito con la nueva cantidad
         carritoStorage = localStorage.setItem("carritoLocal", JSON.stringify(cart));
         let botonmenos = $(`.menos[producto="${$(this).attr("producto")}"]`);//Obtiene el boton menos
         if (botonmenos.is(":disabled"))//Si esta deshabilitado
            botonmenos.removeAttr("disabled");//Lo habilito
      }else{//Si clickeo el -
         elementoCant.html(valor - 1);//Resta uno
         cart.cambiarCantidad($(this).attr("producto"), -1);//Actualiza el carrito con la nueva cantidad
         carritoStorage = localStorage.setItem("carritoLocal", JSON.stringify(cart));
         if (parseInt(elementoCant.html()) == 1)//Si el valor es uno
            $(this).attr("disabled", "disabled");//Lo deshabilito
      }
      $(`.precio${$(this).attr("producto")}`).html('$' + cart.totalProducto($(this).attr("producto")));//Actualizo el precio total
      actualizarItems(cart);//Actualizo el nav carrito
      $(`#precioTotal`).html(`<h1>Total: $${cart.totalCarrito()}</h1>`);//Actualizo el total del carrito
   });

   $(`#vaciarCarrito`).click ( () =>{//Boton vaciar carrito
      cart.vaciarCarrito();//Borra todo el carrito
      localStorage.clear();//Vacia el local storage
      actualizarItems(cart);
      mostrarCarrito(arrayProd, cart);
      mostrarProductos(arrayProd, cart);
   })
}

//Abre el modal carrito y carga los productos
const mostrarCarrito = (arrayProd, cart) =>{
   $(`#productosCarrito`).empty();//Vacia el modal
   if (cart.productos.length == 0){//Si el carrito esta vacio
      $(`#productosCarrito`).append(`
         <h4>Su carrito esta vacio</h4>
         <img class="imgVacio" src="img/carritoVacio.png">
      `);//Muestro texto e imagen
      $(`#precioTotal`).css("display","none");//Oculto el precio total
      $(`#btnFinalizar`).hide();//Oculto boton finalizar compra
      $(`#vaciarCarrito`).hide();//Oculto boton vaciar carrito
   }
   else{
      $(`#btnFinalizar`).show();//Muestro boton finalizar compra
      $(`#vaciarCarrito`).show();//Muestro boton vaciar carrito
      cart.productos.forEach( producto => {//Recorro el carrito
         //Agrego cada item del carrito y lo cargo
         $(`#productosCarrito`).append(`
            <div id="divProd${producto.id}" producto="${producto.id}" class="itemCarrito justify-content-center align-items-center">
               <div class="itemCarrito__imagen justify-content-center align-items-center">
                  <img src="img/tienda/${producto.carpetaIMG}/${producto.id}1.jpg" alt="">
               </div>
               <div class="itemCarrito__info justify-content-center align-items-center">
                  <div class="itemTitulo justify-content-center align-items-center">
                     <span>${producto.titulo}</span>
                  </div>
                  <div class="itemCarrito__cantPrec justify-content-center align-items-center">
                     <div class="itemCantidad justify-content-center">
                        <button class="itemBtn menos" producto="${producto.id}" ${producto.cantidad == 1 ? "disabled" : "" }><i class="fas fa-minus"></i></button><span class="cant${producto.id}">${producto.cantidad}</span><button class="itemBtn mas" producto="${producto.id}"><i class="fas fa-plus"></i></button>
                     </div>
                     <div class="itemPrecio justify-content-center">
                        <span class="precio${producto.id}">$${producto.precioTotal}</span>
                     </div>
                     <div class="itemBorrar justify-content-center">
                        <button class="btn btn-danger itemBtn" producto="${producto.id}"><i class="fas fa-trash-alt"></i></button>
                     </div>
                  </div>
               </div>
            </div>
         `);
      })
      $(`#precioTotal`).html(`<h1>Total: $${cart.totalCarrito()}</h1>`);//Actualizo el precio total
      $(`#precioTotal`).css("display","block");//Muestro precio total
   }
   validarBtnsCarrito(arrayProd, cart);//Valido los botones del carrito
}

//Funcion que actualiza el nav carrito
actualizarItems = cart =>{
   let sumaCantidad = 0;
   cart.productos.forEach( producto => sumaCantidad += producto.cantidad);
   $(`#items`).html(sumaCantidad);
}