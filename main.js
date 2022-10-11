class Producto {
    constructor(nombre, precio, detalle, cantidad) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.detalle = detalle;
        this.cantidad = cantidad;
    }

tresCuotas(){
    return this.precio / 3;
}

seisCuotas(){
    return this.precio / 6;
}

doceCuotas(){
    return this.precio / 12;
}

}

var arrayProductos = [];
do{
    var comprobacion = prompt('Ingrese nombre del producto o listo para terminar');
    if (comprobacion === "listo" || comprobacion === "LISTO" || comprobacion === "Listo"){
        break;
    }else{
        nombreP = comprobacion;
        var precioP = prompt('Ingrese precio del producto');
        var detalleP = prompt('Ingrese detalle del producto');
        var cantidadP = prompt('Ingrese cantidad del producto');
        arrayProductos.push(new Producto(nombreP, precioP, detalleP, cantidadP));
    }
}
while (comprobacion != "listo" || comprobacion != "LISTO" || comprobacion != "Listo")

console.log(arrayProductos);

for (var producto of arrayProductos) {
    document.write("<h3>Nombre: " + producto.nombre + "</h3>");
    document.write("<h3>Detalle: " + producto.detalle + "</h3>");
    document.write("<h3>Cantidad: " + producto.cantidad + "</h3>");
    document.write("<h3>Precio: " + producto.precio + "</h3>");
    document.write("<h3>En 3 cuotas cada una es de: " + producto.tresCuotas() + "</h3><br>");
    document.write("<h3>En 6 cuotas cada una es de: " + producto.seisCuotas() + "</h3><br>");
    document.write("<h3>En 12 cuotas cada una es de: " + producto.doceCuotas() + "</h3><br>");
    
}

var ingresado = prompt('Ingrese el producto que desea buscar');
var prodIngresado = arrayProductos.filter(producto => producto.nombre.includes(ingresado));
console.log(prodIngresado);
document.write("<h3>Registro de busqueda: </h3>");

for (var producto of prodIngresado) {
    document.write("<h3>Nombre: " + producto.nombre + "</h3>");
    document.write("<h3>Detalle: " + producto.detalle + "</h3>");
    document.write("<h3>Precio: " + producto.precio + "</h3><br>");
}