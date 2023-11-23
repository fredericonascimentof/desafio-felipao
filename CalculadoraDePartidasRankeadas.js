// Definindo a função calcularRanking que recebe a quantidade de vitórias e derrotas como parâmetros
function calcularRanking(vitorias, derrotas){
// Calculando o saldo de vitórias subtraindo as derrotas
    var saldoRankeadas = vitorias - derrotas
// Variável para armazenar o nível do jogador
    var nivel 
    
// Bloco if-else para determinar o nível com base na quantidade de vitórias
    if (vitorias < 10){
        nivel = 'Ferro'
    } else if (vitorias >= 11 && vitorias <= 20){
        nivel = 'Bronze'
    } else if (vitorias >= 21 && vitorias <= 50){
        nivel = 'Prata'
    } else if (vitorias >= 51 && vitorias <= 80){
        nivel = 'Ouro'
    } else if (vitorias >= 81 && vitorias <= 90){
        nivel = 'Diamante'
    } else if (vitorias >= 91 && vitorias <= 100){
// Bloco vazio para o caso de vitórias entre 91 e 100
    } else if (vitorias >= 101){
        nivel = 'Imortal'
    } else {
// Bloco vazio para casos em que o número de vitórias é negativo
    }

 // Retornando um objeto contendo o saldo de vitórias e o nível do jogador
    return {saldoRankeadas: saldoRankeadas, nivel: nivel}
} 

// Definindo a quantidade de vitórias e derrotas
var qtdVitorias = 425
var qtdDerrotas = 7

// Chamando a função calcularRanking com as quantidades específicas e armazenando o resultado
var resultado = calcularRanking(qtdVitorias, qtdDerrotas)

// Exibindo no console o resultado formatado
console.log('O herói tem saldo de ' + resultado.saldoRankeadas + ' está no nível de ' + resultado.nivel)
