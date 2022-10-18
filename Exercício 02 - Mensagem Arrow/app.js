/* Primeira parte do exercício
const mensagemOla = () => {return console.log("Olá, Mundo!");};

mensagemOla();
*/
// Segunda parte do exercício
const mensagemOla = (name) => {return `Olá, ${name}!`;};

console.log(mensagemOla ("Murillo"));

function onClick (){
    let name = document.getElementById("nome").value;
    document.getElementById("saida").innerHTML = mensagemOla (name);
}