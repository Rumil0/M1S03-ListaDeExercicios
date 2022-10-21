// Solução padrão:
function somaTudo (...numeros){
    let acumulador = 0;
    for(let i = 0; i < numeros.length; i++){
        acumulador += numeros[i];
    }
    return acumulador;
}

// Desafio extra: 
const somaTudoExtra = (...numeros) => numeros.reduce((acc, cur) => acc+=cur);

const resultado = somaTudo(1, 2, 3, 4);
const resultadoExtra = somaTudoExtra(1, 2, 3, 4);
console.log(resultado);
console.log(resultadoExtra);
// resultado deve ser 10