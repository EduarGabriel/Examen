document.addEventListener('DOMContentLoaded', function () {
    const btnCart = document.querySelector('.container-icon');
    const containerCartProducts = document.querySelector('.container-cart-products');
    const contadorProductos = document.getElementById('contador-productos');
    const listaProductosCarrito = document.querySelector('.cart-product-list');
    const totalPagar = document.getElementById('total-pagar');

    let cantidadProductos = 0;
    let productosCarrito = [];

    btnCart.addEventListener('click', () => {
        containerCartProducts.classList.toggle('hidden-cart');
        actualizarListaProductosCarrito();
        actualizarTotal();
    });

    document.querySelectorAll('.add-to-cart').forEach((button) => {
        button.addEventListener('click', (event) => {
            const producto = event.target.closest('.item');
            const nombreProducto = producto.querySelector('h2').textContent;
            const precioProducto = parseFloat(producto.querySelector('.price').getAttribute('data-price'));

            productosCarrito.push({ nombre: nombreProducto, precio: precioProducto });
            cantidadProductos++;
            actualizarListaProductosCarrito();
            actualizarTotal();
        });
    });

    function actualizarListaProductosCarrito() {
        listaProductosCarrito.innerHTML = '';

        productosCarrito.forEach((producto) => {
            const li = document.createElement('li');
            li.textContent = `${producto.nombre} - $${producto.precio}`;
            listaProductosCarrito.appendChild(li);
        });
    }

    function actualizarTotal() {
        let total = productosCarrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
        totalPagar.textContent = `$${total.toFixed(2)}`;
        contadorProductos.textContent = cantidadProductos.toString();
        if (cantidadProductos === 0) {
            totalPagar.textContent = 'Carro vacío';
        }
    }
});

