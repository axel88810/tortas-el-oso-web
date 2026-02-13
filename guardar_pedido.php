<?php
// Configura tus datos de conexión
$host = "localhost";
$usuario = "root";
$contrasena = ""; // sin contraseña por defecto en XAMPP
$base_de_datos = "tortas_oso";

// Conectar a MySQL
$conn = new mysqli($host, $usuario, $contrasena, $base_de_datos);

// Verificar conexión
if ($conn->connect_error) {
    http_response_code(500);
    die("Error de conexión: " . $conn->connect_error);
}

// Obtener datos del formulario
$nombre = $_POST['nombre'] ?? '';
$telefono = $_POST['telefono'] ?? '';
$direccion = $_POST['direccion'] ?? '';
$productos = $_POST['productos'] ?? '';
$total = $_POST['total'] ?? 0;

$stmt = $conn->prepare("INSERT INTO pedidos (nombre_cliente, telefono, direccion, productos, total) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("ssssd", $nombre, $telefono, $direccion, $productos, $total);

if ($stmt->execute()) {
    http_response_code(200);
    echo "Pedido guardado correctamente.";
} else {
    http_response_code(500);
    echo "Error al guardar el pedido.";
}

$stmt->close();
$conn->close();
?>
