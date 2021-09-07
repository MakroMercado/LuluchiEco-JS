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
    
    sumarProducto(cant){
        this.cantidad += cant;
        this.precioTotal = this.precio * this.cantidad;
    }
}

/**** CONVIERTO JSON A ARRAY DE OBJETOS ****/
const productosJSON = '[{"id":"orinal","titulo":"Orinal Femenino","carpetaIMG":"orinales","categoria":"higiene","descripcion":{"tituloModal":"Orinal Femenino Liberi","parrafos":["El orinal femenino Liberi es un dispositivo que permite a las mujeres orinar de pie.","Es la solución a los problemas que enfrentamos cuando no tenemos dónde apoyarnos en los baños públicos, para prevenir ensuciarnos y evitar infecciones.","El material y diseño del orinal garantiza que no haya filtraciones y sea de fácil limpieza."],"lista":["Marca: Liberi","Material: Plástico","Ancho total: 4 cm","Largo total: 19 cm"]},"precio":650,"stock":true},{"id":"cepillo","titulo":"Cepillo de Bambú","carpetaIMG":"cepillos","categoria":"salud","descripcion":{"tituloModal":"Cepillo De Dientes Ecológico Meraki","parrafos":["Los cepillos de bambú tienen la misma vida útil que los cepillos de dientes convencionales fabricados con plástico.","El bambú es una de las plantas con mayor tasa de crecimiento del mundo. En su proceso de crecimiento secuestra grandes cantidades de CO2, gas de efecto invernadero. Además, contiene agentes antibacterianos de origen natural, por lo que no requieren fertilizantes ni pesticidas para crecer."],"lista":["Marca: Meraki","97% biodegradables - 3% reciclable","Dureza de las cerdas: Medio","El packaging y mango pueden ser compostados."]},"precio":170,"stock":true},{"id":"shampoo","titulo":"Shampoo Sólido","carpetaIMG":"shampoo","categoria":"higiene","descripcion":{"tituloModal":"Shampoo Sólido Natural Hidratante","parrafos":["¿Cómo usar el Shampoo sólido?","Es importante saber que nuestro Shampoo no tiene el llamado periodo de depuración, tu cabello quedará limpio desde el primer lavado. Si, tenés que tener presente, que vas a tener que armar una nueva rutina de lavado, acostumbrarse a un producto sólido sin siliconas no es fácil y puede llevar su tiempo, pero seguro vale la pena."],"lista":["Marca: The Mash Store","Es hipoalergénico: No","Biodegradables y sin envases plásticos","Detiene la caída del cabello, favoreciendo la irrigaciòn sanguínea y el crecimiento capilar."]},"precio":710,"stock":true},{"id":"peine","titulo":"Peine de Madera","carpetaIMG":"peines","categoria":"sinplastico","descripcion":{"tituloModal":"Peine","parrafos":["Desc 1","Desc 2","Desc 3"],"lista":["Item 1","Item 2","Item 3","Item 4"]},"precio":350,"stock":false},{"id":"acon","titulo":"Acondicionador Sólido","carpetaIMG":"acondicionadores","categoria":"higiene","descripcion":{"tituloModal":"Acondicionador Solido Natural Hidratante","parrafos":["¿Cómo usar el Acondicionador sólido?","Es importante saber que nuestro Shampoo no tiene el llamado periodo de depuración, tu cabello quedará limpio desde el primer lavado. Si, tenés que tener presente, que vas a tener que armar una nueva rutina de lavado, acostumbrarse a un producto sólido sin siliconas no es fácil y puede llevar su tiempo, pero seguro vale la pena."],"lista":["Marca: The Mash Store","Es hipoalergénico: No","Biodegradables y sin envases plásticos","Detiene la caída del cabello, favoreciendo la irrigaciòn sanguínea y el crecimiento capilar."]},"precio":710,"stock":true},{"id":"protector","titulo":"Protectores Diarios","carpetaIMG":"protectores","categoria":"salud","descripcion":{"tituloModal":"Protectores Diarios En Tela Ecológicos","parrafos":["Por los materiales con que está confeccionado son ecológicos e hipoalergenicos.","No utilizamos tela siempre seca o microfibra porque contienen poliéster, gracias a ello se evitan irritaciones y/o alergia. No contienen químicos, no contaminan el medio ambiente."],"lista":["Marca: Ecology Fem","Tamaño: Regular - 15 cm alto 5.5 cm ancho más alas","Durabilidad: se estima de 3 a 5 años","Pack de 3 unidades","Variedad de diseños"]},"precio":830,"stock":true},{"id":"panial","titulo":"Pañal de tela","carpetaIMG":"paniales","categoria":"sinplastico","descripcion":{"tituloModal":"Pañales Ecologicos De Tela + Absorbente - Clover","parrafos":["Pañales de tela ecológicos con sistema de bolsillo confeccionados con PUL. Lavables y reutilizables. Talle único ajustable, desde 3 a 16 KG.","Incluye:","- Pañal ecológico (diseño a elección)","- Inserto absorbente de 4 capas (3 capas de microfibra + 1 de algodón)"],"lista":["Marca: Clover","Exterior de PUL, respirable e impermeable.","Interior de tela siempre seco hipoalergénica","Sistema de bolsillo"]},"precio":1050,"stock":true},{"id":"cubierto","titulo":"Cubiertos Biodegrables","carpetaIMG":"cubiertos","categoria":"sinplastico","descripcion":{"tituloModal":"Cubiertos de Madera","parrafos":["Desc 1","Desc 2","Desc 3"],"lista":["Item 1","Item 2","Item 3","Item 4"]},"precio":430,"stock":false},{"id":"copita","titulo":"Copita Menstrual","carpetaIMG":"copitas","categoria":"salud","descripcion":{"tituloModal":"Copita Menstrual MUNAY","parrafos":["Presentaciones en copa menstrual Munay 0, 1 y 2 Clásica; y Munay Flex(25% más flexibles que la Munay tradicional) 0, 1 y 2.","Munay copita menstrual, es un producto que se utiliza en los días de menstruación colocándose en la vagina para recibir el flujo menstrual."],"lista":["Marca: Munay","Talle: 0/1/2/Flex 0/Flex 1/Flex 2","Fabricadas 100% de silicona hipoalergénica.","No testeada en animales"]},"precio":370,"stock":true},{"id":"hisopo","titulo":"Hisopos Biodegradables","carpetaIMG":"hisopos","categoria":"higiene","descripcion":{"tituloModal":"Hisopos 100%puro Algodon 100% Biodegradable Compostable","parrafos":["Hisopos de 100% Puro Algodon y de BASTONES DE PAPEL BIODEGRADABLES COMPOSTABLES al 100% (nada de plastico) - TOTALMENTE ECOLOGICOS Y SUSTENTABLES","Cotonetes flexibles fabricados en algodón y papel.","Perfectos para una rutina de higiene personal o maquillaje en equilibrio con la naturaleza."],"lista":["Marca: Bio Transito","500 unidades","100% Biodegradable","100% Compostable"]},"precio":1700,"stock":true},{"id":"piedra","titulo":"Piedra de Alumbre","carpetaIMG":"piedras","categoria":"sinplastico","descripcion":{"tituloModal":"Piedra de Alumbre","parrafos":["Desc 1","Desc 2","Desc 3"],"lista":["Item 1","Item 2","Item 3","Item 4"]},"precio":800,"stock":false},{"id":"esponja","titulo":"Esponja de Yute","carpetaIMG":"esponjas","categoria":"sinplastico","descripcion":{"tituloModal":"Esponja de Yute biodegradable Tawashi","parrafos":["Esponja ecológica 100% compostable. Confeccionada artesanalmente con yute. Producto compostable en su totalidad. Ideal para reemplazar las esponjas tradicionales lavaplatos por esta opción ecológica. No produce alergia.","Modo de uso:","Usar normalmente, enjuagar bien con agua limpia y dejar secar colgada en el grifo para un secado mas ligero o posar sobre una jabonera que ayude a escurrir el agua. Cuando su vida útil haya finalizado, podrás compostarla y así devolverla a la tierra sin contaminar el medio ambiente."],"lista":["Marca: Tawashi","Duración aproximada: 3 meses, dependiendo de uso y el cuidado que le proporciones","Tamaño: 10 x 7 cm. Industria Nacional"]},"precio":400,"stock":true}]';

