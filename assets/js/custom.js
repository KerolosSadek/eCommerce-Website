fetch("https://blissofearth.abanoubgeorge.info/assets/js/currencies.json")
.then(response => response.json())
.then(currencies => {
    const currencyMenu = document.getElementById("currencyMenu");
    currencyMenu.innerHTML = ""; // Clear the "Loading..." message
    for (const countryCode in currencies) {
        const currency = currencies[countryCode];
        const option = document.createElement("a");
        option.classList.add("dropdown-item");
        option.textContent = `${countryCode}: ${currency.symbol}`;
        currencyMenu.appendChild(option);
    }
})
.catch(error => {
    console.error(error);
});



