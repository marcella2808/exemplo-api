document.getElementById("clienteForm").addEventListener("submit", async function(e) {
    e.preventDefault(); 
    
    // Cria um objeto com os dados do cliente a partir dos inputs do formulário
    const clienteData = {
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
    // Faz uma requisição POST
    const response = await fetch("http://localhost:3000/clientes/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Define o tipo de conteúdo como JSON
      },
      body: JSON.stringify(clienteData) // Converte os dados do cliente em uma string JSON
    });

    const result = await response.json(); // Converte a resposta do servidor em JSON

    // Caso o status de response esteja entre 200 e 299
    if (response.ok) {
      window.location.href = "http://localhost:3000/clientes/lista"; // Redireciona para a página de lista de clientes
    } else {
      document.getElementById("mensagem-erro").innerText = result.message; // Exibe mensagem de erro 
    }
  } catch (err) {
    console.error("Erro:", err);
    document.getElementById("mensagem-erro").innerText = "Erro ao conectar ao servidor";
  }
});
  
document.getElementById("cancel-btn").onclick = () => {
  window.location.href = "http://localhost:3000/inicio";
}