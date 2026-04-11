<?php
header('Content-Type: application/json');
$json_data = file_get_contents("php://input");

if(empty($json_data)) {
    echo json_encode(["status" => "error", "message" => "Keine Daten empfangen."]);
    exit;
}

if(file_put_contents('../turnier-daten.json', $json_data)) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error", "message" => "Schreibrechte fehlen (CHMOD 666 prüfen)."]);
}
?>