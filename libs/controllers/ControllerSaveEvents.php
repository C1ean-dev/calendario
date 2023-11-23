<?php 
require_once("../../config/config.php");

// Verifica se os dados foram enviados via POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Recebe os dados do formulário
    $allDay = $_POST["allDay"];
    $start = $_POST["start"];
    $end = $_POST["end"];
    $startHour = $_POST["startHour"];
    $endHour = $_POST["endHour"];
    $title = $_POST["title"];
    $description = $_POST["description"];
    $colorEvent = $_POST["colorEvent"];
    $colorText = $_POST["colorText"];

    // Cria a conexão com o banco de dados
    $conn = new mysqli(HOST, USER, PASS, DB);

    // Verifica se a conexão foi estabelecida com sucesso
    if ($conn->connect_error) {
        die("Falha na conexão com o banco de dados: " . $conn->connect_error);
    }

    // Prepara a consulta SQL de inserção
    $stmt = $conn->prepare("INSERT INTO eventos (allDay,start,end,startHour,endHour,title,description,colorEvent,colorText)
            VALUES (?,?,?,?,?,?,?,?,?)");
    $stmt->bind_param("sssssssss", $allDay, $start, $end, $startHour, $endHour, $title, $description, $colorEvent, $colorText);

    // Executa a consulta SQL
    if ($stmt->execute()) {
        echo "Evento salvo com sucesso!";
    } else {
        echo "Erro ao salvar o evento: " . $stmt->error;
    }

    // Fecha a conexão com o banco de dados
    $stmt->close();
    $conn->close();
} else {
    // Se não for uma requisição POST, retorna um erro
    http_response_code(405);
    echo "Método não permitido";
}
?>
