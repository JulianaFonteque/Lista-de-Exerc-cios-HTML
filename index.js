

function somaDivisores(){
    let number = prompt("Digite um numero:");
    let result = 0;
    let operation = '';
    if(!Number(number)){
        alert("Digite um número válido")
    }
    else{
        for(let i = 0; i < number; i++) {
            if(number%i==0){
                result += i;
                operation += i + ' + '
            }
        }
        operation = operation.slice(0,-2)
        alert("O resultado é: " + result + " pois: \n " + operation + " é igual a:  "  + result);
    
    }
}

function calcularDistanciaEuclidiana() {
    let x1 = parseFloat(prompt("Digite o valor da coordenada X do ponto A:"));
    let y1 = parseFloat(prompt("Digite o valor da coordenada Y do ponto A:"));
    let x2 = parseFloat(prompt("Digite o valor da coordenada X do ponto B:"));
    let y2 = parseFloat(prompt("Digite o valor da coordenada Y do ponto B:"));

    if (!isNaN(x1) && !isNaN(y1) && !isNaN(x2) && !isNaN(y2)) {
        let result = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
        alert("A distância euclidiana entre os dois pontos é: " + result);
    } else {
        alert("Digite números válidos.");
    }
}

function contarPalavras(){
    let frase = prompt("Digite uma frase").toLowerCase();
    let palavras = frase.split(" ");
    let palavrasUnicas = [];
    let contagem = [];
    let result = '';
    for(let i = 0; i < palavras.length; i++){
        if(palavrasUnicas.includes(palavras[i])){
            contagem[palavrasUnicas.indexOf(palavras[i])] +=1;
        }
    
    else{
        palavrasUnicas.push(palavras[i]);
        contagem.push(1);
    }
}
for(let i = 0; i< palavrasUnicas.length; i++){
    result += palavrasUnicas[i] + ' (' + contagem[i] + '), ';
}
result = result.slice(0,-2)
alert("Resultado: " + result);

}

function determinarDimensaoMatriz() {
    const entrada = prompt("Digite a matriz separando as linhas com ';' e as colunas com espaço em branco (por exemplo, '1 4 6 8; 3 5 6 7; 1 3 2 4'):");

    // Dividir as linhas da matriz com base no caractere ';'
    const linhas = entrada.split(';');

    // Determinar o número de linhas e colunas
    const numLinhas = linhas.length;
    const numColunas = linhas[0].split(' ').length;

    const resultado = `Essa é uma matriz de dimensão ${numLinhas} x ${numColunas}.`;

    alert(resultado);
}



function calcularFibonacci() {
    const n = parseInt(prompt("Digite um número inteiro positivo N:"));

    if (!isNaN(n) && n >= 0) {
        let resultado = "Resultado: ";
        let a = 0, b = 1;

        for (let i = 0; i < n; i++) {
            resultado += a + (i < n - 1 ? ", " : "");
            const temp = a + b;
            a = b;
            b = temp;
        }

        alert(resultado);
    } else {
        alert("Digite um número inteiro positivo válido.");
    }
}




