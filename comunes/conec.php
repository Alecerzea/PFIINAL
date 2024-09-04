<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "fundacion";
$port = 3306; // Puerto MySQL

$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Comprobar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
