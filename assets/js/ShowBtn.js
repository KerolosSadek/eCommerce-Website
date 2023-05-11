// Start Home Page

// Show More Button
const showMoreButton = document.getElementById('show-more');
const hiddenCards = document.querySelectorAll('.col-md-4.d-none');

let index = 0;
showMoreButton.addEventListener('click', () => {
    for (let i = index; i < index + 6; i++) {
        if (hiddenCards[i]) {
            hiddenCards[i].classList.remove('d-none');
        }
    }
    index += 6;
    if (index >= hiddenCards.length) {
        showMoreButton.classList.add('disabled');
        showMoreButton.textContent = 'No More Product';
    }
});
// button 2
const showButton = document.getElementById('show-more-2');
const hCards = document.querySelectorAll('.hide.d-none');

let num = 0;
showButton.addEventListener('click', () => {
    for (let i = num; i < num + 6; i++) {
        if (hCards[i]) {
            hCards[i].classList.remove('d-none');
        }
    }
    num += 6;
    if (num >= hCards.length) {
        showButton.classList.add('disabled');
        showButton.textContent = 'No More Product';
    }
});
// button 3
const showButton2 = document.getElementById('show-more-3');
const hCards2 = document.querySelectorAll('.hide-2.d-none');

let num2 = 0;
showButton2.addEventListener('click', () => {
    for (let i = num2; i < num2 + 6; i++) {
        if (hCards2[i]) {
            hCards2[i].classList.remove('d-none');
        }
    }
    num2 += 6;
    if (num2 >= hCards2.length) {
        showButton2.classList.add('disabled');
        showButton2.textContent = 'No More Product';
    }
});