const jsonToArray = prodJSON =>{
   const prodOBJ = JSON.parse(prodJSON);
   let arrTemp = [];
   
   prodOBJ.forEach(producto => arrTemp.push(new Producto(producto.id, producto.titulo, producto.carpetaIMG, producto.categoria, producto.descripcion, producto.precio, producto.stock, 0)));

   return arrTemp;
}

const arrayProductos = jsonToArray(productosJSON); //ARRAY FINAL
/*******************************************/



/**** AGREGAR PRODUCTOS AL HTML ****/
//FUNCIONES PARA FACILITAR LA CREACION DEL HTML (AHORRAR LINEAS AL PEDO)//
const crearEtiqueta = (tag, id, clases) =>{//CREA ELEMENTO CON ID Y CLASE/S
   let etiqueta = document.createElement(tag);

   if (id) etiqueta.setAttribute("id", id);

   if (typeof clases === 'string') clases = [clases];
   clases.forEach( clase => etiqueta.classList.add(clase));

   return etiqueta;
}

const setAttributes = (etiqueta, atributos) =>{//SETEA VARIOS ATRIBUTOS
   for (let attrKey in atributos){
      etiqueta.setAttribute(attrKey, atributos[attrKey]);
   }
}

const manytoManyAppends = arrayElementos =>{//HACER APPENDS CON VARIOS ELEMENTOS
   for (let i = 0; i < arrayElementos.length - 1; i++){
      arrayElementos[i+1].appendChild(arrayElementos[i]);
   }
}

