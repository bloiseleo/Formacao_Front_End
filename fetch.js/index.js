const apiUrl = "http://localhost:5000/clientes";
const clientes = [
    {
        nome: "Teste",
        cpf: "18208015784"
    }
]

const listaClientes = document.querySelector("#clientes");

fetch(apiUrl)
.then(res => res.json())
.then(res => res.forEach(cliente => clientes.push({
    nome: cliente.nome,
    cpf: cliente.cpf
})))
.then(() => {
    clientes.forEach(cliente => {
        listaClientes.innerHTML += `
            <li>
                nome: ${cliente.nome}
                cpf: ${cliente.cpf}
            </li>
        `
    })
})
.catch(err => {
    console.error(err)
})

