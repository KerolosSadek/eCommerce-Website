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


// Button to top

window.addEventListener("scroll", function () {
    var btnTop = document.getElementById("btn-top");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
});

document.getElementById("btn-top").addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