const manyToOneAppends = (padre, arrayChilds) =>{//HACER VARIOS APPEND A UN SOLOPADRE
   arrayChilds.forEach( elemento => padre.appendChild(elemento));
}

const mostrarProductos = (categoria) =>{//CREA LOS ARTICLE Y MUESTRA LOS PRODUCTOS SEGUN CATEGORIA
   productosPadre.innerHTML = "";
   for (const producto of arrayProductos){
      if (producto.categoria == categoria || categoria == "todos" || categoria == "stock" && producto.stock){

         let articleProducto = crearEtiqueta("article", "", ["producto", "wow", "animate__animated", "animate__fadeInUp"]);

         //Titulo y borde
         const tituloTag = crearEtiqueta("div", "", ["producto__nombre"]);
         tituloTag.innerHTML = `<h3>${producto.titulo}</h3>`;
         const bordeTag = crearEtiqueta("div", "", ["producto__borde"]);

         //Carousel de imagenes
         const carouselTag = crearEtiqueta("div", producto.id, ["carousel", "slide"]);
         carouselTag.setAttribute("data-ride","carousel");
         const childCarousel = crearEtiqueta("div", "", ["carousel-inner"]);
         producto.stock ? cantidad = 3 : cantidad = 1;
         for (let i = 1; i <= cantidad; i++){
            const carouselItem = crearEtiqueta("div", "", ["carousel-item"]);
            if (i == 1) carouselItem.classList.add("active");
            carouselItem.innerHTML = `<img src="img/tienda/${producto.carpetaIMG}/${producto.id}${i}.jpg" alt="Imagen ${producto.id}">`;
            childCarousel.appendChild(carouselItem);
         }
         carouselTag.appendChild(childCarousel);
         if (producto.stock)
            carouselTag.innerHTML +=`<a class="carousel-control-prev" href="#${producto.id}" data-slide="prev"><i class="fas fa-chevron-left flecha"></i></a>
                                    <a class="carousel-control-next" href="#${producto.id}" data-slide="next"><i class="fas fa-chevron-right flecha"></i></a>`;
         

         //Precio y Stock
         const precioTag = crearEtiqueta("div", "", ["producto__precio", "precio"]);
         precioTag.innerHTML = `<p>$${producto.precio.toFixed(2)} - En Stock</p>`;
         if (!producto.stock){
            precioTag.classList.add("sinStock");
            precioTag.innerHTML = precioTag.innerHTML.replace("En","Sin");
         }

         //Boton Info
         const btnDescripcion = crearEtiqueta("button", "", ["btn","btn-success"]);
         btnDescripcion.innerHTML = 'Mas info <i class="fas fa-book"></i>';
         setAttributes(btnDescripcion,{"data-toggle":"modal", "data-target":`#modal${producto.id}`});
         if(!producto.stock) btnDescripcion.setAttribute("disabled","true");

         //Modal Descripcion
         const modalTag = crearEtiqueta("div", `modal${producto.id}`,["modal", "fade"]);
         setAttributes(modalTag, {"tabindex":"-1", "aria-hidden":"true"})
         const modalDialog = crearEtiqueta("div", "", "modal-dialog");
         const modalContent = crearEtiqueta("div", "", "modal-content");
         modalContent.innerHTML = `<div class="modal-header">       
                                    <h5 class="modal-title">${producto.descripcion.tituloModal}</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                       <span aria-hidden="true">&times;</span>
                                    </button>
                                    </div>`
         const modalBody = crearEtiqueta("div", "", ["modal-body"]);
         producto.descripcion.parrafos.forEach( parrafo => modalBody.innerHTML += `<p>${parrafo}</p>`);
         let strLista = `<ul><hr>`;
         producto.descripcion.lista.forEach( lista => strLista += `<li>${lista}</li>`);
         modalBody.innerHTML += `${strLista}</ul>`; 
         manytoManyAppends([modalBody, modalContent, modalDialog, modalTag]);
         

         //Boton Agregar al carrito
         const btnCarrito = crearEtiqueta("button", "", ["btn", "btn-success", "agregarCarrito"]);
         btnCarrito.setAttribute("productoID", producto.id);
         btnCarrito.innerHTML = 'Añadir <i class="fas fa-cart-plus"></i>';
         if(!producto.stock) btnCarrito.setAttribute("disabled","true");

         //Agrego todos los elementos
         manyToOneAppends(articleProducto, [tituloTag, bordeTag, carouselTag, precioTag, btnDescripcion, modalTag, btnCarrito]); 

         productosPadre.appendChild(articleProducto);
      }//CIERRE IF
   }//CIERRE FOR
   
}

