// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');// Obtener el campo de texto
    const nombre = inputAmigo.value.trim(); // Obtener y limpiar el texto ingresado

    // Validar que el campo no esté vacío
    if (nombre === '') {
        // Mostrar un mensaje de alerta si el campo está vacío
        alert('Por favor, inserte un nombre.');
        return; // Si el campo está vacío, salimos de la función
    }

    // Añadir el nombre al array de amigos
    amigos.push(nombre);

    // Limpiar el campo de texto
    inputAmigo.value = '';

    // Mostrar la lista actualizada
    mostrarListaAmigos();
}

function mostrarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de actualizarla

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    // Validar si el array de amigos no está vacío
    if (amigos.length === 0) {
        alert('No hay amigos para sortear. Por favor, agregue al menos un amigo.');
        return; // Si el array está vacío, salimos de la función
    }

    // Generar un índice aleatorio entre 0 y el tamaño del array - 1
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>El amigo secreto es: <strong>${amigoSorteado}</strong></p>`;
}

