// --- algoritmo para cmabiar el color de fondo de un elemento ------- ELIMINAR ---------------
let element = document.getElementById('element');

function randomNun() {
    let result = []
    let textResult = ''
    for (let i = 0; i < 3; i++) {
        result.push(Math.floor(Math.random()*256));        
    }
    textResult = result.join(', ')
    return  textResult
}

function changeColor() {
    element.style.backgroundColor = `rgba(${randomNun()}, 0.2)`;
}

// -----------------------------------------------------------------------------------------------

// DOS ENFOQUES DIFERENTES PARA EL MANEJO DE EVENTOS
// A . Utilizar el atributo onclick=function() en el HTML
// Ventajas - Ideal para proyectos pequeños por su simplicidad, cuando no se requiere un control exhaustivo de los eventos
// Desventajas - Solo se puede agregar una unica funcion a un evento

// Antes de todo, seleccionamos el elemento del DOM
let chat = document.querySelector('.chat')

// Definimos la funcion en el HTML y en JS para indicar los pasos que se ejecutarán. En este caso agregar una clase al elemento
function chatOpener (){
    chat.classList.toggle('chat--opened');

}

// B. Utilizar el addEventListener sobre el elemento DOM
// Ventajas - Multiples listener en un elemento, gestion de eventos complejos cuando necesitamos un manejo preciso del orden de ejecucion
// Desventajas - X
// chat.addEventListener('click', () => {
//     chat.classList.toggle('chat--opened');
// });



