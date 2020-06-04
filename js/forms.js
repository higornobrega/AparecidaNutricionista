var adicionarPaciente = document.querySelector("#adicionar-paciente")
adicionarPaciente.addEventListener("click", function (event) {
    event.preventDefault()
    var formulario = document.querySelector("#form-adiciona")
    var paciente = obtemPacienteFormulario(formulario);

    var erros = validaPaciente(paciente);
    if (erros.length > 0) {
        exibeMensagensDeErro(erros)
        return;
    }
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
    adicionaPacienteNaTabel(paciente)
    formulario.reset();

});

function adicionaPacienteNaTabel(pacientes) {
    var pacienteTr = montaTr(pacientes);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}

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
    if (paciente.nome.length == 0) {
        erros.push("Nome não pode ser em branco");
    }
    if (!validaPeso(paciente.peso)) {
        erros.push("Peso inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura inválida");
    }
    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }
    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }
    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
    erros.forEach(function (erro) {
        var li = document.createElement("li")
        li.textContent = erro;
        ul.appendChild(li)
    });
}