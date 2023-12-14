function submitForm() {
    const name = document.getElementById('name').value;
    const clientsServed = document.getElementById('clientsServed').value;

    // Simulate an AJAX request to the server
    fetch('/saveClient', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, clientsServed }),
    })
    .then(response => response.json())
    .then(data => {
        alert(`Client saved with ID: ${data._id}`);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
