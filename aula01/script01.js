// Aqui comça o codigo que vai rodar as funções da página
        // captura do formulário
        const form = document.getElementById("cadastroForm");
        const resultDiv = document.getElementById("result");

        // Evento de envio do formulario
        form.addEventListener("submit", function (event) {
            event.preventDefault();

        // capturando valores dos campos
        const nome = document.getElementById("nome").value;
        const cargo = document.getElementById("cargo").value;
        const salario = document.getElementById("salario").value;

        // Exibindo dados na pagina
        resultDiv.innerHTML = `
        <h3>Funcionário Cadastrado: </3>
        <p><strong>Nome: </strong> ${nome}</p>
        <p><strong>Cargo: </strong> ${cargo}</p>
        <p><strong>Salario: </strong> ${salario}</p>
        `;
        });