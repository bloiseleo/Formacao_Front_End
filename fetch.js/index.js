const apiUrl = "http://localhost:5000/clientes";
const clientes = [
    {
        nome: "Teste",
        cpf: "18208015784"
    }
]

const listaClientes = document.querySelector("#clientes");

fetch(apiUrl)
.then(res => {
    console.log(res)
})
.catch(err => {
    console.error(err)
})
clientes.forEach(cliente => {
    listaClientes.innerHTML += `
        <li>
            nome: ${cliente.nome}
            cpf: ${cliente.cpf}
        </li>
    `
})