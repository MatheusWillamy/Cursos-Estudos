const path = require("path");

//VEr o nome do arquivo atual
console.log(path.basename(__filename));

//nome do direotrio atual
console.log(path.dirname(__filename))

//Pegar a extensão do arquivo
console.log(path.extname(__filename))

//Criar um objeto Path
console.log(path.parse(__filename))

//Juntar caminho de arquivos
console.log(path.join(__dirname, 'teste'))