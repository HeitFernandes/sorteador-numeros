 function sortear (){

    /* Criando a função para sortear pegando os elementos pelo document.getElementById */

    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    /* array para pegar os numeros sorteados */
    let sorteados = [];
    let numero;
    /* loop para a quantidade de numeros a serem sorteados */
    for(let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);
        sorteados.push(numero);
    }

    alert(sorteados);
        
 }

 function obterNumeroAleatorio(min, max){
    /* Implementando a função para gerar o numero aleatorio entre de e ate */
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }
