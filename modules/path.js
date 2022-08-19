const path = require("path");

// Retorna o nome do arquivo atual
console.log(path.basename(__filename));

// Nome do diretorio atual
console.log(path.dirname(__filename));

// Nome da extensão do arquivo
console.log(path.extname(__filename));

// Cria Objeto Path
console.log(path.parse(__filename));

// Juntar caminhos de arquivo
console.log(path.join(__dirname, "test.html"));
