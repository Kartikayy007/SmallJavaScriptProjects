const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const height = parseFloat(form.querySelector('#height').value);
    const weight = parseFloat(form.querySelector('#weight').value);
    const result = document.querySelector('#results');
    const range = document.querySelector('#range')
    
    if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
        result.innerHTML = 'Please enter valid values';
        result.innerHTML = height;

    } else {
        const bmi = (weight / ((height * height)/10000)).toFixed(2);
        range.innerHTML = `<span>Your BMI is ${bmi}</span>`;
        if(bmi < 18.6) {
            result.innerHTML = `<br><span>You are underwieght</span>`
        } else if(bmi > 24.9) {
            result.innerHTML = `<br><span>You are overwieght</span>`
        } else {
            result.innerHTML = `<br><span>You in Normal Range</span>`
        }
    }
});