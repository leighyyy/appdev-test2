document.addEventListener("DOMContentLoaded", function () {
    let currentChart = 0; // Track the currently displayed chart
    const charts = document.querySelectorAll(".chart-iframe"); // Get all iframes
    const chartTitle = document.getElementById("chart-title");
    const chartCount = document.getElementById("chart-count");
    const thumbnails = document.querySelectorAll(".chart-thumbnail"); // Get all sidebar thumbnails

    // Function to show the selected chart
    function showChart(index) {
        if (index < 0 || index >= charts.length) return; // Prevent out-of-bounds

        // Hide all charts
        charts.forEach(chart => chart.style.display = "none");

        // Show the selected chart
        charts[index].style.display = "block";

        // Update chart title and count
        chartTitle.innerText = charts[index].dataset.title;
        chartCount.innerText = `Chart ${index + 1} of ${charts.length}`;

        // Update the current chart index
        currentChart = index;
    }

    // Function to navigate charts using next/prev buttons
    function changeChart(direction) {
        let newIndex = currentChart + direction;
        if (newIndex >= 0 && newIndex < charts.length) {
            showChart(newIndex);
        }
    }

    // Attach event listeners to navigation buttons
    document.getElementById("prev-btn").addEventListener("click", () => changeChart(-1));
    document.getElementById("next-btn").addEventListener("click", () => changeChart(1));

    // Attach event listeners to sidebar thumbnails
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => showChart(index));
    });

    // Initialize the first chart
    showChart(currentChart);
});
