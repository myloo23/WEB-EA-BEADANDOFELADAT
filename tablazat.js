document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.querySelector("#data-table tbody");
    const searchInput = document.getElementById("search");
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");
    const cityInput = document.getElementById("city");
    const emailInput = document.getElementById("email");

    let data = [
        { name: "Kiss Péter", age: 25, city: "Budapest", email: "peter.kiss@example.com" },
        { name: "Nagy Anna", age: 30, city: "Debrecen", email: "anna.nagy@example.com" },
        { name: "Tóth László", age: 22, city: "Szeged", email: "laszlo.toth@example.com" },
        { name: "Szabó Éva", age: 28, city: "Pécs", email: "eva.szabo@example.com" }
    ];

    function renderTable() {
        tableBody.innerHTML = "";
        data.forEach((item, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.age}</td>
                <td>${item.city}</td>
                <td>${item.email}</td>
                <td>
                    <button class="edit-btn" onclick="editEntry(${index})">✏️</button>
                    <button class="delete-btn" onclick="deleteEntry(${index})">🗑️</button>
                </td>
            `;
            tableBody.appendChild(row);
            row.classList.add("fade-in");
        });
    }

    function validateInputs() {
        if (!nameInput.value || !ageInput.value || !cityInput.value || !emailInput.value) {
            alert("Minden mezőt ki kell tölteni!");
            return false;
        }
        if (nameInput.value.length < 3 || nameInput.value.length > 50) {
            alert("A névnek 3 és 50 karakter között kell lennie!");
            return false;
        }
        if (ageInput.value < 1 || ageInput.value > 120) {
            alert("Az életkornak 1 és 120 között kell lennie!");
            return false;
        }
        return true;
    }

    window.addEntry = function () {
        if (!validateInputs()) return;

        data.push({
            name: nameInput.value,
            age: parseInt(ageInput.value),
            city: cityInput.value,
            email: emailInput.value
        });
        renderTable();
        resetInputs();
    };

    window.deleteEntry = function (index) {
        if (confirm("Biztosan törölni akarod ezt az elemet?")) {
            data.splice(index, 1);
            renderTable();
        }
    };

    window.editEntry = function (index) {
        const item = data[index];
        nameInput.value = item.name;
        ageInput.value = item.age;
        cityInput.value = item.city;
        emailInput.value = item.email;

        window.addEntry = function () {
            if (!validateInputs()) return;

            data[index] = {
                name: nameInput.value,
                age: parseInt(ageInput.value),
                city: cityInput.value,
                email: emailInput.value
            };
            renderTable();
            resetInputs();
            window.addEntry = addEntry;
        };
    };

    window.filterTable = function () {
        const filter = searchInput.value.toLowerCase();
        tableBody.querySelectorAll("tr").forEach(row => {
            row.style.display = row.textContent.toLowerCase().includes(filter) ? "" : "none";
        });
    };

    function resetInputs() {
        nameInput.value = "";
        ageInput.value = "";
        cityInput.value = "";
        emailInput.value = "";
    }

    renderTable();
});