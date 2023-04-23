console.log("Arquivo iniciado com sucesso!");

const query = process.argv[2];

if (!query) {
  console.log("Argumentos inválidos!");
} else {
  console.log(query);
}
