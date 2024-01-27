// public/js/main.js
document.addEventListener('DOMContentLoaded', function () {
    const showTourButton = document.getElementById('showTourButton');

    if (showTourButton) {
        showTourButton.addEventListener('click', function (event) {
            event.preventDefault();

            // Example: Get input value from a form field with ID "destination"
            const destinationInput = document.getElementById('destination');
            const destination = destinationInput.value;

            // Example: Display an alert with the selected destination
            alert('Selected Destination: ' + destination);

            // Example: Perform AJAX request to the server for additional functionality
            fetch('/travelagency', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ destination }),
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // Handle the server response as needed
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    }
});
