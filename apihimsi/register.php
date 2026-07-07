<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include "config.php";

try {

    $cek = $pdo->prepare("
        SELECT id
        FROM pendaftaran
        WHERE nim = ?
    ");

    $cek->execute([
        $_POST['nim']
    ]);

    if ($cek->rowCount() > 0) {

        echo json_encode([
            'success' => false,
            'message' => 'NIM sudah terdaftar'
        ]);

        exit;
    }

    $foto = '';

    if (isset($_FILES['foto']) && $_FILES['foto']['error'] == 0) {

        $ext = strtolower(
            pathinfo($_FILES['foto']['name'], PATHINFO_EXTENSION)
        );

        $foto = date('YmdHis') . '_' . rand(1000,9999) . '.' . $ext;

        move_uploaded_file(
            $_FILES['foto']['tmp_name'],
            'upload/' . $foto
        );
    }

    $query = $pdo->prepare("
        INSERT INTO pendaftaran (
            nama_lengkap,
            nim,
            semester,
            alamat,
            tempat_lahir,
            tanggal_lahir,
            agama,
            hoby,
            keahlian,
            ipk,
            no_hp,
            email,
            alasan_bergabung,
            foto
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ");

    $query->execute([

        $_POST['nama_lengkap'],
        $_POST['nim'],
        $_POST['semester'],
        $_POST['alamat'],
        $_POST['tempat_lahir'],
        $_POST['tanggal_lahir'],
        $_POST['agama'],
        $_POST['hoby'],
        $_POST['keahlian'],
        $_POST['ipk'],
        $_POST['no_hp'],
        $_POST['email'],
        $_POST['alasan_bergabung'],
        $foto

    ]);

    echo json_encode([
        'success' => true,
        'message' => 'Pendaftaran berhasil'
    ]);

} catch (Exception $e) {

    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);

}