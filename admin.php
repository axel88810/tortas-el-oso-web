<?php
// Configurar conexión
$host = "localhost";
$usuario = "root";
$contrasena = "";
$base_de_datos = "tortas_oso";

$conn = new mysqli($host, $usuario, $contrasena, $base_de_datos);
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

$sql = "SELECT * FROM pedidos ORDER BY fecha DESC";
$resultado = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Panel de Pedidos - Tortas El Oso</title>
  <style>
    body { font-family: Arial; margin: 30px; }
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
    th { background-color: #8b0000; color: white; }
    h1 { color: #8b0000; }
  </style>
</head>
<body>
  <h1>📋 Pedidos Recibidos</h1>
  <table>
    <tr>
      <th>ID</th>
      <th>Cliente</th>
      <th>Teléfono</th>
      <th>Dirección</th>
      <th>Productos</th>
      <th>Total</th>
      <th>Fecha</th>
    </tr>
    <?php while($row = $resultado->fetch_assoc()): ?>
      <tr>
        <td><?= $row["id"] ?></td>
        <td><?= htmlspecialchars($row["nombre_cliente"]) ?></td>
        <td><?= htmlspecialchars($row["telefono"]) ?></td>
        <td><?= htmlspecialchars($row["direccion"]) ?></td>
        <td><pre><?= htmlspecialchars($row["productos"]) ?></pre></td>
        <td>$<?= $row["total"] ?></td>
        <td><?= $row["fecha"] ?></td>
      </tr>
    <?php endwhile; ?>
  </table>
</body>
</html>

<?php $conn->close(); ?>
