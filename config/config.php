<?php
$Pagecurrent="";
//header('Access-Control-Allow-Origin: https://cleandevweb.wuaze.com');
define('DIRPAGE',"https://{$_SERVER['HTTP_HOST']}/{$Pagecurrent}");

$bar=(substr($_SERVER['DOCUMENT_ROOT'],-1)=='/')?"":"/";
define('DIRREQ',"{$_SERVER['DOCUMENT_ROOT']}{$bar}{$Pagecurrent}");

define('HOST', ''); 
define('USER', 'root'); // O nome de usuário do seu banco de dados
define('PASS', ''); // A senha do seu banco de dados
define('DB', 'if0_35048317_eventos'); // O nome do seu banco de dados
?>

