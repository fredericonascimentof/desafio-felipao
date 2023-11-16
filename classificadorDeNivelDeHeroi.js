const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function obterEntrada(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, (resposta) => {
            resolve(resposta);
        });
    });
}

async function main() {
    let nomeDoHeroi;
    let xpDoHeroi;

    do {
        nomeDoHeroi = await obterEntrada("Digite o nome do herói: ");

        if (!nomeDoHeroi) {
            console.log("Nome inválido. Por favor, digite um nome válido.");
            continue;
        }

        do {
            const entradaXP = await obterEntrada("Digite o número de XP do herói: ");
            xpDoHeroi = parseInt(entradaXP);

            if (isNaN(xpDoHeroi)) {
                console.log("XP inválida. Por favor, digite um número válido.");
            }
        } while (isNaN(xpDoHeroi));

    } while (!nomeDoHeroi);

    let nivelDoHeroi;

    if (xpDoHeroi < 1000) {
        nivelDoHeroi = "Ferro";
    } else if (xpDoHeroi <= 2000) {
        nivelDoHeroi = "Bronze";
    } else if (xpDoHeroi <= 5000) {
        nivelDoHeroi = "Prata";
    } else if (xpDoHeroi <= 7000) {
        nivelDoHeroi = "Ouro";
    } else if (xpDoHeroi <= 8000) {
        nivelDoHeroi = "Platina";
    } else if (xpDoHeroi <= 9000) {
        nivelDoHeroi = "Ascendente";
    } else if (xpDoHeroi <= 10000) {
        nivelDoHeroi = "Imortal";
    } else {
        nivelDoHeroi = "Radiante";
    }

    console.log("O herói " + nomeDoHeroi + " está no nível " + nivelDoHeroi);

    rl.close();
}

main();
