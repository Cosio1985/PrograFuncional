// Datos iniciales: productos disponibles en el inventario
const productos = [
    { nombre: "Laptop", categoria: "Electrónica" },
    { nombre: "Teléfono", categoria: "Electrónica" },
    { nombre: "Silla", categoria: "Muebles" },
    { nombre: "Escritorio", categoria: "Muebles" },
    { nombre: "Camiseta", categoria: "Ropa" },
    { nombre: "Pantalón", categoria: "Ropa" }
];

// Función para filtrar productos por categoría
const filtrarPorCategoria = (categoria) => {
    // Utilizamos la función 'filter' para obtener solo los productos que coinciden con la categoría
    return productos.filter(producto => producto.categoria.toLowerCase() === categoria.toLowerCase());
};

// Función para mostrar los productos filtrados en la lista
const mostrarProductos = (productosFiltrados) => {
    const listaProductos = document.getElementById('lista-productos');
    listaProductos.innerHTML = ''; // Limpiamos la lista antes de mostrar los resultados

    // Si no hay productos que coincidan con la categoría
    if (productosFiltrados.length === 0) {
        listaProductos.innerHTML = '<li>No se encontraron productos en esta categoría.</li>';
        return;
    }

    // Iteramos sobre el arreglo de productos filtrados y los mostramos en la lista
    productosFiltrados.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = producto.nombre;
        listaProductos.appendChild(li);
    });
};

// Manejamos el envío del formulario
document.getElementById('formulario').addEventListener('submit', (evento) => {
    evento.preventDefault(); // Evitamos que el formulario se envíe y recargue la página

    // Obtenemos el valor de la categoría ingresada por el usuario
    const categoria = document.getElementById('categoria').value;

    // Filtramos los productos y los mostramos
    const productosFiltrados = filtrarPorCategoria(categoria);
    mostrarProductos(productosFiltrados);
});
