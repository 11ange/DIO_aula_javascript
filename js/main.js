/*
var nome = "Luis Roberto";
var idade = 46;
alert(nome + " tem " + idade + " anos"); // vai mostrar "Luis Roberto tem 46 anos"
*/

// JS é linguagem de tipagem dinâmica, ou seja, não precisa declarar o tipo da variável

/*
var idade = "46";
var idade2 = "22";
alert(idade + idade2)   // nesse caso mostra 4622, pois entende como sendo dois strings

var idade = 46;
var idade2 = 22;
alert(idade + idade2)   // nesse caso mostra a soma de 46+22
*/
/*
var nome = "Luis Roberto";
var idade = 46;
var idade2 = 22;
var frase = "Japão é o melhor time do mundo"

// O console.log pode ser visto no navegador: Botão direito/inspecionar, entrando na aba Console
console.log(nome);
console.log(idade + idade2);
console.log(frase);
console.log(frase.replace("Japão","Brasil"));
alert(frase.replace("Japão","Brasil"));
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());
*/

/*
var lista =["maçã", "pera","laranja"];
console.log(lista);
console.log(lista[1]);
//alert(lista[2]);
//lista.push("uva");  //push adiciona valor na última posição
lista.push("uva","kiwi","banana");  //push adiciona valor(es) na última posição
console.log(lista);
console.log(lista.reverse());   // reverse inverte a ordem da lista
lista.pop();  //pop remove o valor da última posição (só permite remover 1 elemento)
console.log(lista);
lista.shift();  //shift remove o valor da primeira posição (só permite remover 1 elemento)
console.log(lista);
console.log(lista.length);  // length mostra o tamanho da lista
//console.log(lista.toString());  //converte para string a lista
console.log(lista.join(" e ")); // também converte pra string como o toString(), mas permite trocar o separador
*/

/*
var fruta={nome:"Maçã", cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor)
*/
/*
var frutas=[{nome:"Maçã", cor:"vermelha"},{nome:"Uva", cor:"roxa"},{nome:"Banana", cor:"amarela"}];
console.log(frutas);
console.log(frutas[1].nome);
alert(frutas[2].cor)
*/

/*
var idade = prompt("Qual a sua idade?");
if (idade>=18){
    alert("Maior de idade");
} else {
    alert("Menor de idade");
}
*/

/*
var contador = 0;
while(contador<=5){
    console.log(contador);
    contador = contador + 1;    // ou contador++
}
*/

/*
for(contador = 10 ; contador <= 15 ; contador++){
    console.log(contador);
}
*/

/*
var d = new Date();
console.log(d);
console.log(d.getFullYear());
console.log(d.getUTCHours());
console.log(d.getHours());
console.log(d.getTime());
*/

/*
function soma(n1, n2){
    return n1 + n2;
}
function trocaNome(frase, nome, novoNome){
    return frase.replace(nome, novoNome);
}
console.log(soma(3,4));
console.log(trocaNome("Vai Japão", "Japão", "Brasil"));
*/

/*
function botao(){
    alert("Obrigado por clicar!");
}
*/
function clicou(){
    document.getElementById("agradecimento");
    console.log(document.getElementById("agradecimento"));
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>"
}

function redirecionar(){
    window.open("https://www.estadao.com.br");            //abre uma janela nova no navegador
    //window.location.href = "https://www.estadao.com.br";    //abre na mesma janela no navegador
}

function trocaMouse(elemento){
    //document.getElementById("mouseaqui").innerHTML = "Você passou o mouse aqui";
    elemento.innerHTML = "Você passou o mouse aqui";
}

function voltaMouse(elemento){
    //document.getElementById("mouseaqui").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada!");
}

function mudaSelect(elemento){
    console.log(elemento.value);
}