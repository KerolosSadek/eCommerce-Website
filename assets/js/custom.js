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



// Payment Page

const paymentForm = document.getElementById("payment-form");
const paymentMethodSelect = document.getElementById("payment-method");
const paypalForm = document.getElementById("paypal-form");
const stripeForm = document.getElementById("stripe-form");

paymentMethodSelect.addEventListener("change", () => {
    if (paymentMethodSelect.value === "paypal") {
        paypalForm.style.display = "block";
        stripeForm.style.display = "none";
    } else if (paymentMethodSelect.value === "stripe") {
        paypalForm.style.display = "none";
        stripeForm.style.display = "block";
    }
});

paymentForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const selectedPaymentMethod = paymentMethodSelect.value;

    if (selectedPaymentMethod === "paypal") {
        // Handle PayPal payment
    } else if (selectedPaymentMethod === "stripe") {
        // Handle Stripe payment
    }
});