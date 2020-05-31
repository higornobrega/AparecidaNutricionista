adicionarPaciente.addEventListener("click", function (event) {
    event.preventDefault()
    var formulario = document.querySelector("#form-adiciona")
    var paciente = obtemPacienteFormulario(formulario);
    console.log(paciente)
    var pacienteTr = montaTr(paciente)
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    formulario.reset();
});

function obtemPacienteFormulario(formulario) {
    var paciente = {
        nome: formulario.nome.value,
        altura: formulario.altura.value,
        peso: formulario.peso.value,
        gordura: formulario.gordura.value,
        imc: calcula_imc(formulario.peso.value, formulario.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(criaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function criaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}