// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Variables
let amigos=[];//Array donde se guardan los amigos que se registren
let listahtml=document.getElementById('listaAmigos');//Variable para acceso a elemento "listaAmigos" en el HTML

// Función para agregar un amigo a la lista
// La función recibe un nombre y lo agrega al array de amigos
function agregarAmigo() {
    // Recoger el nombre del amigo desde el input y elimina la posibilidad de tener espacios como entradas con trim()
    let nombreAmigo= document.getElementById('amigo').value.trim();
    //console.log(nombreAmigo);//Verificar que solo se agregue el valor del objeto
    
    //Validar una entrada valida
    if(nombreAmigo!='' && !(amigos.includes(nombreAmigo))){//Evita entadas vacias y nombres repetidos
        amigos.push(nombreAmigo);
        console.log(amigos);
        agregarElementosLista();
    }
    else{
        if(amigos.includes(nombreAmigo)){
            alert("Ese nombre ya está en la lista, por favor, ingresa otro nombre o agregalo con sus apellidos.")
        }
        else{
            alert('Por favor, inserte un nombre valido');
        }
    }
    limpiarCajaTexto();
}

//Función para limpiar caja de Texto
function limpiarCajaTexto(){
    document.getElementById("amigo").value='';
}

//Función para agregar elementos a la lista en el HTML
function agregarElementosLista(){
    listahtml.innerHTML='';//Borra los datos ya alamacenados en la etiqueta <ul>, es decir todos los elementos <li> previammente creados.
    //Ciclo para crear la lista de nuevo cada que se introduce un nuevo amigo, cada uno con su propia etiqueta <li>
    for (let i=0; i<amigos.length ; i++){
        let nuevoElementoLista=document.createElement('li');//Crear etiqueta en el DOM cada que se añade un elemento a la lista
        nuevoElementoLista.textContent=amigos[i];//Agregar texto a la etiqueta
        document.getElementById('listaAmigos').appendChild(nuevoElementoLista);//Indicar el lugar al que petenecerá dicha etiqueta
    }
}

//Función para sortear al amigo secreto
function sortearAmigo(){
    if (amigos.length>=2){
        const amigoSecreto=Math.floor(Math.random()*amigos.length);
        //console.log("Amigo sorteado:",amigos[amigoSecreto], "; Posicion en lista: ",amigoSecreto);//Verificar que el sorteo funcione
        const resultadoHTML=document.getElementById('resultado');
        resultadoHTML.innerHTML=`El amigo secreto es: ${amigos[amigoSecreto]}`;
        limpiarLista();
    }
    else{
        alert("Por favor, ingresa al menos 2 nombres a la lista para hacer el sorteo");
    }
}

//Función para limpiar lista del HTML y JS para un nuevo juego
function limpiarLista(){
    amigos=[];
    listahtml.innerHTML='';
}