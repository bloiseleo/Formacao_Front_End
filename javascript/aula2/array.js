"use strict"
const empresas = [
    { nome:'Samsung',valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
    { nome: 'Microsoft',valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel',valorDeMercado: 117, CEO:'Brian Krzanich', anoDeCriacao: 1968},
    { nome: 'Facebook',valorDeMercado: 383, CEO:'Mark Zuckerberg', anoDeCriacao: 2004},
    { nome: 'Spotify',valorDeMercado: 30, CEO:'Daniel Ek', anoDeCriacao: 2006  },
    {nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}
];

const empresasDepois2000 = empresas.filter(empresa => empresa.anoDeCriacao > 2000)
console.log("Empresas depois do ano 2000:")
console.table(empresasDepois2000)

const empresaMaisCeo = empresas.map(empresa => `Nome: ${empresa.nome}; CEO: ${empresa.CEO}`)
console.log('Empresa e CEO:')
console.table(empresaMaisCeo)

const valorEmpresasSomado = empresas.reduce((valorSomado, empresa) => valorSomado + empresa.valorDeMercado, 0)

console.log(`O valor de todas as empresas somado é: R$ ${valorEmpresasSomado}`)