"use strict";
$(function () {
    // Set the initial value of the quantity input
    var qtyInput = $('.quantity-input');
    var initialValue = 1;
    qtyInput.val(initialValue);

    // Handle minus button click
    $('.quantity-minus').click(function () {
        var currentValue = parseInt(qtyInput.val());
        if (currentValue > 1) {
            qtyInput.val(currentValue - 1);
        }
    });

    // Handle plus button click
    $('.quantity-plus').click(function () {
        var currentValue = parseInt(qtyInput.val());
        qtyInput.val(currentValue + 1);
    });
});

// Load the JSON data

fetch('https://blissofearth.abanoubgeorge.info/assets/js/countries.json')
    .then(response => response.json())
    .then(data => {
        // Get the country and governorate select elements
        const countrySelect = document.getElementById('country-select');
        const stateSelect = document.getElementById('governorate-select');

        // Populate the country select element
        if (data.countries) {
            data.countries.forEach(country => {
                const option = document.createElement('option');
                option.value = country.name;
                option.textContent = country.name;
                countrySelect.appendChild(option);
            });
        }

        // Populate the governorate select element based on the selected country
        countrySelect.addEventListener('change', event => {
            const selectedCountry = event.target.value;

            // Clear the governorate select element
            stateSelect.innerHTML = '<option value="">Select a governorate</option>';

            // Populate the governorate select element with options for the selected country
            const selectedCountryData = data.countries.find(country => country.name === selectedCountry);
            if (selectedCountryData) {
                selectedCountryData.states.forEach(state => {
                    const option = document.createElement('option');
                    option.value = state.name;
                    option.textContent = state.name;
                    stateSelect.appendChild(option);
                });
            }
        });
    })
    .catch(error => {
        console.error('Error loading data:', error);
    });

