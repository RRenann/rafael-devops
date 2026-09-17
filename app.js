const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Olá professor Rafael');
});

// Só sobe o servidor se este arquivo for executado diretamente
// (evita conflito de porta quando o Jest importa o app para os testes)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

module.exports = app;
