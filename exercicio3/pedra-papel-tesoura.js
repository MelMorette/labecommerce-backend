const dev = process.argv[2];

function getRndChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const pc = ['pedra', 'papel', 'tesoura'];
const result = getRndChoice(0,2);

if (!dev) {
  console.log("Argumentos inválidos!");
} else if (dev.toLowerCase() === "pedra" && pc[result] === "papel") {
  console.log(`Você escolheu pedra e o computador escolheu ${pc[result]}. Você perdeu!`);
} else if (dev.toLowerCase() === "pedra" && pc[result] === "tesoura") {
    console.log(`Você escolheu pedra e o computador escolheu ${pc[result]}. Você ganhou!`);
} else if (dev.toLowerCase() === "papel" && pc[result] === "tesoura") {
    console.log(`Você escolheu papel e o computador escolheu ${pc[result]}. Você perdeu!`);
} else if (dev.toLowerCase() === "papel" && pc[result] === "pedra") {
    console.log(`Você escolheu papel e o computador escolheu ${pc[result]}. Você ganhou!`);
} else if (dev.toLowerCase() === "tesoura" && pc[result] === "pedra") {
    console.log(`Você escolheu tesoura e o computador escolheu ${pc[result]}. Você perdeu!`);
} else if (dev.toLowerCase() === "tesoura" && pc[result] === "papel") {
    console.log(`Você escolheu tesoura e o computador escolheu ${pc[result]}. Você ganhou!`);
} else {
    console.log(`Você escolheu ${dev.toLowerCase()} e o computador escolheu ${pc[result]}. Empate!`);
} 
