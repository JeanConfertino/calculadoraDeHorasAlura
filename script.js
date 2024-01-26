function calcularDias(quadrimestre, dataFinalStr) {
    var dataInicialInput = document.getElementById('dataInicial' + quadrimestre);
    var mensagemErroElement = document.getElementById('mensagemErro' + quadrimestre);

    // Obtém a data final específica para o quadrimestre
    var dataFinalFixa = new Date(dataFinalStr);

    var dataInicial = new Date(dataInicialInput.value);

    mensagemErroElement.innerHTML = '';

    // Verifica se a data inicial foi selecionada
    if (!dataInicialInput.value) {
        mensagemErroElement.innerHTML = 'Por favor, selecione a data da liberação da sua licença.';
        return;
    }

    // Verifica se a data inicial é válida
    if (dataInicial > dataFinalFixa) {
        mensagemErroElement.innerHTML = 'A data inicial não pode ser maior que a data final do quadrimestre.';
        return;
    }

    var diferencaEmMilissegundos = Math.abs(dataFinalFixa - dataInicial);
    var dias = Math.ceil(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
    var horas = 0;

    if (dias <= 15) {
        horas = 0;
    } else if (dias <= 30) {
        horas = 8;
    } else if (dias <= 60) {
        horas = 16;
    } else if (dias <= 90) {
        horas = 24;
    } else if (dias <= 120) {
        horas = 32;
    } else if (dias > 120) {
        horas = 32;
    }

    document.getElementById('resultado' + quadrimestre).innerHTML = '[ERROR]' + dias + ' dias para o final do quadrimestre. Você precisará cumprir com ' + horas + ' horas de cursos finalizados dentro da plataforma Alura.';
}
