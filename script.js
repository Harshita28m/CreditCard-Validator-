document.querySelector('.card-number-input').oninput = () => {
    document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
}

document.querySelector('.card-holder-input').oninput = () => {
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}

document.querySelector('.month-input').oninput = () => {
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () => {
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () => {
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}


document.querySelector('.submit-btn').onclick = (event) => {
    event.preventDefault(); // Prevent form submission for now

    const cardNumber = document.querySelector('.card-number-input').value;
    const cardHolder = document.querySelector('.card-holder-input').value;
    const expMonth = document.querySelector('.month-input').value;
    const expYear = document.querySelector('.year-input').value;
    const cvv = document.querySelector('.cvv-input').value;

    // Check if any field is empty
    if (cardNumber.trim() === '' || cardHolder.trim() === '' || expMonth === 'month' || expYear === 'year' || cvv.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Check card number length
    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
        alert('Please enter a valid 16-digit card number.');
        return;
    }

    // Check expiration date
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    if (parseInt(expYear) < currentYear || (parseInt(expYear) === currentYear && parseInt(expMonth) < currentMonth)) {
        alert('Please enter a valid expiration date.');
        return;
    }

    // Check CVV length
    if (cvv.length !== 3 || isNaN(cvv)) {
        alert('Please enter a valid 3-digit CVV.');
        return;
    }

    // If all fields are valid, submit the form
    alert('Form submitted successfully!');
    document.querySelector('form').submit();
};

