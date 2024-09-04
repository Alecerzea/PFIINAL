document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const loginMessageDiv = document.getElementById('login-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío normal del formulario

        const formData = new FormData(form);

        fetch('comunes/login_process.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            if (data === "success") {
                window.location.href = 'comunes/empleado.php'; // Ajusta la ruta aquí
            } else {
                loginMessageDiv.textContent = data; // Muestra el mensaje de error
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
