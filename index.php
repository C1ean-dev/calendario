<!DOCTYPE html>
<?php require_once("config/config.php"); ?>
<head>
    <meta name="viewport">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="calendario">
    <meta name="author" content="Clean-dev">
    <title>calendario</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="libs/css/bootstrap/bootstrap.min.css">
    <link rel="stylesheet" href="libs/js/FullCalendar/lib/main.min.css">
    <link rel="stylesheet" href="libs/css/style.css">
</head>
<html lang="pt-br">
  <body>
    <div class="calendar"></div>
    
    <?php require_once("libs/html/modalEventUpdate.html"); ?>

    <?php require_once("libs/html/modalEventCreate.html"); ?>


  </body>

  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="libs/js/FullCalendar/lib/main.min.js"></script>
  <script src="libs/js/bootstrap/bootstrap.min.js"></script>
  <script src="libs/js/script.js"></script>
  <script src="libs/js/modalScriptCreate.js"></script>
  <script src="libs/js/modalScriptUpdate.js"></script> 
  
</html>
