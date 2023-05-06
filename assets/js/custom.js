// Start Fetch curreny Code

// fetch("https://main.abanoubgeorge.info/assets/js/currencies.json")
//     .then(response => response.json())
//     .then(currencies => {
//         const currencyMenu = document.getElementById("currencyMenu");
//         currencyMenu.innerHTML = ""; // Clear the "Loading..." message
//         for (const countryCode in currencies) {
//             const currency = currencies[countryCode];
//             const option = document.createElement("a");
//             option.classList.add("dropdown-item");
//             option.textContent = `${countryCode}: ${currency.symbol}`;
//             currencyMenu.appendChild(option);
//         }
//     })
//     .catch(error => {
//         console.error(error);
//     });


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



// fetch('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
//     .then(response => response.json())
//     .then(data => {
//         Object.keys(data).forEach(function (key) {
//             var currency = data[key].currencies[0];
//             var dropdownItem = document.createElement("a");
//             dropdownItem.classList.add("dropdown-item");
//             dropdownItem.innerHTML = '<img src="https://www.countryflags.io/' + data[key].cca2.toLowerCase() + '/shiny/16.png" height="15" width="15" style="margin-right: 10px;">';
//             document.getElementById("currencyMenu").appendChild(dropdownItem);
//         });
//     })
//     .catch(error => console.error(error));




