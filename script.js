const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

// Function to validate the phone number
const validateNumber = event => {
    event.preventDefault(); // Prevent the form from submitting
    const number = userInput.value.trim();

    // Regular expressions for US phone numbers
    const regex1 = /^1?\s?(?:\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
    
    if (userInput.value === ''){
        return alert('Please provide a phone number');
    } else if (regex1.test(number)) {
        resultsDiv.classList.add('show');
        resultsDiv.textContent = `Valid US number: ${number}`;
    } else {
        resultsDiv.classList.add('show');
        resultsDiv.textContent = `Invalid US number: ${number}`;
    }
    
    userInput.value = '';
    userInput.focus();
    return;
}

// Function to clear the phone number field
const clearFields = event => {
    event.preventDefault();
    userInput.value = '';
    resultsDiv.classList.remove('show');
    resultsDiv.textContent = '';
    userInput.focus(); // Focus the input field for the next input
    return;
}

// Add event listeners to the buttons
checkBtn.addEventListener('click', validateNumber);
clearBtn.addEventListener('click', clearFields);

validateNumber(); // Call the function to validate the phone number

clearFields(); // Call the function to clear the phone number field
