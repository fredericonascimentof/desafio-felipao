//primeiramente o nome do héroi e a quantidade de experiência devem ser armazenados em variaveis distintas

let nomeDoHeroi = "Wolvenfaust"
let xpDoHeroi = 10500


//agora, uma nova nova variável deve ser criada  e uma estrutura de decisão deve ser utilizada 
//para que possa ser feita a classificação do nível do nosso herói.

let nivelDoHeroi

if (xpDoHeroi < 1000){
    nivelDoHeroi = "ferro"
}else if (xpDoHeroi === 1001 || xpDoHeroi <= 2000){
    nivelDoHeroi = "bronze"
}else if (xpDoHeroi === 2001 || xpDoHeroi <= 5000){
    nivelDoHeroi = "prata"
}else if (xpDoHeroi === 6001 || xpDoHeroi <= 7000){
    nivelDoHeroi = "ouro"
}else if (xpDoHeroi === 7001 || xpDoHeroi <= 8000){
    nivelDoHeroi = "platina"
}else if (xpDoHeroi === 8001 || xpDoHeroi <= 9000){
    nivelDoHeroi = "ascendente"
}else if (xpDoHeroi === 9001 || xpDoHeroi <= 10000){
    nivelDoHeroi = "imortal"
}else{
    nivelDoHeroi= "radiante"
}

//ao fim o programa deve informar ao usuário o ranking de seu personagem concatenando
// com o nome de seu personagem.

console.log("O herói " + nomeDoHeroi + "está no nível " + nivelDoHeroi)


