//PRODUCTOS//
const producto1 = "Cepillo de Bambu";
let cantProd1 = 0;

const producto2 = "Shampoo Sólido";
let cantProd2 = 0;

const producto3 = "Acondicionador Sólido";
let cantProd3 = 0;

const producto4 = "Protectores Diarios de Tela";
let cantProd4 = 0;

//MUESTRA UN CATALOGO Y RECIBE POR EL PROMPT EL PRODUCTO ELEGIDO//
mostrarCatalogo = () =>{
    alert("Ingrese nro de Producto que desea agregar: -->");
    return prompt("1 - " + producto1 + "  |  2 - " + producto2 + "  |  3 - " + producto3 + "  |  4 - " + producto4);
}

//LISTA LOS PRODUCTOS QUE SU CANTIDAD SEA MAYOR A 0//
mostrarCarrito = () =>{
    let productos = "Su carrito: "
    if (cantProd1 > 0)
        productos += producto1 + " - cantidad=" + cantProd1 + "  |  ";
    if (cantProd2 > 0)
        productos += producto2 + " - cantidad=" + cantProd2 + "  |  ";
    if (cantProd3 > 0)
        productos += producto3 + " - cantidad=" + cantProd3 + "  |  ";
    if (cantProd4 > 0)
        productos += producto4 + " - cantidad=" + cantProd4 + "  |  ";

    alert(productos);
}

//INCREMENTA EN UNO EL PRODUCTO QUE RECIBE//
sumarAlCarrito = nroProducto =>{
    switch (nroProducto){
        case "1":
            cantProd1 ++;
            break;
        case "2":
            cantProd2 ++;
            break;
        case "3":
            cantProd3 ++;
            break;
        case "4":
            cantProd4 ++;
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
