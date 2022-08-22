var searchHistory = [];

function getItems() {
    var storedCities = JSON.parse(localStorage.getItem("searchHistory"));
    if (storedCities !== null) {
        searchHistory = storedCities;
    };

    for (i = 0; i < searchHistory.length; i++) {
        if (i === 10) {
            break;
        }

        cityListButton = $("<a>").attr({
            class: "city-list-item",
            href: "#"
        });
    }
}