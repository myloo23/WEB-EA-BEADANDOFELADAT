document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.querySelector("#chart-table tbody");
    const chartCanvas = document.getElementById("chartCanvas");
    let chartInstance;

    const data = [
        [10, 20, 30, 40, 50],
        [15, 25, 35, 45, 55],
        [5, 15, 25, 35, 45],
        [12, 22, 32, 42, 52],
        [7, 17, 27, 37, 47]
    ];

    function renderTable() {
        tableBody.innerHTML = "";
        data.forEach((row, index) => {
            let rowHTML = `<tr onclick="updateChart(${index})"><td>${index + 1}</td>`;
            row.forEach(value => {
                rowHTML += `<td>${value}</td>`;
            });
            rowHTML += "</tr>";
            tableBody.innerHTML += rowHTML;
        });
    }

    window.updateChart = function (rowIndex) {
        const rowData = data[rowIndex];

        if (chartInstance) {
            chartInstance.destroy();
        }

        chartInstance = new Chart(chartCanvas, {
            type: "line",
            data: {
                labels: ["A", "B", "C", "D", "E"],
                datasets: [{
                    label: `Sor ${rowIndex + 1}`,
                    data: rowData,
                    borderColor: "rgb(75, 192, 192)",
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    borderWidth: 3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                animation: {
                    duration: 1000,
                    easing: "easeInOutQuad"
                },
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: "black"
                        }
                    }
                }
            }
        });
    };

    renderTable();
});