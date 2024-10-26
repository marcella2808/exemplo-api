document.addEventListener("DOMContentLoaded", async () => {
    const id = window.location.pathname.split("/").pop();

    const response = await fetch(`http://localhost:3000/clientes/get/${id}`);
    const cliente = await response.json();

    document.getElementById("clienteId").value = cliente._id;
    document.getElementById("nome").value = cliente.nome;
    document.getElementById("email").value = cliente.email;
    document.getElementById("cpf").value = cliente.cpf;
    document.getElementById("tel").value = cliente.tel;
    document.getElementById("rua").value = cliente.endereco.rua;
    document.getElementById("numero").value = cliente.endereco.numero;
    document.getElementById("cidade").value = cliente.endereco.cidade;
    document.getElementById("estado").value = cliente.endereco.estado;
    document.getElementById("cep").value = cliente.endereco.cep;

    document.getElementById("editarClienteForm").addEventListener("submit", async (e) => {
        e.preventDefault();

        const updatedCliente = {
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            cpf: document.getElementById("cpf").value,
            tel: document.getElementById("tel").value,
            endereco: {
                rua: document.getElementById("rua").value,
                numero: document.getElementById("numero").value,
                cidade: document.getElementById("cidade").value,
                estado: document.getElementById("estado").value,
                cep: document.getElementById("cep").value,
            }
        };

        try {
            const response = await fetch(`http://localhost:3000/clientes/update/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedCliente),
        });
        
        const result = await response.json();
        if (response.ok) {
            window.location.href = "http://localhost:3000/clientes/lista";   
        } else {
            document.getElementById("mensagem-erro").innerText = result.message;
        }
        } catch(err) {
            console.error("Erro:", err);
            document.getElementById("mensagem-erro").innerText = "Erro ao conectar ao servidor";
        }
    });
});
