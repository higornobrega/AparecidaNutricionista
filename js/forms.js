var adicionarPaciente = document.querySelector("#adicionar-paciente")
adicionarPaciente.addEventListener("click", function (event) {
    event.preventDefault()
    var formulario = document.querySelector("#form-adiciona")
    var paciente = obtemPacienteFormulario(formulario);

    var erros = validaPaciente(paciente);
    var pacienteTr = montaTr(paciente)
    if (erro.length > 0) {
        var err = document.querySelector("#mensagem-erro");
        err.textContent = erros;
        return;
    }
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

function validaPaciente(paciente) {
    var erros = [];
    if (!validaPeso(paciente.peso)) {
        erros.push("Peso inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura inválida");
    }
    return erros;
}