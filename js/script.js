//"JSON" DE PRODUCTOS
const falsoJSON = [               
    {
        id: "orinal",
        titulo: "Orinal Femenino",
        carpetaIMG: "orinales",
        categoria: "higiene",
        descripcion:{
            tituloModal: "Orinal Femenino Liberi",
            parrafos: [
                "El orinal femenino Liberi es un dispositivo que permite a las mujeres orinar de pie.",
                "Es la solución a los problemas que enfrentamos cuando no tenemos dónde apoyarnos en los baños públicos, para prevenir ensuciarnos y evitar infecciones.",
                "El material y diseño del orinal garantiza que no haya filtraciones y sea de fácil limpieza."
            ],
            lista: [
                "Marca: Liberi",
                "Material: Plástico",
                "Ancho total: 4 cm",
                "Largo total: 19 cm"
            ]
        },
        precio: 650,
        stock: true
    },
    {
        id: "cepillo",
        titulo: "Cepillo de Bambú",
        carpetaIMG: "cepillos",
        categoria: "salud",
        descripcion:{
            tituloModal: "Cepillo De Dientes Ecológico Meraki",
            parrafos: [
                "Los cepillos de bambú tienen la misma vida útil que los cepillos de dientes convencionales fabricados con plástico.",
                "El bambú es una de las plantas con mayor tasa de crecimiento del mundo. En su proceso de crecimiento secuestra grandes cantidades de CO2, gas de efecto invernadero. Además, contiene agentes antibacterianos de origen natural, por lo que no requieren fertilizantes ni pesticidas para crecer."
            ],
            lista: [
                "Marca: Meraki",
                "97% biodegradables - 3% reciclable",
                "Dureza de las cerdas: Medio",
                "El packaging y mango pueden ser compostados."
            ]
        },
        precio: 170,
        stock: true
    },
    {
        id: "shampoo",
        titulo: "Shampoo Sólido",
        carpetaIMG: "shampoo",
        categoria: "higiene",
        descripcion:{
            tituloModal: "Shampoo Sólido Natural Hidratante",
            parrafos: [
                "¿Cómo usar el Shampoo sólido?",
                "Es importante saber que nuestro Shampoo no tiene el llamado periodo de depuración, tu cabello quedará limpio desde el primer lavado. Si, tenés que tener presente, que vas a tener que armar una nueva rutina de lavado, acostumbrarse a un producto sólido sin siliconas no es fácil y puede llevar su tiempo, pero seguro vale la pena."
            ],
            lista: [
                "Marca: The Mash Store",
                "Es hipoalergénico: No",
                "Biodegradables y sin envases plásticos",
                "Detiene la caída del cabello, favoreciendo la irrigaciòn sanguínea y el crecimiento capilar."
            ]
        },
        precio: 710,
        stock: true
    },
    {
        id: "peine",
        titulo: "Peine de Madera",
        carpetaIMG: "peines",
        categoria: "sinplastico",
        descripcion:{
            tituloModal: "Peine",
            parrafos: [
                "Desc 1",
                "Desc 2",
                "Desc 3"
            ],
            lista: [
                "Item 1",
                "Item 2",
                "Item 3",
                "Item 4"
            ]
        },
        precio: 350,
        stock: false
    },
    {
        id: "acon",
        titulo: "Acondicionador Sólido",
        carpetaIMG: "acondicionadores",
        categoria: "higiene",
        descripcion:{
            tituloModal: "Acondicionador Solido Natural Hidratante",
            parrafos: [
                "¿Cómo usar el Acondicionador sólido?",
                "Es importante saber que nuestro Shampoo no tiene el llamado periodo de depuración, tu cabello quedará limpio desde el primer lavado. Si, tenés que tener presente, que vas a tener que armar una nueva rutina de lavado, acostumbrarse a un producto sólido sin siliconas no es fácil y puede llevar su tiempo, pero seguro vale la pena."
            ],
            lista: [
                "Marca: The Mash Store",
                "Es hipoalergénico: No",
                "Biodegradables y sin envases plásticos",
                "Detiene la caída del cabello, favoreciendo la irrigaciòn sanguínea y el crecimiento capilar."
            ]
        },
        precio: 710,
        stock: true
    },
    {
        id: "protector",
        titulo: "Protectores Diarios",
        carpetaIMG: "protectores",
        categoria: "salud",
        descripcion:{
            tituloModal: "Protectores Diarios En Tela Ecológicos",
            parrafos: [
                "Por los materiales con que está confeccionado son ecológicos e hipoalergenicos.",
                "No utilizamos tela siempre seca o microfibra porque contienen poliéster, gracias a ello se evitan irritaciones y/o alergia. No contienen químicos, no contaminan el medio ambiente."
            ],
            lista: [
                "Marca: Ecology Fem",
                "Tamaño: Regular - 15 cm alto 5.5 cm ancho más alas",
                "Durabilidad: se estima de 3 a 5 años",
                "Pack de 3 unidades",
                "Variedad de diseños"
            ]
        },
        precio: 830,
        stock: true
    },
    {
        id: "panial",
        titulo: "Pañal de tela",
        carpetaIMG: "paniales",
        categoria: "sinplastico",
        descripcion:{
            tituloModal: "Pañales Ecologicos De Tela + Absorbente - Clover",
            parrafos: [
                "Pañales de tela ecológicos con sistema de bolsillo confeccionados con PUL. Lavables y reutilizables. Talle único ajustable, desde 3 a 16 KG.",
                "Incluye:",
                "- Pañal ecológico (diseño a elección)",
                "- Inserto absorbente de 4 capas (3 capas de microfibra + 1 de algodón)"
            ],
            lista: [
                "Marca: Clover",
                "Exterior de PUL, respirable e impermeable.",
                "Interior de tela siempre seco hipoalergénica",
                "Sistema de bolsillo"
            ]
        },
        precio: 1050,
        stock: true
    },
    {
        id: "cubierto",
        titulo: "Cubiertos Biodegrables",
        carpetaIMG: "cubiertos",
        categoria: "sinplastico",
        descripcion:{
            tituloModal: "Cubiertos de Madera",
            parrafos: [
                "Desc 1",
                "Desc 2",
                "Desc 3"
            ],
            lista: [
                "Item 1",
                "Item 2",
                "Item 3",
                "Item 4"
            ]
        },
        precio: 430,
        stock: false
    },
    {
        id: "copita",
        titulo: "Copita Menstrual",
        carpetaIMG: "copitas",
        categoria: "salud",
        descripcion:{
            tituloModal: "Copita Menstrual MUNAY",
            parrafos: [
                "Presentaciones en copa menstrual Munay 0, 1 y 2 Clásica; y Munay Flex(25% más flexibles que la Munay tradicional) 0, 1 y 2.",
                "Munay copita menstrual, es un producto que se utiliza en los días de menstruación colocándose en la vagina para recibir el flujo menstrual."
            ],
            lista: [
                "Marca: Munay",
                "Talle: 0/1/2/Flex 0/Flex 1/Flex 2",
                "Fabricadas 100% de silicona hipoalergénica.",
                "No testeada en animales"
            ]
        },
        precio: 370,
        stock: true
    },
    {
        id: "hisopo",
        titulo: "Hisopos Biodegradables",
        carpetaIMG: "hisopos",
        categoria: "higiene",
        descripcion:{
            tituloModal: "Hisopos 100%puro Algodon 100% Biodegradable Compostable",
            parrafos: [
                "Hisopos de 100% Puro Algodon y de BASTONES DE PAPEL BIODEGRADABLES COMPOSTABLES al 100% (nada de plastico) - TOTALMENTE ECOLOGICOS Y SUSTENTABLES",
                "Cotonetes flexibles fabricados en algodón y papel.",
                "Perfectos para una rutina de higiene personal o maquillaje en equilibrio con la naturaleza."
            ],
            lista: [
                "Marca: Bio Transito",
                "500 unidades",
                "100% Biodegradable",
                "100% Compostable"
            ]
        },
        precio: 1700,
        stock: true
    },
    {
        id: "piedra",
        titulo: "Piedra de Alumbre",
        carpetaIMG: "piedras",
        categoria: "sinplastico",
        descripcion:{
            tituloModal: "Piedra de Alumbre",
            parrafos: [
                "Desc 1",
                "Desc 2",
                "Desc 3"
            ],
            lista: [
                "Item 1",
                "Item 2",
                "Item 3",
                "Item 4"
            ]
        },
        precio: 800,
        stock: false
    },{
        id: "esponja",
        titulo: "Esponja de Yute",
        carpetaIMG: "esponjas",
        categoria: "sinplastico",
        descripcion:{
            tituloModal: "Esponja de Yute biodegradable Tawashi",
            parrafos: [
                "Esponja ecológica 100% compostable. Confeccionada artesanalmente con yute. Producto compostable en su totalidad. Ideal para reemplazar las esponjas tradicionales lavaplatos por esta opción ecológica. No produce alergia.",
                "Modo de uso:",
                "Usar normalmente, enjuagar bien con agua limpia y dejar secar colgada en el grifo para un secado mas ligero o posar sobre una jabonera que ayude a escurrir el agua. Cuando su vida útil haya finalizado, podrás compostarla y así devolverla a la tierra sin contaminar el medio ambiente."
            ],
            lista: [
                "Marca: Tawashi",
                "Duración aproximada: 3 meses, dependiendo de uso y el cuidado que le proporciones",
                "Tamaño: 10 x 7 cm. Industria Nacional"
            ]
        },
        precio: 400,
        stock: true
    }
];

