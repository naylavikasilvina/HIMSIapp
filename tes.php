<?php

try {
    $pdo = new PDO(
        "mysql:host=localhost;dbname=si2q7737_himsi;charset=utf8",
        "si2q7737_naylavika",
        "ClRGsJ0lQ5yl]6pZ"
    );

    echo "BERHASIL";

} catch (PDOException $e) {

    echo $e->getMessage();

}