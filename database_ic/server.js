const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Configuração da conexão com o banco de dados
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // Coloque sua senha do MySQL aqui, se houver
  database: "bdvisight",
});

// Conectar ao banco de dados
db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    process.exit(1); // Finaliza o processo se a conexão falhar
  }
  console.log("Conectado ao banco de dados!");
});

// Rota para listar os itens da tabela info_alimentos
app.get("/alimentos", (req, res) => {
  const sql = `
    SELECT 
      id_alimentos, 
      nome_alimento, 
      COALESCE(peso_bruto, 0) AS peso_bruto, 
      COALESCE(peso_liquido, 0) AS peso_liquido, 
      COALESCE(fator_correcao, 0) AS fator_correcao, 
      COALESCE(rendimento_kg, 0) AS rendimento_kg, 
      COALESCE(descarte_kg, 0) AS descarte_kg, 
      COALESCE(custo_kg, 0) AS custo_kg, 
      COALESCE(custo_unitario, 0) AS custo_unitario, 
      COALESCE(prejuizo, 0) AS prejuizo, 
      COALESCE(faturamento, 0) AS faturamento, 
      COALESCE(receita, 0) AS receita, 
      COALESCE(qnt_vendas, 0) AS qnt_vendas, 
      COALESCE(preco_cobrado, 0) AS preco_cobrado 
    FROM info_alimentos
  `;
  console.log("Executando SQL:", sql); // Log da consulta
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Erro na consulta:", err); // Log do erro
      return res.status(500).json({ error: err.message });
    }

    // Verifica se há resultados
    if (results.length === 0) {
      return res.status(404).json({ message: "Nenhum alimento encontrado." });
    }

    res.json(results); // Retorna os dados como JSON
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Dados sendo armazenados em http://localhost:${port}/alimentos`);
});
