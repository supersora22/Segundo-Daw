
let a = "50";
let b = 50;
let num = [20, 43, 10, 1, 40];
console.log(a === b); 
console.log(a == b); 
console.log(num.filter(num => num > 10)); 

var alumno = { 
    nombre: "Juan",
    edad: 20,
    notas: [10, 9, 6]
};
console.table(alumno); 
console.log(Object.keys(alumno)); 
console.log(Object.values(alumno)); 
console.log(alumno.edad); 


function mostrarAlerta(mensajeLog) {
    alert('Ventana de alerta');
    console.log(mensajeLog);
}

function escribirSaludo(saludo, mensajeLog) {
    console.log(mensajeLog);
    document.write('<h1>' + saludo + '</h1>');
}

function mostrarHoraConsola() {
    console.log('Hora del sistema: ' + new Date().toLocaleTimeString());
}

function activarSistema() {
    let estado = document.getElementById('estado');
    estado.innerHTML = 'Sistema Activo';
    estado.style.backgroundColor = 'green';
}

function concluirProceso() {
    window.alert('El proceso ha concluido.');
}

function evaluarRespuesta(idElemento, esCorrecta) {
    let spanRespuesta = document.getElementById(idElemento);
    if (esCorrecta) {
        spanRespuesta.innerHTML = '¡Acierto!';
        spanRespuesta.style.color = 'green';
    } else {
        spanRespuesta.innerHTML = 'Error';
        spanRespuesta.style.color = 'red';
    }
}