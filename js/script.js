//CLASE CARRITO
class Carrito{
    constructor(){
       this.productos = [];
       this.total = 0;
    }
 
    agregarProducto(prod){
       let prodAux = this.productos.find( producto => producto.id == prod.id);
       if (prodAux)
          prodAux.sumarProducto();
       else{
          prod.sumarProducto();
          this.productos.push(prod);
       }
    }
 
    sumarTotal(){
       this.total = this.productos.reduce( (a,b) => a.precioTotal() + b.precioTotal());
    }
 }
 
 //CLASE PRODUCTO
 class Producto {
     constructor(id, titulo, carpetaIMG, categoria, descripcion, precio, stock) {
         this.id  = id;
         this.titulo = titulo;
         this.carpetaIMG = carpetaIMG;
         this.categoria = categoria;
         this.descripcion = descripcion;
         this.precio  = parseFloat(precio);
         this.stock = stock;
         this.cantidad = 0;
     }
     
     sumarProducto(){
         this.cantidad++;
     }
 
     precioTotal(){
         return this.precio * this.cantidad;
     }
 }
 
 
 /****** FUNCIONES ******/
 //JSON A ARRAY DE OBJETOS
 const jsonToArray = json =>{
    const productosObj = JSON.parse(json);
    let arr = [];
    
    for (const prod of productosObj){
       arr.push(new Producto(prod.id, prod.titulo, prod.carpetaIMG, prod.categoria, prod.descripcion, prod.precio, prod.stock));
    }
 
    return arr;
 }
 
 //ORDENAR SEGUN EL DROWDOWN
 const ordenarProductos = (arrayProductos, orden) =>{
    switch (orden){
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
 
 //CREAR ETIQUETAS HTML
 const crearEtiqueta = (tag, id, clases) =>{
    let etiqueta = document.createElement(tag);
 
    if (id) etiqueta.setAttribute("id", id);
 
    if (typeof clases === 'string') clases = [clases];
    clases.forEach( clase => etiqueta.classList.add(clase));
 
    return etiqueta;
 }
 
 //AGREGAR ATRIBUTOS A ETIQUETA
 const setAttributes = (etiqueta, atributos) =>{
    for (let nombre in atributos){
       etiqueta.setAttribute(nombre, atributos[nombre]);
    }
 }
 
 //HACER APPENDS CON VARIOS ELEMENTOS
 const manytoManyAppends = arrayElementos =>{
    for (let i = 0; i < arrayElementos.length - 1; i++){
       arrayElementos[i+1].appendChild(arrayElementos[i]);
    }
 }
 
 //HACER VARIOS APPEND A UN PADRE
 const manyToOneAppends = (padre, arrayChilds) =>{
    arrayChilds.forEach( elemento => padre.appendChild(elemento));
 }
 
 //GET PRODUCTO
 const getProducto = (arr, idProd) =>{
    let aux;
    arr.forEach(prod => {
       if (prod.id == idProd) 
          aux = prod;
       }
    )
    return aux;
 }
 
 //CREA LOS ARTICLE DE LOS PRODUCTOS Y LOS AGREGA AL HTML
 const mostrarProductos = (categoria) =>{
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
          carouselTag.innerHTML +=`<a class="carousel-control-prev" href="#${producto.id}" data-slide="prev"><i class="fas fa-chevron-left flecha"></i></a>
                                   <a class="carousel-control-next" href="#${producto.id}" data-slide="next"><i class="fas fa-chevron-right flecha"></i></a>`;
 
          //Precio y Stock
          const precioTag = crearEtiqueta("div", "", ["producto__precio"]);
          producto.stock ? precioTag.innerHTML = `<p>$${producto.precio.toFixed(2)} - En Stock</p>` : precioTag.innerHTML = `<p>$${producto.precio.toFixed(2)} - Sin Stock</p>`;
 
          //Boton Info
          const btnDescripcion = crearEtiqueta("button", "", ["btn","btn-success"]);
          setAttributes(btnDescripcion,{"data-toggle":"modal", "data-target":`#modal${producto.id}`});
          btnDescripcion.innerHTML = 'Mas info <i class="fas fa-book"></i>';
 
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
 
          //Agrego todos los elementos
          manyToOneAppends(articleProducto, [tituloTag, bordeTag, carouselTag, precioTag, btnDescripcion, modalTag, btnCarrito]); 
 
          productosPadre.appendChild(articleProducto);
       }//CIERRE IF
    }//CIERRE FOR
 }//CIERRE FUNCION
 
 
 
 /******* INICIALIZADORES *******/
 const productosJSON = '[{"id":"orinal","titulo":"Orinal Femenino","carpetaIMG":"orinales","categoria":"higiene","descripcion":{"tituloModal":"Orinal Femenino Liberi","parrafos":["El orinal femenino Liberi es un dispositivo que permite a las mujeres orinar de pie.","Es la solución a los problemas que enfrentamos cuando no tenemos dónde apoyarnos en los baños públicos, para prevenir ensuciarnos y evitar infecciones.","El material y diseño del orinal garantiza que no haya filtraciones y sea de fácil limpieza."],"lista":["Marca: Liberi","Material: Plástico","Ancho total: 4 cm","Largo total: 19 cm"]},"precio":650,"stock":true},{"id":"cepillo","titulo":"Cepillo de Bambú","carpetaIMG":"cepillos","categoria":"salud","descripcion":{"tituloModal":"Cepillo De Dientes Ecológico Meraki","parrafos":["Los cepillos de bambú tienen la misma vida útil que los cepillos de dientes convencionales fabricados con plástico.","El bambú es una de las plantas con mayor tasa de crecimiento del mundo. En su proceso de crecimiento secuestra grandes cantidades de CO2, gas de efecto invernadero. Además, contiene agentes antibacterianos de origen natural, por lo que no requieren fertilizantes ni pesticidas para crecer."],"lista":["Marca: Meraki","97% biodegradables - 3% reciclable","Dureza de las cerdas: Medio","El packaging y mango pueden ser compostados."]},"precio":170,"stock":true},{"id":"shampoo","titulo":"Shampoo Sólido","carpetaIMG":"shampoo","categoria":"higiene","descripcion":{"tituloModal":"Shampoo Sólido Natural Hidratante","parrafos":["¿Cómo usar el Shampoo sólido?","Es importante saber que nuestro Shampoo no tiene el llamado periodo de depuración, tu cabello quedará limpio desde el primer lavado. Si, tenés que tener presente, que vas a tener que armar una nueva rutina de lavado, acostumbrarse a un producto sólido sin siliconas no es fácil y puede llevar su tiempo, pero seguro vale la pena."],"lista":["Marca: The Mash Store","Es hipoalergénico: No","Biodegradables y sin envases plásticos","Detiene la caída del cabello, favoreciendo la irrigaciòn sanguínea y el crecimiento capilar."]},"precio":710,"stock":true},{"id":"peine","titulo":"Peine de Madera","carpetaIMG":"peines","categoria":"sinplastico","descripcion":{"tituloModal":"Peine","parrafos":["Desc 1","Desc 2","Desc 3"],"lista":["Item 1","Item 2","Item 3","Item 4"]},"precio":350,"stock":false},{"id":"acon","titulo":"Acondicionador Sólido","carpetaIMG":"acondicionadores","categoria":"higiene","descripcion":{"tituloModal":"Acondicionador Solido Natural Hidratante","parrafos":["¿Cómo usar el Acondicionador sólido?","Es importante saber que nuestro Shampoo no tiene el llamado periodo de depuración, tu cabello quedará limpio desde el primer lavado. Si, tenés que tener presente, que vas a tener que armar una nueva rutina de lavado, acostumbrarse a un producto sólido sin siliconas no es fácil y puede llevar su tiempo, pero seguro vale la pena."],"lista":["Marca: The Mash Store","Es hipoalergénico: No","Biodegradables y sin envases plásticos","Detiene la caída del cabello, favoreciendo la irrigaciòn sanguínea y el crecimiento capilar."]},"precio":710,"stock":true},{"id":"protector","titulo":"Protectores Diarios","carpetaIMG":"protectores","categoria":"salud","descripcion":{"tituloModal":"Protectores Diarios En Tela Ecológicos","parrafos":["Por los materiales con que está confeccionado son ecológicos e hipoalergenicos.","No utilizamos tela siempre seca o microfibra porque contienen poliéster, gracias a ello se evitan irritaciones y/o alergia. No contienen químicos, no contaminan el medio ambiente."],"lista":["Marca: Ecology Fem","Tamaño: Regular - 15 cm alto 5.5 cm ancho más alas","Durabilidad: se estima de 3 a 5 años","Pack de 3 unidades","Variedad de diseños"]},"precio":830,"stock":true},{"id":"panial","titulo":"Pañal de tela","carpetaIMG":"paniales","categoria":"sinplastico","descripcion":{"tituloModal":"Pañales Ecologicos De Tela + Absorbente - Clover","parrafos":["Pañales de tela ecológicos con sistema de bolsillo confeccionados con PUL. Lavables y reutilizables. Talle único ajustable, desde 3 a 16 KG.","Incluye:","- Pañal ecológico (diseño a elección)","- Inserto absorbente de 4 capas (3 capas de microfibra + 1 de algodón)"],"lista":["Marca: Clover","Exterior de PUL, respirable e impermeable.","Interior de tela siempre seco hipoalergénica","Sistema de bolsillo"]},"precio":1050,"stock":true},{"id":"cubierto","titulo":"Cubiertos Biodegrables","carpetaIMG":"cubiertos","categoria":"sinplastico","descripcion":{"tituloModal":"Cubiertos de Madera","parrafos":["Desc 1","Desc 2","Desc 3"],"lista":["Item 1","Item 2","Item 3","Item 4"]},"precio":430,"stock":false},{"id":"copita","titulo":"Copita Menstrual","carpetaIMG":"copitas","categoria":"salud","descripcion":{"tituloModal":"Copita Menstrual MUNAY","parrafos":["Presentaciones en copa menstrual Munay 0, 1 y 2 Clásica; y Munay Flex(25% más flexibles que la Munay tradicional) 0, 1 y 2.","Munay copita menstrual, es un producto que se utiliza en los días de menstruación colocándose en la vagina para recibir el flujo menstrual."],"lista":["Marca: Munay","Talle: 0/1/2/Flex 0/Flex 1/Flex 2","Fabricadas 100% de silicona hipoalergénica.","No testeada en animales"]},"precio":370,"stock":true},{"id":"hisopo","titulo":"Hisopos Biodegradables","carpetaIMG":"hisopos","categoria":"higiene","descripcion":{"tituloModal":"Hisopos 100%puro Algodon 100% Biodegradable Compostable","parrafos":["Hisopos de 100% Puro Algodon y de BASTONES DE PAPEL BIODEGRADABLES COMPOSTABLES al 100% (nada de plastico) - TOTALMENTE ECOLOGICOS Y SUSTENTABLES","Cotonetes flexibles fabricados en algodón y papel.","Perfectos para una rutina de higiene personal o maquillaje en equilibrio con la naturaleza."],"lista":["Marca: Bio Transito","500 unidades","100% Biodegradable","100% Compostable"]},"precio":1700,"stock":true},{"id":"piedra","titulo":"Piedra de Alumbre","carpetaIMG":"piedras","categoria":"sinplastico","descripcion":{"tituloModal":"Piedra de Alumbre","parrafos":["Desc 1","Desc 2","Desc 3"],"lista":["Item 1","Item 2","Item 3","Item 4"]},"precio":800,"stock":false},{"id":"esponja","titulo":"Esponja de Yute","carpetaIMG":"esponjas","categoria":"sinplastico","descripcion":{"tituloModal":"Esponja de Yute biodegradable Tawashi","parrafos":["Esponja ecológica 100% compostable. Confeccionada artesanalmente con yute. Producto compostable en su totalidad. Ideal para reemplazar las esponjas tradicionales lavaplatos por esta opción ecológica. No produce alergia.","Modo de uso:","Usar normalmente, enjuagar bien con agua limpia y dejar secar colgada en el grifo para un secado mas ligero o posar sobre una jabonera que ayude a escurrir el agua. Cuando su vida útil haya finalizado, podrás compostarla y así devolverla a la tierra sin contaminar el medio ambiente."],"lista":["Marca: Tawashi","Duración aproximada: 3 meses, dependiendo de uso y el cuidado que le proporciones","Tamaño: 10 x 7 cm. Industria Nacional"]},"precio":400,"stock":true}]';
 
 const arrayProductos = jsonToArray(productosJSON);//JSON A ARRAY DE OBJETOS
 
 const productosPadre = document.getElementById('productos');//ELEMENTO PADRE DE LOS PRODUCTOS
 
 ordenarProductos(arrayProductos, "nombreASC");//ODERNO ARRAY ALFABETICAMENTE
 
 let categoriaActual = "todos";//CATEGORIA DEFAULT
 
 mostrarProductos(categoriaActual); //MUESTRA LOS PRODUCTOS
 
 const carrito = new Carrito();
 
 const itemsCategoria = document.getElementsByClassName('itemCategoria');
 
 const navCarrito = document.getElementById("nav-carrito");
 
 
 navCarrito.onclick = () =>{
    console.log(carrito);
 };
 
 
 for (const item of itemsCategoria){
    item.onclick = () => {
       categoriaActual = item.getAttribute("categoria");
       mostrarProductos(categoriaActual);
    }
 }
 
 
 const itemsOrdenar = document.getElementsByClassName('itemOrdenar');
 
 for (const item of itemsOrdenar){
    item.onclick = () => {
       ordenarProductos(arrayProductos, item.getAttribute("orden"));
       mostrarProductos(categoriaActual);
    }
 }
 
 
 const botonesCarrito = document.getElementsByClassName("agregarCarrito");
 
 for (const boton of botonesCarrito){
    boton.onclick = () => {
       const idPresionado = boton.getAttribute("productoID");
       const productoSeleccionado = getProducto(arrayProductos, idPresionado);
       carrito.agregarProducto(productoSeleccionado);
    }
 }
 