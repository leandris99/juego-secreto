//asignarTextoElemento("h1", "JUEGO DEL NUMERO SECRETO ");

/* a las funciones se les puede llamar en cualquier parte del codigo ya sea antes o despues de declarar la funcion, 
siempre y cuando esten declaradas. js tiene una habilidad que lo permite*/

/*function intentoUsuario (){
    alert(13+16)
};*/

function asignarTextoElemento(elemento,texto){ // funcion que recibe parametros para esrructura HTML
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
};

/*signarTextoElemento("h1", "JUEGO DEL NUMERO SECRETO ");
asignarTextoElemento("p", "Coloca un numero entre 1 y 10 ");*/

let numerosecreto = 0; 
let numeroSorteados = [];
let numMax = 10;


function generarNumSecreto(){
    let numerogenerado = Math.floor(Math.random() * numMax)+1  //funcion que genera numero secreto entre 1 y numMax
    console.log(numerogenerado)
    console.log(numeroSorteados)

    if(numeroSorteados.length==numMax){
        asignarTextoElemento("p", "ya se sortearon todos los numeros posibles");

    } else {
        if(numeroSorteados.includes(numerogenerado)){
            return generarNumSecreto()
        }else{
            numeroSorteados.push(numerogenerado);
            return numerogenerado
        }

    }

}



let intentos = 0 ;
function verificarintento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(intentos);
    if(numeroUsuario === numerosecreto){
        asignarTextoElemento("p", `acertaste el numero secreto en ${intentos} ${(intentos===1) ? "vez" : "veces"}`) // el usuario acerta el juego
        document.getElementById("reiniciar").removeAttribute("disabled"); 
    
    }else if (numeroUsuario>numerosecreto){ //el susario no acerta el numero
            asignarTextoElemento("p", "el numero secreto es menor")   
        }else {
            asignarTextoElemento("p", "numero secreto es mayor")
        }
        intentos++;
        limpiarcaja();
        return;
}


function limpiarcaja(){
    let valorcaja = document.querySelector("#valorUsuario").value="";
}


function condicionesIniciales(){
    asignarTextoElemento("h1", "JUEGO DEL NUMERO SECRETO ");
    asignarTextoElemento("p", "Coloca un numero entre 1 y " +numMax);
    numerosecreto = generarNumSecreto(); 
    intentos = 1;
}
function reiniciarJuego() {
    //limpiar caja
    limpiarcaja();
    //indicar mensaje de intervalo de numero
    //generar numero aleatorio
     //inicializar el numero de intentos
     condicionesIniciales();
    //deshabilitar boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", true);
}
condicionesIniciales();