var butaoAdicionar = document.querySelector("#buscar-paciente");

butaoAdicionar.addEventListener("click", function(){
    console.log("Buscando ...");
    //starta o XMLHttpRequest
    var xhr = new XMLHttpRequest()

    //Abre o http
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    //Escuta, carrega e mostra os dados do site/api
    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta); //Converte a string em JSON para o JavaScript ler melhor
        pacientes.forEach(function(paciente){
            adicionaPacienteNaTabel(paciente);
        })
    })

    //Envia a requisição
    xhr.send()
});