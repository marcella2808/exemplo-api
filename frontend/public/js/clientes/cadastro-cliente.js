document.getElementById("clienteForm").addEventListener("submit", async function(e) {
    e.preventDefault(); 
  
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
    const response = await fetch("http://localhost:3000/clientes/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clienteData)
    });

    const result = await response.json();

    if (response.ok) {
      window.location.href = "http://localhost:3000/clientes/lista"; 
    } else {
      document.getElementById("mensagem-erro").innerText = result.message;
    }
  } catch (err) {
    console.error("Erro:", err);
    document.getElementById("mensagem-erro").innerText = "Erro ao conectar ao servidor";
  }
});
  