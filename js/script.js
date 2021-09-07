class Producto {
    constructor(nombre, categoria, precio) {
        this.nombre  = nombre.toUpperCase();
        this.categoria = categoria.toUpperCase();
        this.precio  = parseFloat(precio);
        this.cantidad = 0;
    }
    
    sumarProducto(){
        this.cantidad++;
    }

    precioTotal(){
        return this.precio * this.cantidad;
    }
}

//PRODUCTOS//
const productos = [];
productos.push(new Producto("Cepillo de Bambu", "Ecologico", 650));

productos.push(new Producto("Shampoo Sólido", "Higiene", 780));

productos.push(new Producto("Acondicionador Sólido","Higiene", 710));

productos.push(new Producto("Protectores Diarios de Tela", "Sustentable", 250));

//ORDENO LOS PRODUCTOS POR PRECIO//
productos.sort((productoA, productoB) => productoA.precio - productoB.precio);

//MUESTRA UN CATALOGO Y RECIBE POR EL PROMPT EL PRODUCTO ELEGIDO//
mostrarCatalogo = () =>{
    alert("Ingrese nro de Producto que desea agregar: -->");

    let stringCatalogo ="";

    for (let i = 0; i < productos.length; i++){
        stringCatalogo += (i+1).toString() + " - " + productos[i].nombre + " -- Precio: $" + productos[i].precio + " | ";
    }

    return prompt(stringCatalogo);
}

//LISTA LOS PRODUCTOS QUE SU CANTIDAD SEA MAYOR A 0//
mostrarCarrito = () =>{
    let strCarrito = "Su carrito: "

    for (let producto of productos){
        if (producto.cantidad > 0)
            strCarrito += producto.nombre + " - categoria=" + producto.categoria + " - cant=" + producto.cantidad + " - precio= $" + producto.precioTotal() + " |  ";
   }

    alert(strCarrito);
}

//INCREMENTA EN UNO EL PRODUCTO QUE RECIBE//
sumarAlCarrito = nroProducto =>{
    productos[nroProducto - 1].sumarProducto();
}


let validacion = prompt("Bienvenido a la tienda - Ingrese 1 para ver las opciones o 0 para salir");

while (validacion != "0"){
    validacion = prompt("Ingrese 1 para ver el catalogo, 2 para ver el carrito, 0 para salir");
    
    if (validacion == "1"){
        let elegido = mostrarCatalogo();
        sumarAlCarrito(elegido);
        mostrarCarrito();
    }else if (validacion == "2"){
        mostrarCarrito();
    }else{
        validacion = 0;
        alert("Gracias por visitar la tienda");
    }
}
