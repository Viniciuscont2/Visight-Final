// Primeiro gráfico
const ctx = document.getElementById('line-chart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [{
            label: 'Publico Ativo',
            data: [300, 500, 400, 600, 700, 800],
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Segundo gráfico
const ctx2 = document.getElementById('line-chart-2').getContext('2d');

function calcularRentabilidade(rendimento, vendas) {
    if (vendas <= 0) {
        throw new Error("O valor das vendas deve ser maior que zero.");
    }
    
    const rentabilidade = ((rendimento + vendas) / vendas) * 100 - 100;
    return rentabilidade;
}

// Exemplo de uso
const rendimentos = [500, 600, 700, 800, 900, 1000]; // rendimento obtido
const vendas = [2000, 3000, 4000, 5000, 6000, 7000]; // valor total das vendas

try {
    const rentabilidades = [];
    for (let i = 0; i < rendimentos.length; i++) {
        const rentabilidade = calcularRentabilidade(rendimentos[i], vendas[i]);
        rentabilidades.push(rentabilidade);
    }
    
    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [{
                label: 'Rentabilidade',
                data: rentabilidades,
                borderColor: 'rgb(54, 162, 235)',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
} catch (error) {
    console.error(error.message);
}