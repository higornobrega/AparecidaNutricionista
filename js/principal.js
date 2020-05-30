//Minhas alternativas

//Módulo 2
/*
var peso1 = document.getElementsByClassName('info-peso')[0];
var peso2 = document.getElementsByClassName('info-peso')[1];
var peso3 = document.getElementsByClassName('info-peso')[2];
var peso4 = document.getElementsByClassName('info-peso')[3];
var peso5 = document.getElementsByClassName('info-peso')[4];

var altura1 = document.querySelectorAll('.info-altura')[0];
var altura2 = document.querySelectorAll('.info-altura')[1];
var altura3 = document.querySelectorAll('.info-altura')[2];
var altura4 = document.querySelectorAll('.info-altura')[3];
var altura5 = document.querySelectorAll('.info-altura')[4];

var imc1 = document.querySelectorAll('.info-imc')[0];
var imc2 = document.querySelectorAll('.info-imc')[1];
var imc3 = document.querySelectorAll('.info-imc')[2];
var imc4 = document.querySelectorAll('.info-imc')[3];
var imc5 = document.querySelectorAll('.info-imc')[4];


imc1.innerHTML = Number(peso1.textContent)/(Number(altura1.textContent)*Number(altura1.textContent));
imc2.innerHTML = Number(peso2.textContent)/(Number(altura2.textContent)*Number(altura2.textContent)); 
imc3.innerHTML = Number(peso3.textContent)/(Number(altura3.textContent)*Number(altura3.textContent)); 
imc4.innerHTML = Number(peso4.textContent)/(Number(altura4.textContent)*Number(altura4.textContent));
imc5.innerHTML = Number(peso5.textContent)/(Number(altura5.textContent)*Number(altura5.textContent))  



console.log(imc1); 
/*
/*
//Módulo 1
var titulo = document.querySelector('.titulo');
//titulo.innerHTML = 'Aparecida Nutricionista';
titulo.textContent = 'Aparecida Nutricionista';
*/
//Alternativa do professor
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}
