<?php
header("Access-Control-Allow-Origin: *");
include "config.php";

$query = $pdo->prepare("
  SELECT * FROM pendaftaran
  ORDER BY id DESC
");

$query->execute();
$data = $query->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($data);

?>