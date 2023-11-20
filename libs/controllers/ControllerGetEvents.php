
<?php
require_once("../config/config.php");
header('Access-Control-Allow-Origin: https://cleandevweb.wuaze.com');

header('Content-Type: application/json');


// Cria a conexão com o banco de dados
$conn = new mysqli(HOST, USER, PASS, DB);

// Verifica se a conexão foi estabelecida com sucesso
if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

// Prepara a consulta SQL para buscar os eventos
$sql = "SELECT * FROM eventos";

// Executa a consulta SQL
$result = $conn->query($sql);

// Array para armazenar os eventos
$events = array();

// Percorre os resultados da consulta
while($row = $result->fetch_assoc()) {
    // Adiciona cada evento ao array de eventos
    $events[] = $row;
}

// Fecha a conexão com o banco de dados
$conn->close();

// Retorna os eventos como uma resposta JSON
echo json_encode($events);

?>