/************************************/



/**** VALIDACION DE DROPDOWNS (CATEGORIA Y ORDEN) ****/
//DROPDOWN CATEGORIA
const itemsCategoria = document.getElementsByClassName('itemCategoria');

for (const item of itemsCategoria){ //VALIDO LOS BOTONES CATEGORIA
   item.onclick = () => {
      categoriaActual = item.getAttribute("categoria");
      mostrarProductos(categoriaActual);
      validarBotonesCarrito();
   }
}

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


//DROPDOWN ORDEN
const itemsOrdenar = document.getElementsByClassName('itemOrdenar');

for (const item of itemsOrdenar){ //VALIDO LOS BOTONES ORDEN
   item.onclick = () => {
      ordenarProductos(arrayProductos,item.getAttribute("orden"));
      mostrarProductos(categoriaActual);
      validarBotonesCarrito();
   }
}
/*******************************************************/ 


/**** PRIMER CARGA ****/
let categoriaActual = "todos"; //CATEGORIA POR DEFECTO

ordenarProductos(arrayProductos,"nombreASC"); //ORDEN POR DEFECTO

const productosPadre = document.getElementById('productos');//ELEMENTO PADRE DE LOS PRODUCTOS

mostrarProductos(categoriaActual); //MUESTRA LOS PRODUCTOS LA PRIMERA VEZ
/**********************/



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
         productoAdd.sumarProducto(1)
         this.productos.push(productoAdd);
      }
   }

   vaciarCarrito(){
      this.productos.forEach( producto => producto.cantidad = 0);
      this.productos = [];
   }
}

