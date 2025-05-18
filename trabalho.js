// Nome: Rodrigo Henrique
// Data: 18/05/2025

function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

function verificarSePodeSerAdotado(idade, porte) {
  return ((idade >= 1 && porte === 'M') || (porte === 'P'))? true : false;

 }

function calcularConsumoDeRacao(nome, idade, peso) {
  return ((peso * 10) * 30); // Necessário multiplicar por 10 para que a base do peso e das gramas sejam equivalentes
}

function decidirTipoDeAtividadePorPorte(porte) {
    switch (porte) {
        case 'pequeno':
            return 'brincar dentro de casa';
        case 'medio':
            return 'caminhada no quarteirão';
        case 'grande':
            return 'correr no parque';
        default:
            return "porte inválido";
    }
}

async function buscarDadoAsync() {
      return "Pipoca";
}

export{ 
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}
    