document.getElementById('check-btn').addEventListener('click', function() {
    const input = document.getElementById('user-input').value.trim();
    const resultsDiv = document.getElementById('results-div');

    // Check if input is empty
    if (!input) {
        alert("Please provide a phone number");
        return;
    }

    // Define regex for valid US phone numbers
    const validPattern = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[-]?\d{4}$/; // Matches valid formats
    const invalidPattern = /[^0-9\s\(\)\-]/; // Contains invalid characters

    // Check for valid number
    if (validPattern.test(input)) {
        resultsDiv.textContent = `Valid US number: ${input}`;
    } else if (invalidPattern.test(input) || input.length < 10 || input.length > 15) {
        // Check for invalid number
        resultsDiv.textContent = `Invalid US number: ${input}`;
    } else {
        // Fallback for any other invalid condition
        resultsDiv.textContent = `Invalid US number: ${input}`;
    }
});

// Clear button functionality
document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('results-div').textContent = '';
    document.getElementById('user-input').value = '';
});