//VALIDACION BOTONES AÑADIR, CADA VEZ QUE SE AGREGA UN PRODUCTO SE GUARDA EN EL STORAGE
validarBotonesCarrito = () =>{
   let botonesCarrito = document.getElementsByClassName("agregarCarrito");
   for (const boton of botonesCarrito){
      boton.onclick = () => {
         const idSeleccionado = boton.getAttribute("productoID");
         const productoSeleccionado = arrayProductos.find(producto => producto.id == idSeleccionado);
         carrito.agregarProducto(productoSeleccionado);
         carritoStorage = localStorage.setItem("carritoLocal", JSON.stringify(carrito));
         //VALIDACIONES NAV CARRITO (ITEM CANTIDAD Y ANIMACION)
         navCarrito.classList.add("animate__bounce");
         actualizarItems();
         setTimeout(function () { navCarrito.classList.remove("animate__bounce") }, 1000);
         //MUESTRA CARTEL "PRODUCTO AÑADIDO AL CARRITO"
         avisoCarrito.innerHTML = productoSeleccionado.titulo + " añadido al carrito";
         avisoCarrito.classList.add("show");        
         setTimeout(function () { avisoCarrito.classList.remove("show") }, 3000);
      }
   }
}

//LISTA LOS PRODUCTOS EN EL MODAL CARRITO
const mostrarCarrito = () =>{
   const listaCarrito = document.getElementById("productosCarrito");
   listaCarrito.innerHTML = "";
   carrito.productos.forEach( producto => {
      let parrafo = crearEtiqueta("p","","text-center");
      parrafo.innerHTML = producto.titulo + " - " + producto.cantidad + " - " + "$" + producto.precio + " ----" + producto.precioTotal;
      listaCarrito.appendChild(parrafo);
   })
}

//ACTUALIZA EL NAV CARRITO CON LA CANTIDAD DE PRODUCTOS ACTUALES
actualizarItems = () =>{
   let sumaCantidad = 0;
   carrito.productos.forEach( producto => sumaCantidad += producto.cantidad);
   elementoItems.innerHTML = sumaCantidad;
}

//VALIDACION BOTON VACIAR CARRITO
validarVaciarCarrito = () =>{
   btnVaciar.onclick = () =>{
      carrito.vaciarCarrito();
      localStorage.clear();
      actualizarItems();
      mostrarCarrito();
   }
}


//localStorage.clear();
const carrito = new Carrito(JSON.parse(localStorage.getItem("carritoLocal"))); //RECIBE DATOS DEL CARRITO DESDE EL STORAGE
validarBotonesCarrito(); //SETEA LOS BOTONES DE AÑADIR AL CARRITO

const navCarrito = document.getElementById("nav-carrito"); //ELEMENTO CARRITO DEL NAV DE LA PAGINA
navCarrito.onclick = () => mostrarCarrito(); //ABRE EL MODAL CARRITO

const elementoItems = document.getElementById("items"); //ELEMENTO CANTIDAD DE ITEMS DEL CARRITO DEL NAV
actualizarItems(); //SETEA LA CANTIDAD DE ITEMS

const avisoCarrito = document.getElementById("avisoCarrito"); //ELEMENTO CARTEL AÑADIDO AL CARRITO

const btnVaciar = document.getElementById("vaciarCarrito"); //ELEMENTO BOTON VACIAR CARRITO
validarVaciarCarrito(); //SETEA EL BOTON