<?php
include 'conec.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = mysqli_real_escape_string($conn, $_POST['nombre']);
    $apellido = mysqli_real_escape_string($conn, $_POST['apellido']);
    $correo = mysqli_real_escape_string($conn, $_POST['correo']);
    $pass = password_hash(mysqli_real_escape_string($conn, $_POST['pass']), PASSWORD_BCRYPT);

    $sql = "INSERT INTO registro (nombre, apellido, correo, pass) VALUES (?, ?, ?, ?)";
    
    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param("ssss", $nombre, $apellido, $correo, $pass);
        
        if ($stmt->execute()) {
            echo "Registro exitoso.";
            header('Location: ../login.html'); // Redirigir al login después del registro exitoso
            exit();
        } else {
            echo "Error: " . $stmt->error;
        }
        
        $stmt->close();
    } else {
        echo "Error al preparar la consulta: " . $conn->error;
    }

    $conn->close();
} else {
    echo "Método de solicitud no válido.";
}
?>
