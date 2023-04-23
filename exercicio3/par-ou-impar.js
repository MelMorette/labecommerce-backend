const typeNum = process.argv[2];
const number = process.argv[3];

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const result = getRndInteger(0, 10) + +number;

if (!typeNum || !number) {
  console.log("Argumentos inválidos!");
} else if (result % 2 === 0 && typeNum.toLowerCase() === "par") {
  console.log(`Você escolheu par e o computador escolheu impar. O resultado foi ${result}. Você ganhou!`);
} else if (result % 2 === 0 && typeNum.toLowerCase() === "impar") {
    console.log(`Você escolheu impar e o computador escolheu par. O resultado foi ${result}. Você perdeu!`);
} else if (result % 2 === 1 && typeNum.toLowerCase() === "par") {
    console.log(`Você escolheu par e o computador escolheu impar. O resultado foi ${result}. Você perdeu!`);
} else {
    console.log(`Você escolheu impar e o computador escolheu par. O resultado foi ${result}. Você ganhou!`);
} 
