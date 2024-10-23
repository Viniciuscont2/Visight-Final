// Função para buscar os dados do servidor
async function fetchData() {
  const response = await fetch("http://localhost:3000/alimentos");
  const data = await response.json();

  return data;
}

// Função para configurar e renderizar o gráfico
async function renderChart() {
  const data = await fetchData();

  const labels = data.map((item) => item.nome_alimento);
  const receitas = data.map((item) => item.prejuizo);
  const pesoB = data.map((item) => item.peso_bruto);
  const pesoL = data.map((item) => item.peso_liquido);

  const ctx1 = document.getElementById("line-chart").getContext("2d");
  const ctx2 = document.getElementById("line-chart-2").getContext("2d");

  // Gráfico de barras para Receita
  new Chart(ctx1, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Prejuízo",
          data: receitas,
          backgroundColor: ["rgb(255, 99, 132)", "rgb(255, 205, 86)"],
          barPercentage: 0.7,
          categoryPercentage: 0.7,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  // Gráfico de barras para Custos e Prejuízo
  new Chart(ctx2, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Peso liquido",
          data: pesoL,
          backgroundColor: "rgba(75, 192, 192)",
        },
        {
          label: "Peso bruto",
          data: pesoB,
          backgroundColor: "rgba(54, 162, 235, 1)",
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

// Chamar a função para renderizar os gráficos
renderChart();
