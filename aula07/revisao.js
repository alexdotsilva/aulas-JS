// 1 - Tipos de Dados

// 1.1 - Tipos Numericos
var x = 35; // atribuição na forma comum 
var x = 0o543; // notação octal que equivale a 357
var x = 0xBF // notação hexadecimal que equivale a 191

// 1.2 - Ponto flutuante
var x = 12.3; // declarado na forma comum 
var x = 4.238e2; // declarado como potencia de 10 que equivale a 423,8

// 1.3 - Booleano
// True para 1 e false para 0 quando isso for necessario
var a = 14;
var b = 42;
var tr = (a == 14);
var fl = (a == b);
// Neste caso tr irá conter o valor true e fl o valor false
var int1 = tr+1;
var int2 = fl+1; 
//a variavel int irá conter o valor 2 (true + 1 ), pois true é automaticamente convertido para 1 e int2 irá conter o valor 1 (false + 1), pois false é convertido para 0.

// 1.4 - Indefinido
var marvin;
windows.alert(marvin);
// Quando tentamos imprimir a variavel marvin na janela de alertar será impresso "undefined" pois não há nenhum valor associado a ela.
var text = "";
// O mesmo não ocorre com o caso acima, pois essa varialve contem uma sequencia de caracteres nula e nada será impresso. 
null
var vazio = null
var ind;
var res = (vazio == ind);
var resl = (vazio === ind);
// Quando executado a variavel res terá o valor true e resl terá o valor false. E se tentamos imprimir a variavel vazio, teremos null impresso.

// 1.5 - Strings 
var str = "Eu sou uma string!";
var str2 = 'Eu sou uma string';
// Declaração de strings primitivas
var str3 = new String("Outra string");
// Acima um objeto string declarado de forma explicita não há diferença nenhuma entre esse dois tipos no que se refere ao seu uso.

// 1.6 - Arrays
var arr = new Array();
// por ser um objeto podemos usar o "new" em sua criação 
var arr = new Array(elem1, elem2, elem3);
// Dessa forma criamos um array já iniciado com elementos.
var arr = new [1, 2, 3, 4];
//Outra forma é iniciar uma array com elementos sem usar o "new"
var arr = new Array(4);
// Desssa forma criamos um arra vazio de 4 posições.
arr[0] = "Até mais obrigado pelo peixes";
arr[1] = 42;
document.write(arr[1]);
//Imprime o conteudo de arr[1]

// 2 - Operadores 
// 2.1 - aritméticos

+ // Adição
- // Subtração
* // Multiplicação
/ // Divisão
% // Modulo (resto da divisão inteira)
- // Inversão de sinal
++ // Incremento
-- // Decremento

//Exemplo 
x+y 
x-y
x*y
x/y
x%y
-y
x++ /*ou*/ ++x
x-- /*ou*/ --x

// 2.2 - comparação 
== // Igual a 
!= // Diferente de
=== // Idêntico a (igual e do mesmo tipo)
!== // Não Idêntico acima
> // Maior que 
>= // Maior ou igual a
< //Menor que
<= // Menor ou igual a

// exemplo
(x == y)
x != y
x === y
x!== y
x > y
x >= y
x < y
x <= y

// 2.3 - Bit a Bit
& // E (and)
| // Ou (or)
^ // Ou exclusivo (xor)
~ // Not
>> // Deslocamneto à direita (com propagação de sinal)
<< // Deslocamneto à esquerda (com preenchimento com zero)
>>> // Deslocamneto à direita (com preenchimento com zero)

// 2.4 - Atribuição 
= x = 2 
+= x += 3 | x = x + y
-= x -= y | x = x - y
*= x *= y | x = x * y
/= x /= y | x = x / y
%= x %= 3 | x = x % y
&= x &= 3 | x = x & y

// 2.5 - Logicos
&& /*função e logico*/ | x&& y
|| /*função ou logico*/ x || y
! /*função not logica*/ !x

// 3 - Estruturas de controles
if ... else 
// Exemplo 1
var a = 12;
var b = 5;
if (a == b){
    windows.alert("12 é igual a 5?!?!");
    } 
else{
    windows.alert("a é diferente de b");
    }
// No caso acima a frase escrita seria "a é diferente de b"

// exemplo 2
var a = 10;
if (a < 6) {
    windows.alert("a menor que 6");
} else if (a > 6){
    windows.alert("a maior que 6");
} else{
    windows.alert("se a não é maior nem menor que 6, a é 6!");
}

