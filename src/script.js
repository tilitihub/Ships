/*
File: script.js
Author: Tiliczki Tibor
Copyright: 2023, Tiliczki Tibor
Group: Szoft I/1/E
Date: 2023-03-27
Github: https://github.com/tilitihub/Ships.git
Licenc: GNU GPL
*/
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
quote.textContent = '"Az életünk olyan, mint a hajózás a folyón; nem mindig tudjuk, hogy hová tartunk, vagy merre vezet az utunk, de a fontos az, hogy élvezzük az utazást." - Joseph Conrad';