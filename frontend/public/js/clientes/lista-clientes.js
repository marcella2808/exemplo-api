async function fetchClientes() {
    try {
        const response = await fetch('http://localhost:3000/clientes/get');
        const clientes = await response.json();

        const table = document.getElementById('clientesTable');

        clientes.forEach(cliente => {
            const row = table.insertRow();
            row.insertCell(0).innerText = cliente.nome;
            row.insertCell(1).innerText = cliente.email;
            row.insertCell(2).innerText = cliente.cpf;
            row.insertCell(3).innerText = cliente.tel;
            row.insertCell(4).innerText = `${cliente.endereco.rua}, ${cliente.endereco.numero} - ${cliente.endereco.cidade}, ${cliente.endereco.estado} - ${cliente.endereco.cep}`;
            
            const actionsCell = row.insertCell(5);
            const editButton = document.createElement('button'); 
            editButton.innerText = 'Editar';
            editButton.className = 'editar-btn';
            editButton.onclick = () => {
                window.location.href = `http://localhost:3000/clientes/editar/${cliente._id}`;
            };
            actionsCell.appendChild(editButton);
        });
    } catch (error) {
        console.error('Erro:', error);
    }
}

fetchClientes();