// Função para mostrar apenas o quadrimestre selecionado
function mostrarQuadrimestre() {
    var seletorQuadrimestre = document.getElementById('seletorQuadrimestre');
    var quadrimestreSelecionado = parseInt(seletorQuadrimestre.value);

    // Oculta todos os quadrimestres
    var quadrimestres = document.querySelectorAll('.quadrimestre');
    quadrimestres.forEach(function(quadrimestre) {
        quadrimestre.style.display = 'none';
    });

    // Mostra apenas o quadrimestre selecionado
    var quadrimestreSelecionadoElement = document.getElementById('quadrimestre' + quadrimestreSelecionado);
    quadrimestreSelecionadoElement.style.display = 'block';
}

// Função para calcular os dias e horas do quadrimestre selecionado
function calcularDias(quadrimestre) {
    var dataInicialInput = document.getElementById('dataInicial' + quadrimestre);
    var mensagemErroElement = document.getElementById('mensagemErro' + quadrimestre);
    var resultadoElement = document.getElementById('resultado' + quadrimestre);
    var dataInicial = new Date(dataInicialInput.value);
    var dataFinalFixa = new Date(getFinalQuadrimestre(quadrimestre));
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
        resultadoElement.innerHTML = ''; // Limpa o resultado
        return;
    } else {
        mensagemErroElement.innerHTML = '';
    }

    // Calcula os dias e horas restantes até o final do quadrimestre
    var diferencaEmMilissegundos = Math.abs(dataFinalFixa - dataInicial);
    var dias = Math.ceil(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
    var horas = calcularHoras(dias);

    // Exibe o resultado
    resultadoElement.innerHTML =  'Com ' + dias + ' dias de licença diponível no quadrimestre, você precisa cumprir um mínimo de ' + horas + ' horas de cursos na plataforma Alura.';
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
            return '2023-11-01';
        case 2:
            return '2024-03-01';
        case 3:
            return '2024-07-01';
        default:
            return '';
    }
}

// Função auxiliar para obter a data final do quadrimestre
function getFinalQuadrimestre(quadrimestre) {
    switch (quadrimestre) {
        case 1:
            return '2024-02-29';
        case 2:
            return '2024-06-30';
        case 3:
            return '2024-10-30';
        default:
            return '';
    }
}

// Função para inicializar a página
function inicializarPagina() {
    mostrarQuadrimestre();
}

// Chamada para inicializar a página
inicializarPagina();
