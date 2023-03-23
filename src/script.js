const quoteUrl = "https://api.quotable.io/random";
const apiUrl = "http://localhost:8080/ships";

async function getQuote() {
  const response = await fetch(quoteUrl);
  const data = await response.json();
  return data;
}

async function getShips() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data.ships;
}

function createShipRow(ship) {
  const row = document.createElement("tr");
  row.innerHTML
