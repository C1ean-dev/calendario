<?php
require_once("../../config/config.php");
header('Access-Control-Allow-Origin: https://cleandevweb.wuaze.com');

header('Content-Type: application/json');

$conn = new mysqli(HOST, USER, PASS, DB);

if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

$sql = "SELECT * FROM eventos";
$result = $conn->query($sql);

$events = array();

while($row = $result->fetch_assoc()) {
    // Formata as datas para o formato 'Y-m-d\TH:i:s'
    $row['start'] = date('Y-m-d\TH:i:s', strtotime($row['start']));
    $row['end'] = date('Y-m-d\TH:i:s', strtotime($row['end']));
    
    $events[] = $row;
}

$conn->close();

echo json_encode($events);
?>
