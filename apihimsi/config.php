<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$hostname = "localhost";
$database = "si2q7737_himsi";
$username = "si2q7737_naylavika";
$password = "NaylaVika123#";

try {

    $pdo = new PDO(
        "mysql:host=$hostname;dbname=$database;charset=utf8",
        $username,
        $password
    );

    $pdo->setAttribute(
        PDO::ATTR_ERRMODE,
        PDO::ERRMODE_EXCEPTION
    );

} catch(PDOException $e) {

    die("Koneksi gagal : " . $e->getMessage());

}

?>