const validadores = {
    dataNascimento:  input => validaDataNascimento(input),
    cpf: input => validaCpf(input)
}

const tiposDeError = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const mensagensDeErro = {
    nome: {
        valueMissing: "O campo Nome não pode estar vazio"
    },
    email: {
        valueMissing: "O campo email não pode estar vazio",
        typeMismatch: "O email digitado não é válido"
    },
    senha: {
        valueMissing: "O campo de senha não pode estar vazio",
        patternMismatch: "A senha deve conter entre 6 e 12 caracteres deve conter 1 letra minúscula e 1 letra maiúscula e não conter símbolos."
    },
    dataNascimento: {
        valueMissing: "O campo de nascimento não pode estar vazio",
        customError: "Você deve ser maior do que 18 anos para se cadastrar"
    },
    cpf: {
        valueMissing: "O campo de CPF não pode estar vazio",
        customError: "O CPF digitado é inválido"
    }
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
    if(input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalido")
        input.parentElement.querySelector(".input-mensagem-erro").innerHTML = ''
    } else {
        input.parentElement.classList.add("input-container--invalido")
        input.parentElement.querySelector(".input-mensagem-erro").innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    }
}


function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = "";
    tiposDeError.forEach(erro => {
        if(input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })
    return mensagem;
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

function validaCpf(input) {
    const cpfFormatado = input.value.replace(/\D/g, "")
    let mensagem = ""
    if(!checaCpfRepetido(cpfFormatado)) {
        mensagem = "O cpf digitado não é válido"
    }
    input.setCustomValidity(mensagem)
}
/**
 * É sabido que a validação de CPF feita dessa forma não é a ideal, mas por fins de praticidade do curso será mantido assim.
 * @param {string} cpf 
 * @returns {boolean} CPF é válido ou não.
 */
function checaCpfRepetido(cpf) {
    const valoresRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    let cpfValido = true;

    valoresRepetidos.forEach(valor => {
        if(valor == cpf)
            cpfValido = false;
    })

    return cpfValido;
}