<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

include "config.php";

$data = json_decode(file_get_contents("php://input"));

$password = md5($data->password ?? '');

$stmt = $pdo->prepare("
    SELECT * FROM admin
    WHERE password = :password
");

$stmt->execute([
    ':password' => $password
]);

$admin = $stmt->fetch(PDO::FETCH_ASSOC);

if($admin){

    echo json_encode([
        'success' => true,
        'data' => $admin
    ]);

}else{

    echo json_encode([
        'success' => false,
        'message' => 'Password salah'
    ]);

}