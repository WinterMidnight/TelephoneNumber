document.getElementById('check-btn').addEventListener('click', function() {
    const input = document.getElementById('user-input').value.trim();
    const resultsDiv = document.getElementById('results-div');

    if (!input) {
        alert("Please provide a phone number");
        return;
    }

    const validPatterns = [
        /^\d{1}?\s?\(?\d{3}\)?\s?\d{3}[-]?\d{4}$/, // 1 555-555-5555, 1 (555) 555-5555, etc.
        /^\d{10}$/, // 5555555555
    ];
    const invalidPatterns = [
        /[^0-9\s\(\)\-]/, // Invalid characters
        /^\d{0,1}\s?\d{3}\s?\d{3}\s?\d{4}$/, // 2 757 622-7382
        /^\d{1,2}\s?\(?\d{3}\)?[-]?\d{3}[-]?\d{4}$/, // Invalid length
        /^\d{1,2}\s?\d{10}$/, // Invalid length
        /^\d{1,3}\s?\(?\d{3}\)?\s?\d{3}[-]?\d{4}$/, // Invalid length
    ];

    if (validPatterns.some(pattern => pattern.test(input))) {
        resultsDiv.textContent = `Valid US number: ${input}`;
    } else if (invalidPatterns.some(pattern => pattern.test(input))) {
        resultsDiv.textContent = `Invalid US number: ${input}`;
    } else {
        resultsDiv.textContent = `Invalid US number: ${input}`;
    }
});

document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('results-div').textContent = '';
    document.getElementById('user-input').value = '';
});
