
function clicado(){
    document.getElementById("Agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}

function redirecionar(){
    window.open("https://github.com/");
}
 
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse</b>"
    elemento.innerHTML = "<b>Obrigado por passar o mouse</b>";
    //alert("Trocar texto");
}
function voltar(elemento){
    elemento.innerHTML = "<b>passe o mouse aqui</b>";
    //document.getElementById("mousemove").innerHTML = "<b>passe o mouse aqui</b>";
}

function load(){
    alert("pagina carregada");
}
function funcaochange(elemento){
    console.log(elemento.value);
}

/*
function soma(n1, n2){
    return n1 + n2;
}
*/

/*
function ValidaIdade(idade){
    var validar 
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    };
    return validar;
}
//var idade = prompt("Qual sua idade");
console.log(ValidaIdade(idade));
*/

/*
alert(soma(5, 10));
*/

/*
var d = new Date();
alert(d.getMonth());
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
alert(d.getSeconds());
*/

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
};
*/

/*
var count = 0;
while (count < 5){
    console.log(count);
    count ++;
};

*/

/*
var idade = prompt("qual é a sua idade");

if(idade >= 18) {
    alert("maior de idade");
}else{
    alert("menor de idade");
};

*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"Uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

/*
var lista = ["maça", "pêra", "laranja"];
lista.push("Uva");
lista.pop();
console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista.join(" | "));
*/

/*
var nome = "ederson paulino";
var idade = 21;
var idade2 = 10;
var frase = "Japão melhor time";
alert(nome + " tem " + idade + " idade");
alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.toLowerCase());
*/

