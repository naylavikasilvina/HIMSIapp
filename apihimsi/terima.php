<?php
  header("Access-Control-Allow-Origin: *");
  include "config.php";

  $id = $_GET['id'];
  $query = $pdo->prepare("
    UPDATE pendaftaran
    SET status='Diterima'
    WHERE id=:id
  ");

  $query->bindParam(':id', $id);
  $query->execute();
  echo json_encode([
    'success' => true
  ]);

?>