document.addEventListener("DOMContentLoaded", function () {
    const sidebarItems = document.querySelectorAll(".renewable-maps-sidebar li");
    const contentTitle = document.querySelector(".renewable-maps-content h3");
    const contentDescription = document.querySelector(".renewable-maps-content p");
    const mapEmbed = document.querySelector(".renewable-maps-embed");

    const mapsData = {
        "Primary energy consumption from renewable sources": {
            description: "About one-seventh of the world's primary energy comes from renewable technologies, including hydropower, solar, wind, geothermal, wave, tidal, and modern biofuels. This data, calculated using the 'substitution method,' accounts for inefficiencies in fossil fuel production. The share of renewables reflects total energy consumption across electricity, transport, and heating.",
            url: "https://ourworldindata.org/grapher/renewable-share-energy?time=2023&tab=map" // Replace with actual map link
        },
        "Renewable electricity generation": {
            description: "Hydropower remains the largest modern renewable energy source globally, while wind and solar power are growing rapidly. Charts display the breakdown of renewables, with a stacked area chart showing their relative contributions and a line chart highlighting trends over time.",
            url: "https://ourworldindata.org/grapher/modern-renewable-energy-consumption?tab=chart"
        },
        "Modern renewable energy generation by source": {
            description: "View hydroelectric power stations across different regions.",
            url: "https://ourworldindata.org/grapher/modern-renewable-prod?tab=chart"
        },
        "Share of electricity production from renewables": {
            description: "Renewable sources have become a major part of electricity generation, with their share continuing to grow. While transport and heating remain heavily reliant on fossil fuels, the electricity sector has made significant progress in adopting renewables, now accounting for nearly one-third of global production.",
            url: "https://ourworldindata.org/grapher/share-electricity-renewables?tab=map"
        }
    };

    sidebarItems.forEach(item => {
        item.addEventListener("click", function () {
            document.querySelector(".renewable-maps-sidebar .active").classList.remove("active");
            this.classList.add("active");
            
            const selectedEnergy = this.textContent;
            contentTitle.textContent = selectedEnergy;
            contentDescription.textContent = mapsData[selectedEnergy].description;
            mapEmbed.src = mapsData[selectedEnergy].url;
        });
    });
});
