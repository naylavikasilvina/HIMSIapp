<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");
include "config.php";
$nim = $_GET['nim'];

try {

    $query = $pdo->prepare("
        SELECT * FROM pendaftaran
        WHERE nim = :nim
    ");
    $query->bindParam(':nim', $nim);
    $query->execute();
    $data = $query->fetch(PDO::FETCH_ASSOC);

    if($data){

        echo json_encode([
            'success' => true,
            'data' => $data
        ]);

    } else {

        echo json_encode([
            'success' => false,
            'message' => 'Data tidak ditemukan'
        ]);

    }

} catch(PDOException $e){

    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);

}

?>