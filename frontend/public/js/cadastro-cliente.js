document.getElementById('clienteForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Evita o reload da página
  
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const tel = document.getElementById('tel').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const cep = document.getElementById('cep').value;
  
    const clienteData = {
      nome: nome,
      email: email,
      cpf: cpf,
      tel: tel,
      endereco: {
        rua: rua,
        numero: numero,
        cidade: cidade,
        estado: estado,
        cep: cep
      }
    };
  
    try {
      const resposta = await fetch('http://localhost:3000/clientes/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clienteData)
      });
  
      const resultado = await resposta.json();
  
      if (resposta.ok) {
        window.location.href = "http://localhost:3000/clientes/lista"; // redireciona para a página de lista de clientes
      } else {
        document.getElementById('mensagem').innerText = 'Erro ao criar cliente: ' + resultado.mensagem;
      }
    } catch (err) {
      console.error('Erro:', err);
      document.getElementById('mensagem').innerText = 'Erro ao conectar ao servidor';
    }
  });
  