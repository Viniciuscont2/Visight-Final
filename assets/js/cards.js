async function fetchData() {
  const response = await fetch("http://localhost:3000/alimentos");
  const data = await response.json();

  return data;
}

async function infoCard() {
  const data = await fetchData();

  const objeto = data.map((item) => item.nome_alimento);
  const pesoL = data.map((item) => item.peso_liquido);

  const card1 = document.getElementById("cardAlimento");
  const card2 = document.getElementById("pesoAlimento");

  card1.innerHTML = objeto.join(', ');
  card2.innerHTML = pesoL.join(', ') + "kg";
}

infoCard();
