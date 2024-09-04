function toggleSubActivities(id) {
    var subactivities = document.querySelectorAll('.subactivities-list');
    subactivities.forEach(function(subactivity) {
        if (subactivity.id === id) {
            subactivity.style.display = subactivity.style.display === 'block' ? 'none' : 'block';
        } else {
            subactivity.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactanos');
    const mensajeDiv = document.getElementById('mensaje');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío normal del formulario

        const formData = new FormData(form);

        fetch('comunes/process_contact.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            mensajeDiv.textContent = data; // Muestra el mensaje de respuesta
            form.reset(); // Resetea el formulario
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