// exemplo 3
var a = 8;
(a >= 5 ? windows.alert("yes"): 
windows.alert("no"));
// Isso equivale ao codigo 
var a = 5;
if (a >=5){
    windows.alert("yes");
}else {
    windows.alert("no");
}
Switch ... case 
exemplo 
var marvin = "robot";
Switch(marvin){
case "humano":
document.write("Olá carbon!");
break;
case "alien":
document.write("Eu não sou alien!");
break;
case "robot":
document.write("Emergencia, 
socorro!");
break;
default:
document.write("Qual é o seu nome?");
break;
}
while
exemplo
var cont = [5,2]; 
while ((cont [0]+cont[1] < 15 )){
cont[0]+=1;
cont[1]+=2;
document.write('cont0 = 
'+cont[0]+'cont1 = '+cont[1]);
}
// Com o uso do while, no primeiro teste, 
con[0]+cont[1] vale 7;
do while
exemplo 
var cont = [5,2];
do{
cont[0]+=1;
cont[1]+=2;
document.write('cont0 = 
'+cont[0]+'cont1 = '+cont[1]); 
} while ((cont [0]+cont[1] < 15 ))
// Com o uso do while, no primeiro teste, 
con[0]+cont[1]
// Já valera 10, e os contadores já terão 
sido impresso uma vez
// pois o laço já foi executado a primeira 
vez antes do teste;
for 
exemplo
var cont = [5,2,3];
for(var i=0 ; i < 3 ; i++){
cont[i]++;
}
// Ao final do laço cada elemento do vetor 
cont foi incrementado em 1
for ... in
var doc = document;
for (var prop in doc){
document.write(prop+"br/>");
}
// Esse laço automaticamente itera pelas 
propriedades do objeto
//No caso ele listara todas as 
propriedades do objeto document
// responsavel pelo controle do documento 
exibido na tela
// Se olhar com cuidado encontrará nessa 
lista o proprio método
//write que usamos para imprimir no 
documento com document.write
function incArray(Array,valor){
for(item in array){
Array[item] +=valor;
}
return array;
}
// Pra invocar essa função depois basta 
usar incArray (arg1, arg2)
var areaTri = net Function("a", "h", 
"return (b+h)/2;");
//a função acima calcula a area de um 
triagulo dadas sua base
// altura para ivocá-las basta usar 
areaTri(arg1,arg2)
========================================
======================
// Uma função ficticia para calculo de uma 
consumo de combustivel 
function calc_consumo(distancia){
return distancia/(15/this.motor);
}
// Agora atribuimos a função, sem os 
argumentos, para a 
// propriedade consumo. Considerando o 
objeto já instaciado
// do exemplo anterior
carro.consumo = calc_consumo;
// PRonto! Já podemos invoca-la fazendo:
var gas = carro.consumo(200);
// Calculamos quanto o carro gastaria de 
// combustivel em 200 kilomentros
// Vamos elaborar mais o exemplo do carro, 
mas dessa vez usando prototype
function calc_consumo(distancia){
return distancia/(15/this.motor);
}
// Classe que representa um carro 
function Carro(modelo, marca, ano, 
motor){
this.modelo = modelo;
this.marca = marca;
this.ano = Ano;
this.motor = Motor;
}
carro.prototype.rodas = 4;
carro.prototype.consumo = calc_consumo;
// AGora a classe possui uma cosntante que 
informa 
// o numero de rodas e o metodo consumo 
em seu 
// prototype
var car1 = new carro["G800", "Gurgel" , 
1976 , 1.0];
var car2 = new carro["147", "Fiat", 1984
, 2.0];
// Podemos acessar agora tanto a 
constante rodas 
// quanto o metodo consumo 
if (car1.rodas == 4) window.alert("ainda 
bem!");
var gas = car2.consumo(180);
// e o mais importante é que ambas estão 
acessando 
// apenas uma unica constante e um unico 
metodo 
// na memoria
var arr = new Object();
arr["nome"] = "Zaphod Beeblebrox";
arr["cargo"] = "Presidente do Universo";
window.alert(arr["nome"]);
// Irá mostrar uma mensagem contendo:
// "Zaphod Beeblebrox"
// Note que não há nenhuma diferença se 
fizermos:
window.alert(arr.nome)
// Exceto que a string usada como índice 
no modo []
// pode ser manipulada em tempo de 
execução