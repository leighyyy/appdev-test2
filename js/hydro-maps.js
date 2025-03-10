document.addEventListener("DOMContentLoaded", function () {
    const sidebarItems = document.querySelectorAll(".hydro-maps-sidebar li");
    const contentTitle = document.querySelector(".hydro-maps-content h3");
    const contentDescription = document.querySelector(".hydro-maps-content p");
    const mapEmbed = document.querySelector(".hydro-maps-embed");

    const mapsData = {
        "Hydropower generation": {
            description: "Hydroelectric power has been a major low-carbon energy source for over a century and remains the largest renewable energy source, excluding traditional biomass. It accounts for about half of global renewable generation, though its contribution varies by country.",
            url: "https://ourworldindata.org/grapher/hydropower-consumption?tab=map"
        },
        "Share of primary energy that comes from hydropower": {
            description: "The chart illustrates the share of primary energy from hydropower, using the 'substitution method' to account for fossil fuel inefficiencies by converting non-fossil sources into their equivalent primary energy input.",
            url: "https://ourworldindata.org/grapher/hydro-share-energy?tab=map"
        },
        "Share of electricity that comes from hydropower": {
            description: "This interactive chart shows the share of electricity that comes from hydropower.",
            url: "https://ourworldindata.org/grapher/share-electricity-hydro?tab=map"
        },
        
    };

    sidebarItems.forEach(item => {
        item.addEventListener("click", function () {
            document.querySelector(".hydro-maps-sidebar .active").classList.remove("active");
            this.classList.add("active");
            
            const selectedEnergy = this.textContent;
            contentTitle.textContent = selectedEnergy;
            contentDescription.textContent = mapsData[selectedEnergy].description;
            mapEmbed.src = mapsData[selectedEnergy].url;
        });
    });
});
