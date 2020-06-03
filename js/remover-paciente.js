var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function (event) {//event quem foi clicado
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function () {
        var alvoEvento = event.target; //Onde foi clicado
        var paiDoAlvo = alvoEvento.parentNode; //Pai de quem foi clicado
        paiDoAlvo.remove();
    }, 500);

});

// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         this.remove();
//     });
// });