// script em JS para calculo da média do aluno, aula 2

function calcularMedia()
{
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

    var media = (nota1+nota2+nota3)/3;
    document.getElementById("media").textContent=media.toFixed(2);

    var situacaoElement = document.getElementById("situacao");

    if(media>=7.0)
    {
        situacaoElement.textContent="Aprovado";
        situacaoElement.className="aprovado";
    }
    else
    {
        var notaExame=parseFloat(prompt("Insira nota do Exame:"));
        if(notaExame>=7.0)
        {
            situacaoElement.textContent="Aprovado no Exame";
            situacaoElement.className="aprovado";
        }
        else
        {
            situacaoElement.textContent="Reprovado";
            situacaoElement.className="reprovado";
        }
    }

/* lógica 3 - uso de if/else com adição de um pop-up para inserir a nota do exame. Para qualquer valor de média abaixo de 7, uma janela pergunta a nota do exame e é considerado na média.

    if(media>=7.0)
    {
        document.getElementById("situacao").textContent="Aprovado";
    }
    else
    {
        var notaExame = parseFloat(prompt("Insira a nota do exame:"));
        if(notaExame>=7.0)
        {
            document.getElementById("situacao").textContent="Aprovado";
        }
        else
        {
            document.getElementById("situacao").textContent="Reprovado"
        }
    }
*/
/* lógica 2 - uso de if/else pra média maior ou igual a 6 recebe como "Aprovado", se menor como "Exame".

    if(media>=6.0)
    {
        document.getElementById("situacao").textContent="Aprovado";
    } 
    else
    {
        document.getElementById("situacao").textContent="Exame";
    }
*/
/* lógica 1 - onde se a média maior ou igula a 5 mostra como Aprovado, caso contrario mostra em Recuperação

    var situacao=(media>=5.0)? "Aprovado":"Recuperação";
    document.getElementById("situacao").textContent=situacao;
*/
    document.getElementById("notaExame").textContent=notaExame.toFixed(2); //codigo para mostrar o resultado do exame na pagina
}