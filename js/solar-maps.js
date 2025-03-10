document.addEventListener("DOMContentLoaded", function () {
    const sidebarItems = document.querySelectorAll(".solar-maps-sidebar li");
    const contentTitle = document.querySelector(".solar-maps-content h3");
    const contentDescription = document.querySelector(".solar-maps-content p");
    const mapEmbed = document.querySelector(".solar-maps-embed");

    const mapsData = {
        "Solar energy generation": {
            description: "This interactive chart tracks annual solar energy generation. Although solar power is a newer large-scale renewable source compared to hydropower, it is rapidly expanding worldwide.",
            url: "https://ourworldindata.org/grapher/solar-energy-consumption?tab=map"
        },
        "Installed solar capacity": {
            description: "Solar energy output depends on installed capacity and generation time. This interactive chart displays global installed solar capacity.",
            url: "https://ourworldindata.org/grapher/installed-solar-pv-capacity?tab=map"
        },
        "Share of primary energy that comes from solar": {
            description: "This chart shows the share of primary energy from solar power, using the 'substitution method' to account for fossil fuel inefficiencies by converting non-fossil sources to their input equivalents.",
            url: "https://ourworldindata.org/grapher/solar-share-energy?tab=map"
        },
        "Share of electricity that comes from solar": {
            description: "This interactive chart shows the share of electricity that comes from solar power.",
            url: "https://ourworldindata.org/grapher/share-electricity-solar?tab=map"
        }
    };

    sidebarItems.forEach(item => {
        item.addEventListener("click", function () {
            document.querySelector(".solar-maps-sidebar .active").classList.remove("active");
            this.classList.add("active");
            
            const selectedEnergy = this.textContent;
            contentTitle.textContent = selectedEnergy;
            contentDescription.textContent = mapsData[selectedEnergy].description;
            mapEmbed.src = mapsData[selectedEnergy].url;
        });
    });
});