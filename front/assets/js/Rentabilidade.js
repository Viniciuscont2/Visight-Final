function calcularRentabilidade(rendimento, vendas) {
    if (vendas <= 0) {
        throw new Error("O valor das vendas deve ser maior que zero.");
    }
    
    const rentabilidade = ((rendimento + vendas) / vendas) * 100 - 100;
    return rentabilidade;
}

// Exemplo de uso
const rendimento = 500; // rendimento obtido
const vendas = 2000; // valor total das vendas

try {
    const rentabilidade = calcularRentabilidade(rendimento, vendas);
    console.log(`A rentabilidade é de ${rentabilidade.toFixed(2)}%`);
} catch (error) {
    console.error(error.message);
}