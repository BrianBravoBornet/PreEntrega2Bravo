class Producto {
    constructor(nombre, precio, detalle, cantidad) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.detalle = detalle;
        this.cantidad = cantidad;
        this.disponible = true;
    }

seisCuotas(){
    return this.precio / 6;
}

Vender(){
    this.disponible = false;
}

}

var arrayProductos = [];
do{
    var comprobacion = prompt('Ingrese nombre del producto o fin para terminar');
    if (comprobacion === "fin" || comprobacion === "FIN" || comprobacion === "Fin"){
        break;
    }else{
        nombreP = comprobacion;
        var precioP = prompt('Ingrese precio del producto');
        var detalleP = prompt('Ingrese detalle del producto');
        var cantidadP = prompt('Ingrese cantidad del producto');
        arrayProductos.push(new Producto(nombreP, precioP, detalleP, cantidadP));
    }
}
while (comprobacion != "fin" || comprobacion != "FIN" || comprobacion != "Fin")

console.log(arrayProductos);

for (var producto of arrayProductos) {
    document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li></ul>");
    document.write("<ul><li><h3>Detalle: " + producto.detalle + "</h3></li></ul>");
    document.write("<ul><li><h3>Cantidad: " + producto.cantidad + "</h3></li></ul>");
    document.write("<ul><li><h3>Precio: " + producto.precio + "</h3></li></ul>");
    document.write("<ul><li><h3>En 6 cuotas cada una es de: " + producto.seisCuotas() + "</h3></li></ul><br>");
}

