<?php

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];

echo "El nombre es $nombre";
echo "<br>";
echo "El correo electrónico es $correo";

?>
<?php

$correo = $_POST['correo'];

if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
  echo "El correo electrónico no es válido";
} else {
  echo "El correo electrónico es válido";
}

?>