//CLASE PRODUCTOS
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

const jsonProductos = JSON.stringify(falsoJSON); //FALSO JSON A JSON

const productos = JSON.parse(jsonProductos); //JSON A ARRAY DE OBJETOS

const listaProductos = []; //ARRAY PARA OBJETOS DE CLASE PRODUCTOS

//RECORRE EL JSON Y LOS AGREGA AL ARRAY
for (const producto of productos){
    listaProductos.push(new Producto(producto.id, producto.titulo, producto.carpetaIMG, producto.categoria, producto.descripcion, producto.precio, producto.stock));
}

const productosPadre = document.getElementById('productos');//ELEMENTO PADRE DE LOS PRODUCTOS

for (const producto of listaProductos){
    if (producto.stock){
    //CREO UN ARTICLE LE AGREGO LA CLASE PRODUCTO SI ESTA EN STOCK
    const articleProducto = document.createElement("article");
    articleProducto.classList.add("producto", "wow", "animate__animated", "animate__fadeInUp");
    
    articleProducto.innerHTML = `
        <div class="producto__nombre">
            <h3>${producto.titulo}</h3>
        </div>
        <div class="producto__borde"></div>
        
        <div id="${producto.id}" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="img/tienda/${producto.carpetaIMG}/${producto.id}1.jpg" alt="Imagen ${producto.id}" >
            </div>
            <div class="carousel-item">
                <img src="img/tienda/${producto.carpetaIMG}/${producto.id}2.jpg" alt="Imagen ${producto.id}">
            </div>
            <div class="carousel-item">
                <img src="img/tienda/${producto.carpetaIMG}/${producto.id}3.jpg" alt="Imagen ${producto.id}">
            </div>
            </div>
            
            <a class="carousel-control-prev" href="#${producto.id}" data-slide="prev">
            <i class="fas fa-chevron-left flecha"></i>
            </a>
            <a class="carousel-control-next" href="#${producto.id}" data-slide="next">
            <i class="fas fa-chevron-right flecha"></i>
            </a>
            
        </div>

        <div class="producto__precio">
            <p>$${producto.precio.toFixed(2)} - En Stock</p>
        </div>

        
        <!-- Modal Descripcion-->
        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#modal${producto.id}">
            Mas info <i class="fas fa-book"></i>
        </button>
        <div class="modal fade" id="modal${producto.id}" tabindex="-1"aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title">${producto.descripcion.tituloModal}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                <div id="parrafos${producto.id}" class="descripcion">
                    
                </div>
                <hr>
                <div>
                    <ul id="lista${producto.id}">

                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>

        <!-- Modal Carrito-->
        <button id="sumarCarrito${producto.id}" type="button" class="btn btn-success sumarCarrito" data-toggle="modal" data-target="#modalCarrito">
            Añadir <i class="fas fa-cart-plus"></i>
        </button>
        <div class="modal fade" id="modalCarrito" tabindex="-1"aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body msjCarrito">
                <h5>¡Producto añadido al carrito!</h5>
                <a href="error.html"><button class="btn btn-success">Ver carrito</i></a>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
            </div>
        </div>`;

    productosPadre.appendChild(articleProducto);

    //CREO PARRAFOS SEGUN LA CANTIDAD QUE TENGA EL PRODUCTO EN EL JSON
    const descParrafos = document.getElementById(`parrafos${producto.id}`);
    for (const parrafo of producto.descripcion.parrafos){
        const parrafoP = document.createElement("p")
        parrafoP.innerHTML = parrafo;
        descParrafos.appendChild(parrafoP);
    }
    //CREO LISTAS SEGUN LA CANTIDAD QUE TENGA EL PRODUCTO EN EL JSON
    const descLista = document.getElementById(`lista${producto.id}`);
    for (const lista of producto.descripcion.lista){
        const listaLI = document.createElement("li")
        listaLI.innerHTML = lista;
        descLista.appendChild(listaLI);
    }
    }
    
}
