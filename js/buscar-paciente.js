var butaoAdicionar = document.querySelector("#buscar-paciente");

butaoAdicionar.addEventListener("click", function(){
    console.log("Buscando ...");
    //starta o XMLHttpRequest
    var xhr = new XMLHttpRequest()

    //Abre o http
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    //Escuta, carrega e mostra os dados do site/api
    xhr.addEventListener("load", function(){
        console.log(xhr.responseText)
    })

    //Envia a requisição
    xhr.send()
});