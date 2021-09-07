class Producto {
    constructor(nombre, categoria, precio) {
        this.nombre  = nombre.toUpperCase();
        this.categoria = categoria;
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
const producto1 = new Producto("Cepillo de Bambu", "Ecologico", 650);

const producto2 = new Producto("Shampoo Sólido", "Higiene", 710);

const producto3 = new Producto("Acondicionador Sólido","Higiene", 710);

const producto4 = new Producto("Protectores Diarios de Tela", "Sustentable", 250);

//MUESTRA UN CATALOGO Y RECIBE POR EL PROMPT EL PRODUCTO ELEGIDO//
mostrarCatalogo = () =>{
    alert("Ingrese nro de Producto que desea agregar: -->");
    return prompt("1 - " + producto1.nombre + "  |  2 - " + producto2.nombre + "  |  3 - " + producto3.nombre + "  |  4 - " + producto4.nombre);
}

//LISTA LOS PRODUCTOS QUE SU CANTIDAD SEA MAYOR A 0//
mostrarCarrito = () =>{
    let productos = "Su carrito: "
    if (producto1.cantidad > 0)
        productos += producto1.nombre + " - categoria=" + producto1.categoria + " - cant=" + producto1.cantidad + " - precio= $" + producto1.precioTotal() + " |  ";
    if (producto2.cantidad > 0)
        productos += producto2.nombre + " - categoria=" + producto2.categoria + " - cant=" + producto2.cantidad + " - precio= $" + producto2.precioTotal() + " |  ";
    if (producto3.cantidad > 0)
        productos += producto3.nombre + " - categoria=" + producto3.categoria + " - cant=" + producto3.cantidad + " - precio= $" + producto3.precioTotal() + " |  ";
    if (producto4.cantidad > 0)
        productos += producto4.nombre + " - categoria=" + producto4.categoria + " - cant=" + producto4.cantidad + " - precio= $" + producto4.precioTotal() + " |  ";

    alert(productos);
}

//INCREMENTA EN UNO EL PRODUCTO QUE RECIBE//
sumarAlCarrito = nroProducto =>{
    switch (nroProducto){
        case "1":
            producto1.sumarProducto();
            break;
        case "2":
            producto2.sumarProducto();
            break;
        case "3":
            producto3.sumarProducto();
            break;
        case "4":
            producto4.sumarProducto();
            break;
    }
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
        alert("Gracias por visitar la tienda");
    }
}
