const categorias = document.querySelectorAll("#categorias .categoria");
const contenedorPreguntas= document.querySelectorAll(".contenedor-preguntas")
let categoriaActiva = null;

categorias.forEach((categoria) => {
	categoria.addEventListener('click', (e) => {
		categorias.forEach((elemento) => {
			elemento.classList.remove('activa');
		});

		e.currentTarget.classList.toggle('activa');
		categoriaActiva = categoria.dataset.categoria;


		});
});