// Altera o nome do pet para letras maiúsculas 
export function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

// Verifica se o pet pode ser adotado, com base na idade + porte
export function verificarSePodeSerAdotado(idade, porte) {
  if (idade === 1 && porte === 'M') {
    return true;
  } else {
    return false;
  }
}

// Calcula o consumo diário de ração em gramas com base no peso (300g por kg)
export function calcularConsumoDeRacao(nome, idade, peso) {
  return peso * 300;
}

// Decide qual atividade é mais adequada de acordo com o porte do pet
export function decidirTipoDeAtividadePorPorte(porte) {
  if (porte === 'pequeno') {
    return 'brincar dentro de casa';
  } else {
    return 'atividade não definida';
  }
}

// Simula a busca de um dado assíncrono 
export async function buscarDadoAsync() {
  return 'Pipoca';
}
