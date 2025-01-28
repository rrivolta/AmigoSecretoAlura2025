// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    actualizarListaAmigos();
    input.value = ""; // Limpia el campo de texto
}

// Función para actualizar la lista de nombres en pantalla
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpia la lista anterior

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        // Botón para eliminar nombres individualmente
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("button-delete");
        botonEliminar.setAttribute("aria-label", `Eliminar a ${amigo}`);
        botonEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(botonEliminar);
        listaAmigos.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarListaAmigos();
}

// Función para realizar el sorteo de amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos dos nombres para realizar el sorteo.");
        return;
    }

    // Crear una copia de la lista para el sorteo
    let nombresSorteo = [...amigos];
    let resultado = [];

    amigos.forEach((amigo) => {
        let amigoSecreto;
        do {
            amigoSecreto = nombresSorteo[Math.floor(Math.random() * nombresSorteo.length)];
        } while (amigoSecreto === amigo); // Evita que alguien sea su propio amigo secreto

        // Elimina el amigo secreto sorteado de la lista para no repetir
        nombresSorteo = nombresSorteo.filter((nombre) => nombre !== amigoSecreto);
        resultado.push({ amigo, amigoSecreto });
    });

    mostrarResultado(resultado);
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = ""; // Limpia los resultados anteriores

    resultado.forEach((asignacion) => {
        const li = document.createElement("li");
        li.textContent = `${asignacion.amigo} tiene como amigo secreto a ${asignacion.amigoSecreto}`;
        listaResultado.appendChild(li);
    });
}
