document.addEventListener("DOMContentLoaded", function () {
    const sidebarItems = document.querySelectorAll(".geothermal-maps-sidebar li");
    const contentTitle = document.querySelector(".geothermal-maps-content h3");
    const contentDescription = document.querySelector(".geothermal-maps-content p");
    const mapEmbed = document.querySelector(".geothermal-maps-embed");

    const mapsData = {
        "Installed geothermal capacity": {
            description: "This interactive chart shows the installed capacity of geothermal energy across the world.",
            url: "https://ourworldindata.org/grapher/installed-geothermal-capacity?tab=map"
        },
        
    };

    sidebarItems.forEach(item => {
        item.addEventListener("click", function () {
            document.querySelector(".geothermal-maps-sidebar .active").classList.remove("active");
            this.classList.add("active");
            
            const selectedEnergy = this.textContent;
            contentTitle.textContent = selectedEnergy;
            contentDescription.textContent = mapsData[selectedEnergy].description;
            mapEmbed.src = mapsData[selectedEnergy].url;
        });
    });
});