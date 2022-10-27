function cargarCarrito() {

    const divProductoCarrito = document.getElementById("DivProductoCarrito");
    const h2Subtotal = document.getElementById("Subtotal");
    const h3SubtotalResumen = document.getElementById("SubtotalProductos");
    const h3CostoTotal = document.getElementById("CostoTotal");


    fetch("../js/productosCarrito.json")
        .then(response => response.json())
        .then(jsonProductos => {

            const resultado = JSON.stringify(jsonProductos);
            const productos = JSON.parse(resultado);

            let subtotal = 0;

            for (let i = 0; i < productos.length; i++) {

                // Creo el div de la imagen
                const divImagen = document.createElement("div");
                divImagen.classList.add("ImagenProducto");

                const img = document.createElement("img");
                img.width = 150;
                img.src = productos[i].imagen;

                divImagen.appendChild(img);

                // Creo el div de la descripcion
                const divDescripcion = document.createElement("div");
                divDescripcion.classList.add("ProductoDescripcion");

                const h2Descripcion = document.createElement("h2");
                h2Descripcion.textContent = productos[i].nombre;

                const pDescripcion = document.createElement("p");
                pDescripcion.textContent = productos[i].descripcion;

                divDescripcion.appendChild(h2Descripcion);
                divDescripcion.appendChild(pDescripcion);

                // Creo el div de la cantidad
                const divCantidad = document.createElement("div");

                const h3Cantidad = document.createElement("h3");
                h3Cantidad.textContent = productos[i].cantidad;

                divCantidad.appendChild(h3Cantidad);

                // Creo el div del precio
                const divPrecio = document.createElement("div");
                divPrecio.classList.add("ProductoPrecio");

                const h3Precio = document.createElement("h3");
                h3Precio.textContent = "$" + productos[i].precio;

                divPrecio.appendChild(h3Precio);

                // Agrego los divs creados al div principal
                divProductoCarrito.appendChild(divImagen);
                divProductoCarrito.appendChild(divDescripcion);
                divProductoCarrito.appendChild(divCantidad);
                divProductoCarrito.appendChild(divPrecio);

                subtotal = subtotal + (productos[i].precio * productos[i].cantidad);
            }

            h2Subtotal.textContent = "$" + subtotal;

            h3SubtotalResumen.textContent = "$" + subtotal;

            const total = subtotal + 190;
            h3CostoTotal.textContent = "$" + total;
        });
}
