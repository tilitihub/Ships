// Fetch adatok lekérdezése a REST API-ból
fetch('/ships')
    .then(response => response.json())
    .then(data => {
        // Tömb létrehozása a lekért adatokból
        let ships = data.ships;

        // Táblázat generálása az adatokból
        let tableBody = document.getElementById('table-body');
        ships.forEach(ship => {
            let row = document.createElement('tr');
            let nameCell = document.createElement('td');
            nameCell.innerText = ship.name;
            let lengthCell = document.createElement('td');
            lengthCell.innerText = ship.length;
            let priceCell = document.createElement('td');
            priceCell.innerText = ship.price;
            let personCell = document.createElement('td');
            personCell.innerText = ship.person;
            let trailerCell = document.createElement('td');
            trailerCell.innerText = ship.trailer;
            row.appendChild(nameCell);
            row.appendChild(lengthCell);
            row.appendChild(priceCell);
            row.appendChild(personCell);
            row.appendChild(trailerCell);
            tableBody.appendChild(row);
        });
    });

// Idézet megjelenítése
let quote = document.getElementById('quote');
quote.innerHTML = 'Az élet nem vár arra, hogy tökéletes legyél, csak arra, hogy éld. - Sidonie Gabrielle Colette';
