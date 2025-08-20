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
        agregarElementosLista();
    }
    else{
        alert('Por favor, inserte un nombre valido');
    }
    limpiarCajaTexto();
}

//Función para limpiar caja de Texto
function limpiarCajaTexto(){
    document.getElementById("amigo").value='';
}

//Función para agregar elementos a la lista en el HTML
function agregarElementosLista(){
    let listahtml=document.getElementById('listaAmigos');
    listahtml.innerHTML='';//Evita que se dupliquen los datos de la lista
    for (let i=0; i<amigos.length ; i++){
        let nuevoElementoLista=document.createElement('li');//Crear etiqueta en el DOM cada que se añade un elemento a la lista
        nuevoElementoLista.textContent=amigos[i];//Agregar texto a la etiqueta
        document.getElementById('listaAmigos').appendChild(nuevoElementoLista);//Indicar el lugar al que petenecerá dicha etiqueta
    }
}