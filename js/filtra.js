var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");
    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome")
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }

});


// var campoFiltro = document.querySelector("#filtrar-tabela");


// //Evento de perceber o que se escreve
// campoFiltro.addEventListener("input", function(){
//     console.log(this.value);
//     var pacientes = document.querySelectorAll(".paciente");

//     if(this.value.length > 0){
//         pacientes.forEach(function(paciente) {
//             var tdNome = paciente.querySelector(".info-nome");
//             var nomePaciente = tdNome.textContent;

//             var expressao = new RegExp(campoFiltro.value,"i");
//             if( !expressao.test(nomePaciente)){
//                 paciente.classList.add("invisivel");
//             } else {
//                 paciente.classList.remove("invisivel");
//             }
//         });
//     } else{
//         pacientes.forEach(function(paciente) {
//             paciente.classList.remove("invisivel");
//         });
//     }
// });