const doc = {
    tbody: null
};
const state = {
    ships: []
}
window.addEventListener('load', () => {
    init();
});
function init() {
    doc.tbody = document.querySelector('#tbody');
    getShips();
}

function getShips() {
    let host = 'http://localhost:8000/';
    let endpoint = 'ships';
    let url = host + endpoint;
    fetch(url)
        .then((database) => database.json())
        .then((result) => {
            state.ships = result;
            render();
        });
}
function render() {
    let rows = '';
    state.ships.forEach((ship) => {
        console.log(ship.name);
        rows += `
            <tr>
            <td>${ship.name}</td>
            <td>${ship.length}</td>
            <td>${ship.price}</td>
            <td>${ship.person}</td>
            <td>${ship.trailer}</td>
            </tr>
        `;
    });
    doc.tbody.innerHTML = rows;
}
const quote = document.querySelector('#quote');
quote.textContent = '"Talán az emberek azért szeretnek a tengerre utazni, mert az emlékezteti őket arra, hogy az élet végtelen lehetőségeket rejt magában." - Columbus Kristóf';