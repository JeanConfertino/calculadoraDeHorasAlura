function calcularDias(quadrimestre, dataFinalStr) {
    var dataInicialInput = document.getElementById('dataInicial' + quadrimestre);
    var mensagemErroElement = document.getElementById('mensagemErro' + quadrimestre);
    var dataInicial = new Date(dataInicialInput.value);
    var dataFinalFixa = new Date(dataFinalStr);
    var mensagemErro = '';

    // Verifica se a data inicial foi selecionada
    if (!dataInicialInput.value) {
        mensagemErro = 'Por favor, selecione a data da liberação da sua licença.';
    }
    // Verifica se a data inicial é válida (não é anterior ao início do quadrimestre)
    else if (dataInicial < new Date(getInicioQuadrimestre(quadrimestre))) {
        mensagemErro = 'A data inicial não pode ser anterior ao início do quadrimestre.';
    }
    // Verifica se a data inicial é posterior à data final do quadrimestre
    else if (dataInicial > dataFinalFixa) {
        mensagemErro = 'A data inicial não pode ser maior que a data final do quadrimestre.';
    }

    // Se houver uma mensagem de erro, exibe-a
    if (mensagemErro !== '') {
        mensagemErroElement.innerHTML = mensagemErro;
        return;
    } else {
        mensagemErroElement.innerHTML = '';
    }

    // Calcula os dias e horas restantes até o final do quadrimestre
    var diferencaEmMilissegundos = Math.abs(dataFinalFixa - dataInicial);
    var dias = Math.ceil(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
    var horas = calcularHoras(dias);

    // Exibe o resultado
    document.getElementById('resultado' + quadrimestre).innerHTML = dias + ' dias de licença disponível para você nestre quadrimestre. Com base nestes dias, você precisará cumprir com ' + horas + ' horas de cursos dentro da plataforma Alura.';
}

// Função para calcular as horas com base no número de dias restantes
function calcularHoras(dias) {
    if (dias <= 15) {
        return 0;
    } else if (dias <= 30) {
        return 8;
    } else if (dias <= 60) {
        return 16;
    } else if (dias <= 90) {
        return 24;
    } else {
        return 32;
    }
}

// Função auxiliar para obter a data de início do quadrimestre
function getInicioQuadrimestre(quadrimestre) {
    switch (quadrimestre) {
        case 1:
            return '10/31/2023'; // essa regra tá bugada, deve-se inverter o mês por dia
        case 2:
            return '01/03/2024';
        case 3:
            return '01/07/2024';
        default:
            return '';
    }
}
