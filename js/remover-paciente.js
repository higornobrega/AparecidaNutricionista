var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function(event){//event quem foi clicado
    var alvoEvento = event.target; //Onde foi clicado
    var paiDoAlvo = alvoEvento.parentNode; //Pai de quem foi clicado
    paiDoAlvo.remove();
});

// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         this.remove();
//     });
// });