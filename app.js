// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array donde se alamacenan los amigos que se van añadiendo.
let amigos=[];

// Función para agregar un amigo a la lista
// La función recibe un nombre y lo agrega al array de amigos
function agregarAmigo() {
    // Recoger el nombre del amigo desde el input y elimina la posibilidad de tener espacios como entradas con trim()
    let nombreAmigo= document.getElementById('amigo').value.trim();
    //console.log(nombreAmigo);//Verificar que solo se agregue el valor del objeto
    
    //Validar una entrada valida
    if(nombreAmigo!=''){
        amigos.push(nombreAmigo);
        console.log(amigos);
    }
    else{
        alert('Por favor, inserte un número valido');
    }
    limpiarCajaTexto();
}

function limpiarCajaTexto(){
    document.getElementById("amigo").value='';
}

