const carrito = JSON.parse(localStorage.getItem("carritoLocal"));//Obtengo carrito desde localstorage

//Si el carrito esta vacio muestro un alert y redigiro a la tienda
if (!carrito){
    alert("Su carrito está vacío, será redirigido a la tienda");
    window.location.href="./index.html";
}


//Cargo los items la tabla y sumo los precios para obtener el total
let total = 0;
for (const producto of carrito.productos){
    $(`#lista`).append(`
        <tr>
            <td>${producto.titulo}</td>
            <td>x${producto.cantidad}</td>
            <td>$${producto.precioTotal}</td>
        </tr>
    `)
    total += producto.precioTotal;
}
$(`#lista`).append(`
    <tr>
        <td colspan="3">Precio Total: $${total}</td>
    </tr>
`)

//validacion de botones anterior y siguiente
const validarBtnsAntSig = () =>{
    $(`#btnSigUno`).click( () =>{
        $(`#despUno`).removeClass("active");
        $(`#despDos`).addClass("active");
    })
    $(`#btnAntUno`).click( () =>{
        $(`#despDos`).removeClass("active");
        $(`#despUno`).addClass("active");
    })
    $(`#btnSigDos`).click( () =>{
        $(`#despDos`).removeClass("active");
        $(`#despTres`).addClass("active");
    })
    $(`#btnAntDos`).click( () =>{
        $(`#despTres`).removeClass("active");
        $(`#despDos`).addClass("active");
    })
}

//Valido input de la seccion tus datos
const validarInputDatos = () => {
    $(`.inputDatos`).focusout( function(){
        if (checkCamposDatos())//Si estan todos completos
            $('#btnSigDos').removeAttr("disabled");// habilito el boton
        else//Si alguno no esta completo
            $('#btnSigDos').attr("disabled", "disabled");//lo deshabilito
    })
}

//Chequeo el largo de los input para ver que no esten vacios
const checkCamposDatos = () =>{
    let output = true;//defino por defecto como true
    $(`.inputDatos`).each( function () {
        if ($(this).val().length == 0)
            output = false;//Si algun campo esta vacio cambio la variable a false
    })
    return output;
}

validarBtnsAntSig();
validarInputDatos();

//Si clickeo envio a domicilio muestro los input sino los oculto
$(`#sucursal`).click( () => $(`#divDomicilio`).hide());
$(`#domicilio`).click( () => $(`#divDomicilio`).show());

//Al clickear confirmar, borro el local storage, realizo el submit y muestro un alert.
//Al confirmar el alert redirijo nuevamente a la tienda con el carrito vacio.
$(`#btnSubmit`).click( () =>{
    localStorage.clear();
    $(`form`).submit();
    alert("Gracias por su compra!");
    window.location.href="./index.html";
})
