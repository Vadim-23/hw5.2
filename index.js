"use strict";

function convertDollarsToHryvnia(dollars) {
    const conversionRate = 26;
    const container = document.getElementById('conversion-container');
    const hryvnias = dollars * conversionRate;
    container.innerHTML = '';
    const div = document.createElement('div');
    div.className = 'conversion-item';
    div.textContent = `${dollars} доларів = ${hryvnias} гривень`;
    container.appendChild(div);
}

function initialConversion() {
    const container = document.getElementById('conversion-container');
    container.innerHTML = '';
    for (let dollars = 10; dollars <= 100; dollars += 10) {
        const conversionRate = 26;
        const hryvnias = dollars * conversionRate;
        const div = document.createElement('div');
        div.className = 'conversion-item';
        div.textContent = `${dollars} доларів = ${hryvnias} гривень`;
        container.appendChild(div);
    }
}

document.getElementById('convertButton').addEventListener('click', () => {
    const input = document.getElementById('dollarInput').value;
    const errorMessage = document.getElementById('error-message');
    const dollars = parseFloat(input);

    if (isNaN(dollars) || dollars <= 0) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        convertDollarsToHryvnia(dollars);
    }
});

initialConversion();
