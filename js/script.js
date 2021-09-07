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
        this.precioTotal = this.calcularTotal();
    }
    
    setCantidad(valor){
       this.cantidad += valor;
       this.precioTotal = this.calcularTotal();
    }
    sumarProducto(cant){
        this.cantidad += cant;
        this.precioTotal = this.precio * this.cantidad;
    }
    calcularTotal(){
       return this.precio * this.cantidad;
    }
 }
 
 /**** CONVIERTO JSON A ARRAY DE OBJETOS ****/
 /*
 const productosJSON = '[{"id":"orinal","titulo":"Orinal Femenino","carpetaIMG":"orinales","categoria":"higiene","descripcion":{"tituloModal":"Orinal Femenino Liberi","parrafos":["El orinal femenino Liberi es un dispositivo que permite a las mujeres orinar de pie.","Es la solución a los problemas que enfrentamos cuando no tenemos dónde apoyarnos en los baños públicos, para prevenir ensuciarnos y evitar infecciones.","El material y diseño del orinal garantiza que no haya filtraciones y sea de fácil limpieza."],"lista":["Marca: Liberi","Material: Plástico","Ancho total: 4 cm","Largo total: 19 cm"]},"precio":650,"stock":true},{"id":"cepillo","titulo":"Cepillo de Bambú","carpetaIMG":"cepillos","categoria":"salud","descripcion":{"tituloModal":"Cepillo De Dientes Ecológico Meraki","parrafos":["Los cepillos de bambú tienen la misma vida útil que los cepillos de dientes convencionales fabricados con plástico.","El bambú es una de las plantas con mayor tasa de crecimiento del mundo. En su proceso de crecimiento secuestra grandes cantidades de CO2, gas de efecto invernadero. Además, contiene agentes antibacterianos de origen natural, por lo que no requieren fertilizantes ni pesticidas para crecer."],"lista":["Marca: Meraki","97% biodegradables - 3% reciclable","Dureza de las cerdas: Medio","El packaging y mango pueden ser compostados."]},"precio":170,"stock":true},{"id":"shampoo","titulo":"Shampoo Sólido","carpetaIMG":"shampoo","categoria":"higiene","descripcion":{"tituloModal":"Shampoo Sólido Natural Hidratante","parrafos":["¿Cómo usar el Shampoo sólido?","Es importante saber que nuestro Shampoo no tiene el llamado periodo de depuración, tu cabello quedará limpio desde el primer lavado. Si, tenés que tener presente, que vas a tener que armar una nueva rutina de lavado, acostumbrarse a un producto sólido sin siliconas no es fácil y puede llevar su tiempo, pero seguro vale la pena."],"lista":["Marca: The Mash Store","Es hipoalergénico: No","Biodegradables y sin envases plásticos","Detiene la caída del cabello, favoreciendo la irrigaciòn sanguínea y el crecimiento capilar."]},"precio":710,"stock":true},{"id":"peine","titulo":"Peine de Madera","carpetaIMG":"peines","categoria":"sinplastico","descripcion":{"tituloModal":"Peine","parrafos":["Desc 1","Desc 2","Desc 3"],"lista":["Item 1","Item 2","Item 3","Item 4"]},"precio":350,"stock":false},{"id":"acon","titulo":"Acondicionador Sólido","carpetaIMG":"acondicionadores","categoria":"higiene","descripcion":{"tituloModal":"Acondicionador Solido Natural Hidratante","parrafos":["¿Cómo usar el Acondicionador sólido?","Es importante saber que nuestro Shampoo no tiene el llamado periodo de depuración, tu cabello quedará limpio desde el primer lavado. Si, tenés que tener presente, que vas a tener que armar una nueva rutina de lavado, acostumbrarse a un producto sólido sin siliconas no es fácil y puede llevar su tiempo, pero seguro vale la pena."],"lista":["Marca: The Mash Store","Es hipoalergénico: No","Biodegradables y sin envases plásticos","Detiene la caída del cabello, favoreciendo la irrigaciòn sanguínea y el crecimiento capilar."]},"precio":710,"stock":true},{"id":"protector","titulo":"Protectores Diarios","carpetaIMG":"protectores","categoria":"salud","descripcion":{"tituloModal":"Protectores Diarios En Tela Ecológicos","parrafos":["Por los materiales con que está confeccionado son ecológicos e hipoalergenicos.","No utilizamos tela siempre seca o microfibra porque contienen poliéster, gracias a ello se evitan irritaciones y/o alergia. No contienen químicos, no contaminan el medio ambiente."],"lista":["Marca: Ecology Fem","Tamaño: Regular - 15 cm alto 5.5 cm ancho más alas","Durabilidad: se estima de 3 a 5 años","Pack de 3 unidades","Variedad de diseños"]},"precio":830,"stock":true},{"id":"panial","titulo":"Pañal de tela","carpetaIMG":"paniales","categoria":"sinplastico","descripcion":{"tituloModal":"Pañales Ecologicos De Tela + Absorbente - Clover","parrafos":["Pañales de tela ecológicos con sistema de bolsillo confeccionados con PUL. Lavables y reutilizables. Talle único ajustable, desde 3 a 16 KG.","Incluye:","- Pañal ecológico (diseño a elección)","- Inserto absorbente de 4 capas (3 capas de microfibra + 1 de algodón)"],"lista":["Marca: Clover","Exterior de PUL, respirable e impermeable.","Interior de tela siempre seco hipoalergénica","Sistema de bolsillo"]},"precio":1050,"stock":true},{"id":"cubierto","titulo":"Cubiertos Biodegrables","carpetaIMG":"cubiertos","categoria":"sinplastico","descripcion":{"tituloModal":"Cubiertos de Madera","parrafos":["Desc 1","Desc 2","Desc 3"],"lista":["Item 1","Item 2","Item 3","Item 4"]},"precio":430,"stock":false},{"id":"copita","titulo":"Copita Menstrual","carpetaIMG":"copitas","categoria":"salud","descripcion":{"tituloModal":"Copita Menstrual MUNAY","parrafos":["Presentaciones en copa menstrual Munay 0, 1 y 2 Clásica; y Munay Flex(25% más flexibles que la Munay tradicional) 0, 1 y 2.","Munay copita menstrual, es un producto que se utiliza en los días de menstruación colocándose en la vagina para recibir el flujo menstrual."],"lista":["Marca: Munay","Talle: 0/1/2/Flex 0/Flex 1/Flex 2","Fabricadas 100% de silicona hipoalergénica.","No testeada en animales"]},"precio":370,"stock":true},{"id":"hisopo","titulo":"Hisopos Biodegradables","carpetaIMG":"hisopos","categoria":"higiene","descripcion":{"tituloModal":"Hisopos 100%puro Algodon 100% Biodegradable Compostable","parrafos":["Hisopos de 100% Puro Algodon y de BASTONES DE PAPEL BIODEGRADABLES COMPOSTABLES al 100% (nada de plastico) - TOTALMENTE ECOLOGICOS Y SUSTENTABLES","Cotonetes flexibles fabricados en algodón y papel.","Perfectos para una rutina de higiene personal o maquillaje en equilibrio con la naturaleza."],"lista":["Marca: Bio Transito","500 unidades","100% Biodegradable","100% Compostable"]},"precio":1700,"stock":true},{"id":"piedra","titulo":"Piedra de Alumbre","carpetaIMG":"piedras","categoria":"sinplastico","descripcion":{"tituloModal":"Piedra de Alumbre","parrafos":["Desc 1","Desc 2","Desc 3"],"lista":["Item 1","Item 2","Item 3","Item 4"]},"precio":800,"stock":false},{"id":"esponja","titulo":"Esponja de Yute","carpetaIMG":"esponjas","categoria":"sinplastico","descripcion":{"tituloModal":"Esponja de Yute biodegradable Tawashi","parrafos":["Esponja ecológica 100% compostable. Confeccionada artesanalmente con yute. Producto compostable en su totalidad. Ideal para reemplazar las esponjas tradicionales lavaplatos por esta opción ecológica. No produce alergia.","Modo de uso:","Usar normalmente, enjuagar bien con agua limpia y dejar secar colgada en el grifo para un secado mas ligero o posar sobre una jabonera que ayude a escurrir el agua. Cuando su vida útil haya finalizado, podrás compostarla y así devolverla a la tierra sin contaminar el medio ambiente."],"lista":["Marca: Tawashi","Duración aproximada: 3 meses, dependiendo de uso y el cuidado que le proporciones","Tamaño: 10 x 7 cm. Industria Nacional"]},"precio":400,"stock":true}]';
 
 const jsonToArray = prodJSON =>{
   const prodOBJ = JSON.parse(prodJSON);
   let arrTemp = [];
   
   prodOBJ.forEach(producto => arrTemp.push(new Producto(producto.id, producto.titulo, producto.carpetaIMG, producto.categoria, producto.descripcion, producto.precio, producto.stock, 0)));
 
   return arrTemp;
 }
 
 const arrayProductos = jsonToArray(productosJSON); //ARRAY FINAL
 */
 
 var llamada = $.getJSON("productos.json", function (respuesta, estado){
    if (estado === "success"){
       // const prodarr = respuesta;
       const arrayProductos = respuesta.map( producto => new Producto(producto.id, producto.titulo, producto.carpetaIMG, producto.categoria, producto.descripcion, producto.precio, producto.stock, 0));
    
    let categoriaActual = "todos"; //CATEGORIA POR DEFECTO
 
 ordenarProductos(arrayProductos,"nombreASC"); //ORDEN POR DEFECTO
 
 mostrarProductos(categoriaActual, arrayProductos); //MUESTRA LOS PRODUCTOS LA PRIMERA VEZ
 
 
 $(".itemOrdenar").click( function () {
    ordenarProductos(arrayProductos, $(this).attr("orden"));
    mostrarProductos(categoriaActual, arrayProductos);
    validarBotonesCarrito();
  })
 
 }
 });
 //console.log(arrayProductos);*/
 /*******************************************/
 
 const mostrarProductos = (categoria, arrPro) =>{//CREA LOS ARTICLE Y MUESTRA LOS PRODUCTOS SEGUN CATEGORIA
   $("#productos").empty();
   for (const producto of arrPro){
      if (producto.categoria == categoria || categoria == "todos" || categoria == "stock" && producto.stock){
         let $articleProducto = $("<article></article>").addClass("producto wow animate__animated animate__fadeInUp");
         
         //Titulo y borde
         $articleProducto.append(`<div class="producto__nombre"><h3>${producto.titulo}</h3></div>`);
         $articleProducto.append(`<div class="producto__borde"></div>`);
 
         //Carousel de imagenes
         $articleProducto.append(`<div id=${producto.id} class="carousel slide" data-ride="carousel"><div class="carousel-inner"></div></div>`);
         $("#productos").append($articleProducto);
         cicloImagenes: 
         for (let i = 1; i <= 3; i++){
            $(`#${producto.id} > .carousel-inner`).append(`<div class="carousel-item ${i == 1 ? "active" : ""}"><img src="img/tienda/${producto.carpetaIMG}/${producto.id}${i}.jpg" alt="Imagen ${producto.id}"></div>`);
            if (!producto.stock) break cicloImagenes;
         }
         if (producto.stock) $(`#${producto.id}`).append(`<a class="carousel-control-prev" href="#${producto.id}" data-slide="prev"><i class="fas fa-chevron-left flecha"></i></a><a class="carousel-control-next" href="#${producto.id}" data-slide="next"><i class="fas fa-chevron-right flecha"></i></a>`);
 
         //Precio y Stock
         $articleProducto.append(`<div class="producto__precio precio ${!producto.stock ? "sinStock" : ""}"><p>$${producto.precio.toFixed(2)} - ${producto.stock ? "En" : "Sin"} Stock</p><div>`);
 
         //Boton Info
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
         producto.descripcion.parrafos.forEach( parrafo => $(`#modal${producto.id} >>> .modal-body`).append(`<p>${parrafo}</p>`));
         let strLista = `<ul><hr>`;
         producto.descripcion.lista.forEach( lista => strLista += `<li>${lista}</li>`);
         $(`#modal${producto.id} >>> .modal-body`).append(strLista);
 
         //Boton Agregar al carrito
         $articleProducto.append(`<button class="btn btn-success agregarCarrito" productoID=${producto.id} ${!producto.stock ? "disabled" : ""}>Añadir <i class="fas fa-cart-plus"></i></button>`);
 
         //Agrego todos los elementos
         $("#productos").append($articleProducto);
      }//CIERRE IF
   }//CIERRE FOR
 }
 
 /************************************/
 
 
 
 /**** VALIDACION DE DROPDOWNS (CATEGORIA Y ORDEN) ****/
 //DROPDOWN CATEGORIA
 $(".itemCategoria").click( function () {
   categoriaActual = $(this).attr("categoria");
   mostrarProductos(categoriaActual, arrayProductos);
   validarBotonesCarrito();
 });
 
 //DROPDOWN ORDEN
 const ordenarProductos = (arrayProductos,strOrden) =>{ //FUNCION PARA ORDENAR ARRAY
   switch (strOrden){
      case "nombreASC":
         arrayProductos.sort((a,b) => a.titulo.localeCompare(b.titulo));
         break;
      case "nombreDESC":
         arrayProductos.sort((a,b) => b.titulo.localeCompare(a.titulo));
         break;
      case "precioASC":
         arrayProductos.sort((a,b) => a.precio - b.precio);
         break;
      case "precioDESC":
         arrayProductos.sort((a,b) => b.precio - a.precio);
         break;
   }   
 }
 /*
 $(".itemOrdenar").click( function () {
    ordenarProductos(arrayProductos, $(this).attr("orden"));
    mostrarProductos(categoriaActual);
    validarBotonesCarrito();
  })
 */
 
 /*******************************************************/ 
 
 
 /**** PRIMER CARGA ****/
 /*
 let categoriaActual = "todos"; //CATEGORIA POR DEFECTO
 
 ordenarProductos(arrayProductos,"nombreASC"); //ORDEN POR DEFECTO
 
 mostrarProductos(categoriaActual); //MUESTRA LOS PRODUCTOS LA PRIMERA VEZ
 */
 /*****************************CARRITO*******************************/
 //CLASE CARRITO
 class Carrito{
   constructor(productosStorage){
      this.productos = [];
      if (productosStorage){
         productosStorage.productos.forEach( productoStorage => {
            this.productos.push(new Producto(productoStorage.id, productoStorage.titulo, productoStorage.carpetaIMG, productoStorage.categoria, productoStorage.descripcion, productoStorage.precio, productoStorage.stock, productoStorage.cantidad));
         })
      }
   }
 
   agregarProducto(productoAdd){
      let findProducto = this.productos.find(producto => producto.id == productoAdd.id);
      if (findProducto)
         findProducto.sumarProducto(1);
      else{
         productoAdd.sumarProducto(1);
         this.productos.push(productoAdd);
      }
   }
 
   cambiarCantidad(prodd){
    let findProducto = this.productos.find(producto => producto.id == prodd);
    findProducto.setCantidad(-1);
   }
 
   borrarProducto(productoDel){
      let pInd;
       this.productos.forEach( (producto, index) =>{
          if (producto.id == productoDel){
             producto.cantidad = 0;
             pInd = index;
          }
       })
    this.productos.splice(pInd, 1);
   }
 
   vaciarCarrito(){
      this.productos.forEach( producto => producto.cantidad = 0);
      this.productos = [];
   }
 
   retornarTotal(proID){
    let findProducto = this.productos.find(producto => producto.id == proID);
    return findProducto.precioTotal;
   }
 }
 
 //VALIDACION BOTONES AÑADIR, CADA VEZ QUE SE AGREGA UN PRODUCTO SE GUARDA EN EL STORAGE
 validarBotonesCarrito = () =>{
   $(`.agregarCarrito`).click( function () {
      carrito.agregarProducto(arrayProductos.find(producto => producto.id == $(this).attr("productoID")));
      carritoStorage = localStorage.setItem("carritoLocal", JSON.stringify(carrito));
      //$(`#nav-carrito`).addClass("animate__bounce");
      $(`#nav-carrito`).animate({ fontSize: '20px'},100).delay(400).animate({ fontSize: '16px'},100);
      actualizarItems();
      setTimeout(function () { $(`#navCarrito`).removeClass("animate__bounce"); }, 1000);
      //MUESTRA CARTEL "PRODUCTO AÑADIDO AL CARRITO"
      $(`#avisoCarrito`).slideDown(500).delay(1200).slideUp(500);       
   });
 }
 
 validarItemBorrar = () =>{
    $(`.itemBorrar > button`).click( function () {
       let idSeleccionado = $(this).attr("producto");
       $(`#divProd${idSeleccionado}`).fadeOut(500);
 
       setTimeout(function () { carrito.borrarProducto(idSeleccionado);
 
       carritoStorage = localStorage.setItem("carritoLocal", JSON.stringify(carrito));
 
       actualizarItems();
 
       mostrarCarrito(); }, 500);
    });
  }
 
  validarBotonesCantidad = () =>{
     $(`.itemBtn.menos, .itemBtn.mas`).click( function () {
       let valor = parseInt($(`.cant${$(this).attr("producto")}`).html());
       let elementoCant = $(`.cant${$(this).attr("producto")}`);
       if ($(this).hasClass("mas")){
          elementoCant.html(valor + 1);
          carrito.agregarProducto(arrayProductos.find(producto => producto.id == $(this).attr("producto")));
          carritoStorage = localStorage.setItem("carritoLocal", JSON.stringify(carrito));
          actualizarItems();
          let botonmenos = $(`.menos[producto="${$(this).attr("producto")}"]`);
          if (botonmenos.is(":disabled"))
             botonmenos.removeAttr("disabled");
       }else{
          elementoCant.html(valor - 1);
          carrito.cambiarCantidad($(this).attr("producto"));
          carritoStorage = localStorage.setItem("carritoLocal", JSON.stringify(carrito));
          if (parseInt(elementoCant.html()) == 1)
             $(this).attr("disabled", "disabled");
       }
       $(`.precio${$(this).attr("producto")}`).html("$" + carrito.retornarTotal($(this).attr("producto")));
     });
  }
 
 //LISTA LOS PRODUCTOS EN EL MODAL CARRITO
 const mostrarCarrito = () =>{
    $(`#productosCarrito`).empty();
    if (carrito.productos.length == 0)
       $(`#productosCarrito`).append('<h4>Su carrito esta vacio</h4>');
    else{
       carrito.productos.forEach( producto => {
          $(`#productosCarrito`).append(`<div id="divProd${producto.id}" producto="${producto.id}" class="itemCarrito justify-content-center align-items-center">
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
          <hr>
          `);
          $(`#divProd${producto.id}`).hide();
          $(`#divProd${producto.id}`).fadeIn(500);
       })
    }
    validarItemBorrar();
    validarBotonesCantidad();
 }
 
 $("#nav-carrito").click( () => mostrarCarrito());
 
 //ACTUALIZA EL NAV CARRITO CON LA CANTIDAD DE PRODUCTOS ACTUALES
 actualizarItems = () =>{
   let sumaCantidad = 0;
   carrito.productos.forEach( producto => sumaCantidad += producto.cantidad);
   $(`#items`).empty().append(sumaCantidad);
 }
 
 //VALIDACION BOTON VACIAR CARRITO
 validarVaciarCarrito = () =>{
   $(`#vaciarCarrito`).click ( () =>{
      carrito.vaciarCarrito();
      localStorage.clear();
      actualizarItems();
      mostrarCarrito();
      validarItemBorrar();
   })
 }
 
 
 //localStorage.clear();
 const carrito = new Carrito(JSON.parse(localStorage.getItem("carritoLocal"))); //RECIBE DATOS DEL CARRITO DESDE EL STORAGE
 validarBotonesCarrito(); //SETEA LOS BOTONES DE AÑADIR AL CARRITO
 actualizarItems(); //SETEA LA CANTIDAD DE ITEMS
 validarVaciarCarrito(); //SETEA EL BOTON
 validarItemBorrar();