alert("Ingrese el numero de producto y la cantidad para calcular el total");
let producto = parseInt(prompt("1)Shampoo:$230 | 2)Acondicionador:$300 | 3)Hisopos:$170"));

while (producto < 1 || producto > 3){
    alert("El numero de producto ingresado es incorrecto, intente nuevamente");
    producto = parseInt(prompt("1)Shampoo:$230 | 2)Acondicionador:$300 | 3)Hisopos:$170"));
}

const cantidad = parseInt(prompt("Ingrese cantidad"));
if (producto == 1)
    alert("Shampoo x" + cantidad + " | Total: $" + 230*cantidad);
else if (producto == 2)
    alert("Acondicionador x" + cantidad + " | Total: $" + 300*cantidad);
else
    alert("Hisopos x" + cantidad + " | Total: $" + 170*cantidad);
    