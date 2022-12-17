const validadores = {
    dataNascimento:  input => validaDataNascimento(input)
}

/**
 * 
 * @param {Element} input 
 */
export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }
}

/**
 * 
 * @param {Element} input 
 */
function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value)
    let mensagem = "";
    if(!maiorQue18(dataRecebida)) {
        mensagem = "Você deve ser maior que 18 anos";
    }
    input.setCustomValidity(mensagem)
}
/**
 * 
 * @param {Date} data 
 * @returns {boolean} Maior que 18 anos.
 */
function maiorQue18(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())
    return dataMais18 <= dataAtual;
}