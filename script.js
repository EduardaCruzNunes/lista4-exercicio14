var valores = [];
var n = 0;
let parar = 'não';
var soma = 0;

while (parar != 'sim') {
    n = prompt('Digite um número:');
    parar = prompt('Para parar digite sim:');
    valores.push(n);
}

const somar = () => {
    let valoresNumber = valores.map(Number);

    for (let i = 0; i < valoresNumber.length; i++) {
        const element = valoresNumber[i];
        soma = soma + element;

    }
    return `Resultado da soma é: ${soma}`;
}
console.log(somar());