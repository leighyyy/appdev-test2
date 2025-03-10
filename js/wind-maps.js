document.addEventListener("DOMContentLoaded", function () {
    const sidebarItems = document.querySelectorAll(".wind-maps-sidebar li");
    const contentTitle = document.querySelector(".wind-maps-content h3");
    const contentDescription = document.querySelector(".wind-maps-content p");
    const mapEmbed = document.querySelector(".wind-maps-embed");

    const mapsData = {
        "Wind energy generation": {
            description: "This chart displays annual wind energy generation, including onshore and offshore farms. Though a relatively modern renewable source compared to hydropower, wind energy is rapidly expanding worldwide.",
            url: "https://ourworldindata.org/grapher/wind-generation?tab=map"
        },
        "Installed wind capacity": {
            description: "This chart illustrates global installed wind capacity, including onshore and offshore. Energy generation depends on installed capacity and generation time.",
            url: "https://ourworldindata.org/grapher/cumulative-installed-wind-energy-capacity-gigawatts?tab=chart"
        },
        "Share of primary energy that comes from wind": {
            description: "This chart shows the share of primary energy from wind, using the 'substitution method' to account for fossil fuel inefficiencies by converting non-fossil sources to their input equivalents.",
            url: "https://ourworldindata.org/grapher/wind-share-energy?tab=map"
        },
        "Share of electricity that comes from wind": {
            description: "This interactive chart shows the share of electricity that comes from wind.",
            url: "https://ourworldindata.org/grapher/share-electricity-wind?tab=map"
        }
    };

    sidebarItems.forEach(item => {
        item.addEventListener("click", function () {
            document.querySelector(".wind-maps-sidebar .active").classList.remove("active");
            this.classList.add("active");
            
            const selectedEnergy = this.textContent;
            contentTitle.textContent = selectedEnergy;
            contentDescription.textContent = mapsData[selectedEnergy].description;
            mapEmbed.src = mapsData[selectedEnergy].url;
        });
    });
});