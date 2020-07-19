// Carregamento de módulos
   const express = require('express');
   const app = express();
   const path = require('path');

// Configuração de rotas
   const main = require('./routes/main');

// Configuração do caminho absoluto
   app.use(express.static(path.join(__dirname, 'public')));




// Rotas
   app.use('/', main);



// Geração do Servidor
   const PORT = 3000;
   app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}!`));
   